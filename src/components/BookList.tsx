import { BookListItem } from "../components/BookListItem";
import { useBooks } from "../domain/hooks/useBooks";

export const BookList = () => {
  const { books, state } = useBooks();

  return (
    <>
      {state === "loading" && (
        <h2 className="text-meta m-top">Loading books...</h2>
      )}
      {state === "error" && (
        <h2 className="error m-top">Error while loading books...</h2>
      )}
      {state === "success" &&
        books.map((book) => {
          return <BookListItem key={book.id} book={book}></BookListItem>;
        })}
    </>
  );
};
