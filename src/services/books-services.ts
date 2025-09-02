export const getBooks = async () => {
  try {
    const res = await fetch("/api/books");
    if (!res.ok) throw new Error("failed");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBookDetails = async (id: string) => {
  try {
    const res = await fetch(`/api/books/${id}`);
    if (!res.ok) throw new Error("failed");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateBookStatus = async (id: string) => {
  try {
    const res = await fetch(`/api/books/${id}`, { method: "PUT" });
    if (!res.ok) throw new Error("failed");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
