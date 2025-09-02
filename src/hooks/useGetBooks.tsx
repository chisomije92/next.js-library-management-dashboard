import { getBooks } from "@/services/books-services";
import { Book } from "@/types/books";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetBooks = () => {
  const [filter, setFilter] = useState("");
  const { data, isPending } = useQuery<Book[]>({
    queryFn: getBooks,
    queryKey: ["books"],
    select: (data) =>
      data.filter((book) =>
        book.author.toLowerCase().includes(filter.toLowerCase())
      ),
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return {
    filter,
    filteredBooks: data || [],
    isPending,
    handleFilterChange,
  };
};
