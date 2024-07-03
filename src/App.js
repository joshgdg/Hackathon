import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./page/Home.tsx";
import { Auth } from "./page/Auth.tsx";
import { Failed } from "./page/Failed.tsx";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/failed",
      element: <Failed />,
    },
  ]);

  return <RouterProvider router={router} />;
}
