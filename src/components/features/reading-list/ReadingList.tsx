"use client";
import { observer } from "mobx-react-lite";
import { useReadingList } from "@/state/ReadingListContext";
import Layout from "@/components/layouts/Layout";
import { Button, Input } from "@/components/ui";

const ReadingListManager = observer(() => {
  const {
    addBook,
    author,
    title,
    unreadCount,
    sortedBooks,
    setAuthor,
    setTitle,
    removeBook,
    markAsRead,
  } = useReadingList();

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Reading List</h2>
      <p className="text-sm text-gray-500">Unread Books: {unreadCount}</p>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Book Title"
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Author"
          className="border p-2 mr-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button
          onClick={() => {
            addBook(Date.now().toString());
            setTitle("");
            setAuthor("");
          }}
        >
          Add Book
        </Button>
      </div>
      <ul className="space-y-4">
        {sortedBooks.map((book) => (
          <li
            key={book.id}
            className="border p-4 rounded bg-white flex justify-between"
          >
            <div>
              <h3 className="text-xl">{book.title}</h3>
              <p>{book.author}</p>
              <p className={book.read ? "text-green-500" : "text-gray-500"}>
                {book.read ? "Read" : "Unread"}
              </p>
            </div>
            <div className="flex space-x-2">
              {!book.read && (
                <Button
                  className=" px-3 py-1"
                  variant="success"
                  onClick={() => markAsRead(book.id)}
                >
                  Mark as Read
                </Button>
              )}
              <Button
                variant="destructive"
                className="  px-3 py-1"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
});

export default ReadingListManager;
