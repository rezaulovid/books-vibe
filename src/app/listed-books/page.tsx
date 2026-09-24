"use client";

import BookCard from "@/components/homepage/BookCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BookContext } from "@/contexts/BookContexts";
import { IBook } from "@/types/books.type";
import { read } from "fs";
import Image from "next/image";
import Link from "next/link";
import React, { use, useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  //   console.log(readBooks, wishlist, "readBook", "Wishlist");
  // console.log(sortBy,setSortBy);

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  console.log(sortedReadBooks, "sortedReadBooks");
  console.log(sortedWishlist, "sortedWishlist");

  return (
    <div className="container mx-auto py-[20px]">
      <h2
        className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl
    text-center"
      >
        Listed Books
      </h2>

      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of Pages</option>
          <option value={"year"}>Publish Year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                />
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist books"
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0
            ? sortedWishlist.map((book: IBook) => {
                return (
                  <ListedBooksCard
                    key={book.bookId}
                    book={book}
                  />
                );
              })
            : (
              <p className="text-center text-lg font-semibold">
                No wishlist books found
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
