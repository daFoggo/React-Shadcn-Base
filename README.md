# React Shadcn Base
![Landing](/demo_image/landing.png)
![Auth](/demo_image/auth.png)
![Dashboard](/demo_image/dashboard.png)
[Demo React Shadcn Base](https://react-shadcn-base.vercel.app/)

- A base project for Vite React application, building with Shadcn/ui component library.
- Come with essential features like Auth, Dashboard, Landing page, Charts, CRUD Table,...
- Integrate with other popular libraries like SWR for fetching ( You can use axios if you want), React Router v7 for routing management, Framer motion for animation.
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

# 3. Development flow
## 3.1. Setup
- Currently I'm using npm, will migrate to pnpm or bun later.
```
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
## 3.2. Development from outside to inside
### 3.2.1. Creating a layout
- To create a layout. Navigate to `src/layouts`.
- A sample layout can look like this:
```tsx
import { BaseContextProvider } from "@/contexts/BaseContext";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <BaseContextProvider>
      <div className="flex flex-1 flex-col ">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container-wrapper">Sample header</div>
        </header>
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container-wrapper">Sample footer</div>
        </footer>
      </div>
    </BaseContextProvider>
  );
};

export default RootLayout;
```
- `<Outlet />` will render different pages based on routing
- Next, navigate to `src/routes/config.ts` to make some configurations:
```ts
export const routeConfig: IRouteConfig = {
    ...,
    sampleLayout : {
        path: "/sample-layout",
        children: {
            page1: {
                path: "/sample-layout/page-1",
                element: Page1, // You will create them sooner
                title: "Page 1",
            },
            page2: {
                path: "/sample-layout/page-2",
                element: Page2,
                title: "Page 2",
            },
            ...
        },
    }

}
```
- Then move to `src/routes/index.tsx`, import your layout and configurations:
```tsx
const rootRoutes = [
    ...,
    {
        path: routeConfig.sampleLayout.path,
        element: SampleLayout,
        children: createRoutes(routeConfig.sampleLayout),
    },

]
```
- Your layout is done, let's start creating pages inside
### 3.2.2. Creating pages
- To create a pages, simply go to `src/pages` and create a new component. Then import your pages inside the previous layout in `src/routes/config.ts`
### 3.2.3. Creating features
- Each features is a components inside pages. Move to `src/features` and copy paste folder `BaseFeature` and change the file names
- Import your features inside pages and start development
### 3.2.4. Typescript safety and code convention
- Make sure to apply typescript safety
- For code convention, you can use what ever you want or follow my previous codes.
### 3.2.5. Before pushing
- Whenever you finish a tasks and want to push the code to github, make sure to run `npm run build` to check eslint. If everything is fine, you can continue pushing your code, otherwise make sure to fix all the issues before pushing
