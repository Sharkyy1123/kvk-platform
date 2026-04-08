# KVK Platform

A government-backed platform connecting verified farmers with customers seeking organic and authentic produce.

Built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and Prisma (PostgreSQL).

## 🚀 Quick Start

### 1. Requirements
- Node.js 20.x or later (required by Next.js 16 and Prisma 5)
- PostgreSQL database

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Copy the example environment variables file and update it with your actual values:
```bash
cp .env.example .env
```

Ensure your `DATABASE_URL` is configured correctly:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/kvk_platform"
```

### 4. Database Setup & Seeding
Push the Prisma schema to your database (this creates the tables):
```bash
npm run db:push
```

Seed the database with sample data (creates an admin, 4 verified farmers, 8 products, and sample reviews):
```bash
npm run db:seed
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Deployment on Vercel

The platform is completely production-ready and optimized for Vercel deployment.

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Expand the **Environment Variables** section and add all required keys from your `.env` file, mainly:
   - `DATABASE_URL` (You can use Supabase, Vercel Postgres, or Neon for a hosted PostgreSQL database)
   - `AUTH_SECRET` (Run `openssl rand -base64 32` to generate one)
5. Keep the default Build and Development Settings (`npm run build` will trigger `prisma generate` automatically via `postinstall`).
6. Click **Deploy**.

## 🎨 Design Philosophy
- **Authentic & Human-made:** Avoids standard web-app grids by incorporating parallax, depth (shadows/glassmorphism), and asymmetrical layouts.
- **Micro-Interactions:** Subtle delays and spring animations via Framer Motion. 
- **Green & Earthy Palette:** Rich greens and warm earthly tones signifying trust, nature, and agriculture. 

## 🏗️ Project Structure
- `src/app/` - Next.js App Router Pages 
- `src/components/ui/` - Foundational reusable UI blocks (Button, Input, Form elements)
- `src/components/layout/` - Layout structures (Navbar, Footer)
- `src/components/home/` - Complex animated homepage sections
- `src/lib/` - Utility functions and singletons (Prisma client)

Enjoy building the future of agriculture! 🌱
