import { updateBookStatus } from "@/services/books-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateBookStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBookStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["books", data.id],
      });
    },
    onError: (err) => {
      // handle error
      console.error(err);
    },
  });
};
