import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/common/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import { router } from "./routes";
import PageLoader from "./components/common/PageLoader";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;