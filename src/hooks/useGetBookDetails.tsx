import { getBookDetails } from "@/services/books-services";
import { Book } from "@/types/books";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useGetBookDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const { data, isPending } = useQuery<Book>({
    queryFn: () => getBookDetails(id),
    queryKey: ["books", id],
    enabled: !!id,
  });

  return {
    book: data,
    isPending,
  };
};
