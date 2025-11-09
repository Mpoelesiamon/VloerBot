# VloerBot - AI Chatbot Widget

## What is VloerBot?

VloerBot is an AI-powered chatbot widget designed for flooring companies. It provides intelligent customer support and advice about flooring products, installation, maintenance, and styling. The chatbot uses Google Gemini 2.5 Flash AI to have natural conversations with customers.

## How It Works

The chatbot is a React-based widget that appears as a floating chat button on your website. When users click it, they can:

- **Ask questions** about flooring products, installation, maintenance, and more
- **Upload images** of floors for AI analysis and specific advice
- **Upload documents** (PDF, DOC, DOCX) for review
- **Get real-time responses** with streaming text that appears as the AI types

The chatbot automatically detects the user's language and responds in the same language they use. It connects to a backend service that handles:
- AI conversation processing via Google Gemini
- File storage for uploaded images and documents
- Real-time streaming of AI responses

## Running Locally

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Setup

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd vloerenhuis-bot
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:8080` (or the next available port if 8080 is in use).

### Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
