# 🚀 AI Content Generator

A powerful AI-powered content generation platform built with Next.js 15, Google Gemini AI, and modern web technologies. Generate high-quality content for blogs, social media, YouTube, and more with ease.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://ai-content-generator-ilno.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🌟 Features

- **🤖 AI-Powered Content Generation**: Leverages Google Gemini AI to generate creative and engaging content
- **📝 Multiple Content Types**: 
  - Blog titles, topics, and full content
  - YouTube video descriptions, tags, and titles
  - Instagram hashtags and post captions
  - Product descriptions for e-commerce
  - Code documentation and bug reports
  - And many more templates!
- **✨ Rich Text Editor**: Built-in Toast UI editor for formatting and editing generated content
- **📊 Usage Tracking**: Monitor your credit usage with an intuitive dashboard
- **📜 Content History**: Keep track of all your generated content with full history
- **🔐 Secure Authentication**: Clerk authentication for secure user management
- **💾 Database Integration**: PostgreSQL with Neon for reliable data storage
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS and Shadcn UI
- **⚡ Fast Performance**: Optimized with Next.js 15 and Turbopack

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI Integration**: [Google Gemini AI](https://ai.google.dev/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Neon](https://neon.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Editor**: [Toast UI Editor](https://ui.toast.com/tui-editor)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm, yarn, or pnpm
- PostgreSQL database (or Neon account)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RitikBosu/ai-content-generator.git
cd ai-content-generator
```

### 2. Install dependencies

```bash
npm install --force
# or
yarn install --force
# or
pnpm install --force
```

> **Note**: `--force` flag is required due to peer dependency conflicts with Toast UI Editor and React 19

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Google Gemini AI
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# Database (Neon PostgreSQL)
NEXT_PUBLIC_DRIZZLE_DB_URL=your_postgresql_connection_string
```

### 4. Set up the database

```bash
npm run db:push
```

This will create the necessary tables in your PostgreSQL database.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🗂️ Project Structure

```
ai-content-generator/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (context)/           # React Context providers
│   ├── (data)/              # Static data and templates
│   ├── dashboard/           # Main dashboard
│   │   ├── _components/     # Dashboard components
│   │   ├── content/         # Content generation pages
│   │   ├── history/         # Content history
│   │   └── settings/        # User settings
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   └── ui/                  # Reusable UI components
├── lib/                     # Utility functions
├── utils/
│   ├── AiModel.tsx          # Google Gemini AI integration
│   ├── db.tsx               # Database connection
│   └── schema.tsx           # Database schema
├── public/                  # Static assets
└── middleware.ts            # Clerk middleware
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Drizzle Studio

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Usage

1. **Sign Up/Login**: Create an account or sign in using Clerk authentication
2. **Choose a Template**: Select from various content generation templates
3. **Fill the Form**: Provide the required information (niche, topic, outline, etc.)
4. **Generate Content**: Click "Generate Content" to create AI-powered content
5. **Edit & Copy**: Use the rich text editor to refine and copy your content
6. **Track Usage**: Monitor your credit usage in the sidebar

## 🔧 Configuration

### Database Schema

The application uses the following main table:

```typescript
{
  id: serial (primary key)
  formData: text
  aiResponse: text
  templateSlug: string (not null)
  createdBy: string
  createdAt: string
}
```

### AI Model Configuration

The Google Gemini AI model is configured with:
- Model: `gemini-2.5-flash`
- Response format: Plain text/Markdown
- Thinking budget: -1 (unlimited)

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com/). To deploy your own instance:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RitikBosu/ai-content-generator)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Google Gemini AI](https://ai.google.dev/) for AI capabilities
- [Clerk](https://clerk.com/) for authentication
- [Neon](https://neon.tech/) for serverless PostgreSQL
- [Shadcn UI](https://ui.shadcn.com/) for beautiful components

## 📧 Contact

Ritik Bosu - [@RitikBosu](https://github.com/RitikBosu)

Project Link: [https://github.com/RitikBosu/ai-content-generator](https://github.com/RitikBosu/ai-content-generator)

Live Demo: [https://ai-content-generator-ilno.vercel.app](https://ai-content-generator-ilno.vercel.app)

---

Made with ❤️ by Ritik Bosu
