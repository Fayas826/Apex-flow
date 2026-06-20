# ApexFlow - Premium SaaS Telemetry & Analytics Platform

ApexFlow is a modern, high-performance SaaS product website and telemetry dashboard designed for next-generation product, engineering, and business teams. Built using React, Express, tRPC, Vite, and styled with premium CSS and Framer Motion.

## 🚀 Key Features

- **ApexFlow Interactive Dashboard:** A fully interactive, responsive dashboard view loaded with real-time simulated charts for API latency, server uptime, and usage statistics.
- **Conversion-Optimized Layouts:** 13 key pages designed to maximize engagement and signups, including dedicated Features, Pricing, Careers, Blog, and Solutions layouts.
- **Resilient Database Layer:** Full database integration via Drizzle ORM (MySQL/TiDB) with robust in-memory fallbacks to guarantee 100% server uptime even without an active database connection.
- **Wired Submissions:** Interactive contact inquiries and Radix UI dialog job application forms wired up dynamically to backend endpoints.
- **Mock Billing Integration:** Standardized Stripe checkout simulation modal flow in the pricing page.
- **Premium Aesthetics:** Consistent design system using modern typography (Sora and Inter fonts), HSL-curated colors, smooth animations, and optimized media assets.

---

## 🛠️ Technology Stack

- **Frontend:** React, Vite, Framer Motion, Radix UI Components, Recharts, Lucide Icons, Wouter (Routing)
- **Backend:** Node.js, Express, tRPC
- **Database:** Drizzle ORM, MySQL (MySQL2), with memory fallbacks
- **Styling:** CSS variables, Tailwind CSS configuration

---

## 💻 Getting Started Locally

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone <your-repository-url>
cd saas-company-website
npm install
```

### 2. Configuration
Create a `.env` file in the root directory:
```ini
PORT=3000
DATABASE_URL=mysql://user:password@host:port/database # Optional: fallback to in-memory mode if not supplied
OAUTH_SERVER_URL=http://localhost:3000
```

### 3. Run Development Server
Start the frontend and backend in hot-reloading development mode:
```bash
npm run dev
```

### 4. Build for Production
To bundle the frontend and compile backend scripts:
```bash
npm run build
```

### 5. Start Production Server
Launch the production compiled server:
```bash
npm run start
```

