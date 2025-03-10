import { createBrowserRouter } from "react-router-dom";
import SiteWrapper from "../layouts/SiteWrapper";
import Home from "../views/Home";
import TestPage from "../views/TestPage";
// import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SiteWrapper />,
      // errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "test_page",
          element: <TestPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
