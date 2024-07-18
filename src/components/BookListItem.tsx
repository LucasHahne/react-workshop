import React from "react";
import { BookListItemProps } from "../domain/book/BookListItem";

export const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <div className="example-book">
      <div className="gridLeft">
        <img src={book.cover} alt="Here is the cover" />
      </div>
      <div className="gridRight">
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        <div className="text-meta">by {book.author}</div>
      </div>
    </div>
  );
};
