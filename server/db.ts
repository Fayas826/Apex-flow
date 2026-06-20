import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, contacts, applications, InsertContact, InsertApplication } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// In-memory fallbacks
const inMemoryUsers = new Map<string, any>();
const inMemoryContacts: any[] = [];
const inMemoryApplications: any[] = [];
let nextUserId = 1;
let nextContactId = 1;
let nextApplicationId = 1;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Using in-memory fallback for upsertUser");
    const existing = inMemoryUsers.get(user.openId);
    const updated = {
      id: existing ? existing.id : nextUserId++,
      openId: user.openId,
      name: user.name ?? existing?.name ?? null,
      email: user.email ?? existing?.email ?? null,
      loginMethod: user.loginMethod ?? existing?.loginMethod ?? null,
      role: user.role ?? existing?.role ?? (user.openId === ENV.ownerOpenId ? "admin" : "user"),
      createdAt: existing ? existing.createdAt : new Date(),
      updatedAt: new Date(),
      lastSignedIn: user.lastSignedIn ?? new Date(),
    };
    inMemoryUsers.set(user.openId, updated);
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Using in-memory fallback for getUserByOpenId");
    return inMemoryUsers.get(openId);
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function insertContact(contact: InsertContact) {
  const db = await getDb();
  const now = new Date();
  if (!db) {
    console.warn("[Database] Using in-memory fallback for insertContact");
    const newContact = {
      id: nextContactId++,
      name: contact.name,
      email: contact.email,
      company: contact.company ?? null,
      message: contact.message,
      createdAt: now,
    };
    inMemoryContacts.push(newContact);
    return newContact;
  }

  await db.insert(contacts).values(contact);
  return {
    ...contact,
    id: nextContactId++,
    createdAt: now,
  };
}

export async function insertApplication(app: InsertApplication) {
  const db = await getDb();
  const now = new Date();
  if (!db) {
    console.warn("[Database] Using in-memory fallback for insertApplication");
    const newApp = {
      id: nextApplicationId++,
      jobId: app.jobId,
      jobTitle: app.jobTitle,
      name: app.name,
      email: app.email,
      resumeUrl: app.resumeUrl,
      message: app.message ?? null,
      createdAt: now,
    };
    inMemoryApplications.push(newApp);
    return newApp;
  }

  await db.insert(applications).values(app);
  return {
    ...app,
    id: nextApplicationId++,
    createdAt: now,
  };
}

