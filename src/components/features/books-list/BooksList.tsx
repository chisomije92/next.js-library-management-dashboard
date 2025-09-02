"use client";
import Layout from "@/components/layouts/Layout";
import { Input } from "@/components/ui";
import { useGetBooks } from "@/hooks/useGetBooks";
import Link from "next/link";

export default function BooksList() {
  const { filteredBooks, handleFilterChange } = useGetBooks();
  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-4">Books List</h2>
        <Input
          placeholder="Filter by author"
          className="border p-2 mb-4"
          onChange={handleFilterChange}
        />
        <ul className="space-y-4">
          {filteredBooks.map((book) => (
            <li key={book.id} className="border p-4 rounded bg-white">
              <h3 className="text-xl">{book.title}</h3>
              <p>{book.author}</p>
              <p className={book.available ? "text-green-500" : "text-red-500"}>
                {book.available ? "Available" : "Checked Out"}
              </p>
              <Link
                href={`/books/${book.id}`}
                className="text-blue-500 underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
