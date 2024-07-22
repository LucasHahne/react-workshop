import React from "react";
import { AppHeader } from "./components/AppHeader";
import { InfoHeader } from "./components/InfoHeader";
import { BookList } from "./components/BookList";
import { fetchBooks } from "./api/fetchBook";
import { useEffect, useState } from "react";
import { Book } from "./domain/book/Book";

type FetchState = "initial" | "loading" | "success" | "error";

const useBooks = () => {
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

function App() {
  const { books, state } = useBooks();

  return (
    <div className="App">
      <AppHeader></AppHeader>
      {state === "loading" && (
        <h2 className="text-meta m-top">Loading books...</h2>
      )}
      {state === "error" && (
        <h2 className="error m-top">Error while loading books...</h2>
      )}
      {state === "success" && <BookList books={books} />}
    </div>
  );
}

export default App;
