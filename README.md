# React Shadcn Base
![Landing](/demo_image/landing.png)
![Auth](/demo_image/auth.png)
![Dashboard](/demo_image/dashboard.png)
![Charts](/demo_image/charts.png)
[Demo React Shadcn Base](https://react-shadcn-base.vercel.app/)

- A base project for Vite React application, building with Shadcn/ui component library.
- Come with essential features like Auth, Dashboard, Landing page, Charts, CRUD Table,...
- Integrate with other popular libraries like Axios, SWR for fetching (You can use axios if you want), React Router v7 for routing management, Framer motion for animation.
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
├── layouts/               # Page layouts
├── lib/                   # Utilities and libraries
├── pages/                 # Page components
├── routes/                # Route configuration
├── services/              # API services
├── types/                 # TypeScript definitions
└── utils/                 # Helper functions
```

## 2.2. Feature-based Architecture
Features are organized in a modular structure. Each feature is like a small project:

```
features/
└── FeatureName/
    ├── components/        # UI components specific to the feature
    ├── hooks/             # Custom hooks for the feature
    ├── services/          # API services for the feature
    ├── types/             # TypeScript definitions
    ├── utils/             # Helper functions and constants
    │   ├── constants.tsx  # Feature constants
    │   └── functions.ts   # Helper functions
    └── index.ts           # Exports the main component for cleaner imports
```

Examples of features in the project:
- Auth (Login, Register, Forgot Password)
- AppointmentRequestStatistics
- UserBehaviourStatistics
- IdentificationData
- InstitueCalendarData

## 2.3. Common Components
The project includes many reusable components:
- StatisticBlock - For displaying statistics with trends
- DynamicBreadcrumb - For navigation breadcrumbs
- ThemeSwitcher - For toggling light/dark mode
- UserMenu - For user profile and actions
- PageLoader - For loading states

## 2.4. Layouts
Multiple layout templates for different sections:
- RootLayout - Main website layout
- AuthLayout - For authentication pages
- DashboardLayout - For authenticated dashboard views
- SampleLayout - For sample/demo pages
