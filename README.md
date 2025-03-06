# React Shadcn Base
![Landing](/demo_image/landing.png)
![Auth](/demo_image/auth.png)
![Dashboard](/demo_image/dashboard.png)
![Charts](/demo_image/charts.png)
[Demo React Shadcn Base](https://react-shadcn-base.vercel.app/)

A comprehensive starter template for building modern React applications with a focus on developer experience and maintainability.

## Overview
- A base project for Vite React applications, built with the Shadcn/ui component library
- Includes essential features: Authentication, Dashboard, Landing page, Charts, CRUD Tables, and more
- Integrates popular libraries: Axios, SWR for data fetching, React Router v7 for routing, and Framer Motion for animations
- Built on: [Shadcn/ui](https://ui.shadcn.com/), [Vite](https://vite.dev/), [React](https://react.dev/)

## Project Status
- Currently using React 18 and Tailwind CSS v3
- Awaiting Shadcn's official Tailwind v4 build release
- For early adopters: You can try updating to Tailwind v4 through the canary version following [this guide](https://ui.shadcn.com/docs/tailwind-v4)

## 1. Core Technologies
- React 18 with TypeScript
- Vite for fast development and optimized builds
- Shadcn/ui for customizable UI components
- TailwindCSS for utility-first styling
- Axios for HTTP requests
- SWR for data fetching and caching
- React Router v7 for declarative routing

## 2. Project Architecture

### 2.1. Directory Structure
```
src/
├── assets/
│   └── svgs/              # SVG assets (including react.svg)
├── components/
│   ├── common/            # Shared components (DynamicBreadcrumb, ThemeSwitcher, etc.)
│   ├── layout/            # Layout components (Sidebar, Headers, Navigation, etc.)
│   └── ui/                # Shadcn UI components (buttons, forms, data tables, etc.)
├── config/                # Configuration files (docs.ts)
├── contexts/              # React contexts (Auth, Base, Breadcrumb)
├── features/              # Feature-based modules
├── hooks/                 # Custom React hooks (use-mobile, use-toast, etc.)
├── i18n/                  # Internationalization configuration
├── layouts/               # Page layouts (Auth, Dashboard, Root, Sample)
├── lib/                   # Utilities and libraries (axios, swr config, utils)
├── pages/                 # Page components
├── routes/                # Route configuration
├── services/              # API services
├── types/                 # TypeScript definitions
└── utils/                 # Helper functions, constants, endpoints
```

### 2.2. Feature-based Architecture
The project follows a modular, feature-based architecture where each feature is self-contained:

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

### 2.3. Implemented Features
- **Auth**: Complete authentication flow with login, registration, and password recovery
- **AppointmentRequestStatistics**: Data visualization for appointment metrics
- **UserBehaviourStatistics**: Analytics for user behavior patterns
- **IdentificationData**: User identity management
- **InstitueCalendarData**: Calendar management for institutions
- **BaseFeature**: Template for creating new features

### 2.4. Common Components
The project includes numerous reusable components:
- **StatisticBlock**: For displaying metrics with trend indicators
- **DynamicBreadcrumb**: For navigation path visualization
- **ThemeProvider/ThemeSwitcher**: For managing and toggling light/dark modes
- **UserMenu**: For user profile management and actions
- **PageLoader**: For handling loading states
- **Icons**: Centralized icon management

### 2.5. UI Components Library
A comprehensive collection of Shadcn UI components, including:
- Data visualization: charts, data tables
- Form elements: inputs, selects, checkboxes
- Navigation: accordions, breadcrumbs, command menus
- Layout: cards, dialogs, drawers, sheets
- Feedback: toasts, skeletons
- And many more customizable components

### 2.6. Layouts
Multiple layout templates for different application sections:
- **RootLayout**: Main website layout with header and footer
- **AuthLayout**: Specialized layout for authentication pages
- **DashboardLayout**: For authenticated user dashboard views
- **SampleLayout**: For demonstration and example pages

## 3. Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/react-shadcn-base.git

# Navigate to project directory
cd react-shadcn-base

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

## 4. Configuration
- Environment variables can be set in `.env` files
- Route configuration in `src/routes/config.tsx`
- API endpoints defined in `src/utils/endpoints.ts`

## 5. Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 6. License
[MIT License](LICENSE)
