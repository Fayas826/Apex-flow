import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sdk } from "./_core/sdk";
import * as db from "./db";
import { z } from "zod";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    login: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          name: z.string(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const openId = `mock_${input.email}`;
        await db.upsertUser({
          openId,
          name: input.name,
          email: input.email,
          loginMethod: "email",
        });

        const sessionToken = await sdk.createSessionToken(openId, {
          name: input.name,
        });

        const cookieOptions = getSessionCookieOptions(ctx.req);
        (ctx.res as any).cookie(COOKIE_NAME, sessionToken, cookieOptions);

        return {
          openId,
          name: input.name,
          email: input.email,
        };
      }),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      (ctx.res as any).clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contacts: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          company: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        return await db.insertContact(input);
      }),
  }),

  applications: router({
    submit: publicProcedure
      .input(
        z.object({
          jobId: z.string().min(1),
          jobTitle: z.string().min(1),
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          resumeUrl: z.string().url("Invalid URL"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        return await db.insertApplication(input);
      }),
  }),
});

export type AppRouter = typeof appRouter;

