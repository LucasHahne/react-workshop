import { Book } from "../domain/book/Book";

export async function fetchBooks(): Promise<Book[]> {
  const res = await fetch("http://localhost:4730/books");
  const data = await res.json();
  return data;
}

export async function fetchBook(isbn: string): Promise<Book> {
  const res = await fetch("http://localhost:4730/books/" + isbn);
  const book: Book = await res.json();
  return book;
}
