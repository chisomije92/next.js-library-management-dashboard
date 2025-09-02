import type { NextApiRequest, NextApiResponse } from "next";

const books = [
  { id: "1", title: "Book A", author: "Author 1", available: true },
  { id: "2", title: "Book B", author: "restricted-author", available: false },
  { id: "3", title: "Book C", author: "Author 3", available: true },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (req.method === "PUT") {
    books[bookIndex].available = !books[bookIndex].available;
    return res.status(200).json(books[bookIndex]);
  }

  res.status(200).json(books[bookIndex]);
}
