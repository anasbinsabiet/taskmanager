# Task Manager App

A modern, full-stack task management application built with Next.js 14, Convex backend, and TypeScript. Features user authentication, real-time task management, and a clean, responsive UI.

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.vercel.app) *(Update with your actual deployment URL)*

## 📋 Features

- **Authentication**: Secure email/password authentication with Convex Auth
- **Task Management**: Create, view, complete, and delete tasks
- **Real-time Updates**: Instant synchronization across devices
- **Responsive Design**: Works seamlessly on desktop and mobile
- **User Dashboard**: Personalized welcome message and task overview
- **Task Status**: Toggle between pending and completed tasks
- **Clean UI**: Modern design with TailwindCSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Backend**: Convex (Database + Real-time sync)
- **Authentication**: Convex Auth with email/password
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
task-manager-app/
├── app/
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── dashboard/page.tsx
│   ├── ConvexClientProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthForm.tsx
│   ├── TaskForm.tsx
│   └── TaskList.tsx
├── convex/
│   ├── auth.ts
│   ├── schema.ts
│   └── tasks.ts
├── lib/
│   └── auth.ts
├── .env.example
├── .gitignore
├── convex.json
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Convex account (free at [convex.dev](https://convex.dev))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   # Install Convex CLI globally
   npm install -g convex
   
   # Login to Convex
   npx convex login
   
   # Initialize Convex project
   npx convex dev
   ```
   
   This will:
   - Create a new Convex project
   - Generate your `NEXT_PUBLIC_CONVEX_URL`
   - Start the Convex development server

4. **Configure environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Update .env.local with your Convex URL (provided after running convex dev)
   NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npx convex dev` - Start Convex development server
- `npx convex deploy` - Deploy Convex functions

### Database Schema

The app uses two main tables:

**Users Table** (managed by Convex Auth)
- Authentication and user profile data

**Tasks Table**
- `title`: Task title (required)
- `description`: Optional task description
- `completed`: Boolean status
- `userId`: Reference to the user
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy Convex backend**
   ```bash
   npx convex deploy
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_CONVEX_URL`: Your production Convex URL
   - Deploy!

### Environment Variables for Production

```bash
NEXT_PUBLIC_CONVEX_URL=https://your-production-convex-url.convex.cloud
```

## 🔐 Authentication Flow

1. **Sign Up**: Users create an account with email/password
2. **Sign In**: Existing users authenticate with credentials
3. **Dashboard**: Authenticated users access their personal task dashboard
4. **Session Management**: Automatic session handling with Convex Auth
5. **Sign Out**: Secure session termination

## 📱 Features Overview

### Authentication Pages
- Clean, responsive login/signup forms
- Form validation and error handling
- Automatic redirection after authentication

### Dashboard
- Personalized welcome message
- Task creation form
- Task list with status management
- Real-time updates

### Task Management
- **Create**: Add new tasks with title and optional description
- **View**: See all tasks organized by status (pending/completed)
- **Complete**: Toggle task completion status
- **Delete**: Remove tasks permanently

## 🎨 UI/UX Features

- **Responsive Design**: Works on all device sizes
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Modern Design**: Clean, professional interface

## 🔧 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Component-specific styles in individual files

### Functionality
- Add new task fields in `convex/schema.ts`
- Extend task operations in `convex/tasks.ts`
- Create new components in `components/` directory

## 🐛 Troubleshooting

### Common Issues

1. **Convex connection errors**
   - Verify `NEXT_PUBLIC_CONVEX_URL` is correct
   - Ensure Convex dev server is running
   - Check network connectivity

2. **Authentication issues**
   - Clear browser cache and cookies
   - Verify Convex Auth configuration
   - Check console for error messages

3. **Build errors**
   - Run `npm install` to ensure all dependencies
   - Check TypeScript errors with `npm run lint`
   - Verify environment variables

## 📈 Performance

- **Real-time sync**: Instant updates with Convex
- **Optimistic updates**: Immediate UI feedback
- **Efficient queries**: Indexed database operations
- **Code splitting**: Automatic Next.js optimization

## 🔒 Security

- **Authentication**: Secure email/password with Convex Auth
- **Authorization**: User-specific data access
- **Data validation**: Server-side input validation
- **HTTPS**: Secure data transmission

## 📝 Development Notes

### Time to Complete
This project was implemented in approximately **4-6 hours**, including:
- Project setup and configuration (1 hour)
- Backend schema and functions (1 hour)
- Authentication implementation (1.5 hours)
- UI components and styling (2 hours)
- Testing and refinement (0.5 hours)

### Approach
1. **Planning**: Defined project structure and requirements
2. **Backend First**: Set up Convex schema and functions
3. **Authentication**: Implemented secure user management
4. **Frontend**: Built responsive UI components
5. **Integration**: Connected frontend with backend
6. **Testing**: Verified all functionality
7. **Deployment**: Configured for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Convex](https://convex.dev/) for the powerful backend platform
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

**Built with ❤️ using Next.js and Convex**