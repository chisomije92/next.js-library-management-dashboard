import { makeAutoObservable } from "mobx";

interface ReadingListItem {
  id: string;
  title: string;
  author: string;
  read: boolean;
  addedAt: number;
}

class ReadingListStore {
  readingList: ReadingListItem[] = [];
  lastUpdated = Date.now();
  title = "";
  author = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addBook(id: string) {
    if (!this.readingList.some((book) => book.id === id)) {
      this.readingList.push({
        id,
        title: this.title,
        author: this.author,
        read: false,
        addedAt: Date.now(),
      });
      this.lastUpdated = Date.now();
      this.title = "";
      this.author = "";
    }
  }

  setTitle(title: string) {
    this.title = title;
  }

  setAuthor(author: string) {
    this.author = author;
  }

  removeBook(id: string) {
    this.readingList = this.readingList.filter((book) => book.id !== id);
    this.lastUpdated = Date.now();
  }

  markAsRead(id: string) {
    const book = this.readingList.find((book) => book.id === id);
    if (book) book.read = true;
  }

  get unreadCount() {
    return this.readingList.filter((book) => !book.read).length;
  }

  get sortedBooks() {
    return [...this.readingList].sort((a, b) => b.addedAt - a.addedAt);
  }
}

export const readingListStore = new ReadingListStore();
