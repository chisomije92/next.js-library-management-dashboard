import { createContext, useContext } from "react";
import { readingListStore } from "./ReadingListStore";

const ReadingListContext = createContext(readingListStore);

export const useReadingList = () => useContext(ReadingListContext);
