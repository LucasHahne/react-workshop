import { useEffect, useState } from "react";
import { Book } from "../book/Book";
import { fetchBooks } from "../../api/fetchBook";

type FetchState = "initial" | "loading" | "success" | "error";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchBooks()
      .then((books) => {
        setBooks(books);
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  }, []);

  return {
    books,
    state,
  };
};
