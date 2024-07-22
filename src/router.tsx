import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { BooksScreen } from "./screens/BooksScreen";
import { AboutScreen } from "./screens/AboutScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        loader: () => redirect("books"),
      },
      {
        path: "books",
        element: <BooksScreen></BooksScreen>,
      },
      {
        path: "about",
        element: <AboutScreen></AboutScreen>,
      },
    ],
    errorElement: <ErrorScreen></ErrorScreen>,
  },
]);
