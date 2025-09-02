"use client";
import Layout from "@/components/layouts/Layout";
import { Button } from "@/components/ui";
import { useGetBookDetails } from "@/hooks/useGetBookDetails";
import { useUpdateBookStatus } from "@/hooks/useUpdateBookStatus";

export default function BookDetails() {
  const { book, isPending } = useGetBookDetails();
  const { mutate } = useUpdateBookStatus();
  if (isPending) return <p>Loading...</p>;
  if (!book) return <p>Book not found</p>;
  const toggleStatus = () => {
    mutate(book.id);
  };
  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
        <p>{book.author}</p>
        <p className={book.available ? "text-green-500" : "text-red-500"}>
          {book.available ? "Available" : "Checked Out"}
        </p>
        <Button onClick={toggleStatus} className="mt-4 px-4 py-2 ">
          {book.available ? "Borrow" : "Return"}
        </Button>
      </div>
    </Layout>
  );
}
