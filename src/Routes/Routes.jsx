import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
// import ReadToPage from '../pages/ReadToPage/ReadToPage';
// import ListBook from '../pages/ListBook/ListBook';
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBook from "../pages/ListedBook/ListedBook";
import PageToRead from "../pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/bookData.json"),
        Component: Home,
      },
      {
        path: "Listedbook",
        loader: () => fetch("/bookData.json"),
        Component: ListedBook,
      },
      {
        path: "pagetoread",
        Component: PageToRead,
      },
      {
        path: "/bookdetails/:id",
        loader: async () => {
          const res = await fetch("/books.json");
          const data = await res.json();
          return data;
        },
        Component: BookDetails,
      },
    ],
  },
]);
