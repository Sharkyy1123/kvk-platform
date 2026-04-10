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


## 🏗️ Project Structure
- `src/app/` - Next.js App Router Pages 
- `src/components/ui/` - Foundational reusable UI blocks (Button, Input, Form elements)
- `src/components/layout/` - Layout structures (Navbar, Footer)
- `src/components/home/` - Complex animated homepage sections
- `src/lib/` - Utility functions and singletons (Prisma client)

Enjoy building the future of agriculture! 🌱
