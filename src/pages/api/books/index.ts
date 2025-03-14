import type { NextApiRequest, NextApiResponse } from 'next';

const books = [
  { id: "1", title: "Book A", author: "Author 1", available: true },
  { id: "2", title: "Book B", author: "restricted-author", available: false },
  { id: "3", title: "Book C", author: "Author 3", available: true }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(books);
}
