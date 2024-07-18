import React from "react";
import { BookListItem } from "../components/BookListItem";
import { exampleBooks } from "../domain/book/BookListItem";

export const BookList = () => {
  return (
    <>
      {exampleBooks.map((exBook) => {
        return <BookListItem key={exBook.id} book={exBook}></BookListItem>;
      })}
    </>
  );
};
