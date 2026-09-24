"use client";

import { BookContext } from "@/contexts/BookContexts";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext);

  const handlewishlist = () => {
    console.log("read book btn triggered", book);

    setWishlist([...wishlist, book]);

    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };

  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => handlewishlist()}
    >
      Add to wishlist
    </button>
  );
};

export default WishlistButton;