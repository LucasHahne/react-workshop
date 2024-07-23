import React, { FormEvent, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Book } from "../domain/book/Book";
import { useBook } from "../domain/hooks/useBook";

export const BookEditScreen = () => {
  const bookUrl = useLoaderData() as Book;
  const { book, setBook } = useBook(bookUrl.isbn);
  const [checkTitle, setCheckTitle] = useState(book?.title);

  const handleTitleInput = (currentTitle: string) => {
    if (currentTitle.length < 5) {
      setCheckTitle("The title must at least contain 5 letters");
    }

    if (currentTitle.length >= 5) {
      setCheckTitle("");
    }
    setBook({ ...book!, title: currentTitle });
  };

  //würde auch über den Loader und useState gehen. Hier nur zur Vollständigkeit über denn Hook gemacht
  //   const [title, setTitle] = useState(bookUrl.title);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <form
        noValidate
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="inputText"
          value={book?.title}
          onChange={(event) => handleTitleInput(event.target.value)}
        />
        {checkTitle && <span>The title must at least be 5 letters long</span>}
        <button type="submit">Save</button>
      </form>
      <NavLink to="/books">
        <button>Cancel</button>
      </NavLink>
    </>
  );
};
