import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { BooksScreen } from "./screens/BooksScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { fetchBook } from "./api/fetchBook";
import { BookEditScreen } from "./screens/BookEditScreen";

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
      {
        path: "books/:isbn",
        loader: ({ params }) => {
          return fetchBook(params.isbn!);
        },
        element: <BookDetailScreen></BookDetailScreen>,
      },
      {
        path: "book/:isbn/edit",
        loader: ({ params }) => {
          return fetchBook(params.isbn!);
        },
        element: <BookEditScreen></BookEditScreen>,
      },
    ],
    errorElement: <ErrorScreen></ErrorScreen>,
  },
]);
