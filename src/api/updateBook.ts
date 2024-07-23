import { Book } from "../domain/book/Book";

export async function updateBook(book: Book) {
  await fetch("http://localhost:4730/books/" + book.isbn, {
    method: "PUT",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
