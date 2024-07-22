import React, { useState } from "react";
import { BookListItemProps } from "../domain/book/BookListItem";
import { LikeCounter } from "./LikeCounter";
import { Hideable } from "./Hideable";

export const BookListItem = ({ book }: BookListItemProps) => {
  const cn = (...classes: (string | boolean | null | undefined | number)[]) => {
    return classes.filter((c) => c).join(" ");
  };

  const [numLikes, setNumLikes] = useState<number>(0);
  const [shouldShowChildren, setShouldShowChildren] = useState<boolean>(false);

  const isFree = book.price === "$0.00";

  return (
    <div className={cn("book-list-item", isFree && "book-list-item_free")}>
      {numLikes >= 5 && <span>⭐️</span>}

      <img src={book.cover} alt="Here is the cover" />
      <h2>
        {isFree && <span>💰</span>}
        {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <Hideable
        shouldShowChildren={shouldShowChildren}
        setShouldShowChildren={setShouldShowChildren}
      >
        {book.abstract}
      </Hideable>
      <LikeCounter numLikes={numLikes} setNumLikes={setNumLikes}></LikeCounter>
    </div>
  );
};
