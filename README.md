# React Shadcn Base
![Landing](/demo_image/landing.png)
![Auth](/demo_image/auth.png)
![Dashboard](/demo_image/dashboard.png)
[Demo React Shadcn Base](https://react-shadcn-base.vercel.app/)

- A base project for Vite React application, building with Shadcn/ui component library.
- Come with essential features like Auth, Dashboard, Landing page, Charts, CRUD Table,...
- Integrate with other popular libraries like Axios, SWR for fetching ( You can use axios if you want), React Router v7 for routing management, Framer motion for animation.
- Shadcn/ui: https://ui.shadcn.com/
- Vite: https://vite.dev/
- React: https://react.dev/
# Project state
- Currently using React 18 and Tailwind v3. Waiting for Shadcn's tailwind v4 build release. You can try update Tailwind v4 through canary version on this document: https://ui.shadcn.com/docs/tailwind-v4
# 1. Core technologies
- React 18 Typescript
- Vite
- Shadcn/ui
- TailwindCSS
- Axios
- SWR
- React Router v7
# 2. Project Architecture
## 2.1. Directory structure
```
src/
├── assets/
│   └── svgs/              # SVG assets
├── components/
│   ├── common/            # Shared components
│   ├── layout/            # Layout-specific components
│   └── ui/                # Shadcn UI components
├── config/                # Configuration files
├── contexts/              # React contexts
├── features/              # Feature-based modules
├── hooks/                 # Custom React hooks
├── i18n/                  # Internationalization
├── layouts/              # Page layouts
├── lib/                  # Utilities and libraries
├── pages/                # Page components
├── routes/               # Route configuration
├── types/                # TypeScript definitions
└── utils/                # Helper functions
```
## 2.2. Feature-based Architecture
- Features are organized in a modular structure. Each feature is like a small projects:
```
features/
└── BaseFeature/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── utils/
    └── index.ts / export the default component -> More cleaner import in other file and easy to copy paste to other projects
```