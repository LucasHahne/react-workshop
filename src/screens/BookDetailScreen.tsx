import React from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { Book } from "../domain/book/Book";

export const BookDetailScreen = () => {
  const book = useLoaderData() as Book;
  console.log(book);

  //   Muss an der Stellle nicht mehr verwendet werden, da die Info über den sueLLoader kommt
  //   const { isbn } = useParams<{ isbn: string }>();
  return (
    <div>
      <h3>BookDetailScreen for Book {book.isbn}</h3>
      <Link to="/books">
        <button>Back to the Boookscreen</button>
      </Link>
      <br />
      <NavLink to={`/book/${book?.isbn}/edit`}>Edit this entry</NavLink>
    </div>
  );
};
