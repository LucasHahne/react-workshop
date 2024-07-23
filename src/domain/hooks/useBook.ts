import { useEffect, useState } from "react";
import { Book } from "../book/Book";
import { fetchBook } from "../../api/fetchBook";

type FetchState = "initial" | "loading" | "success" | "error";

export const useBook = (isbn: string) => {
  const [book, setBook] = useState<Book>();
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchBook(isbn)
      .then((book) => {
        setBook(book);
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  }, [isbn]);

  return {
    book,
    state,
    setBook,
  };
};
