"use client";
import { BookContext } from '@/contexts/BookContexts';
import BooksProvider from '@/contexts/BookContexts';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book: IBook}) => {
const{ readBooks,setReadBooks, } = useContext(BookContext );

console.log(BooksProvider, "booksProvider");

   const handleReadBook = () => {
    console.log("read boook btn triggered", book);

setReadBooks([...readBooks,book]);
toast.success('You have read "${bookName}"'  );
   }
    return (
      <button className="btn btn-primary flex-1 " onClick={() => handleReadBook () } > Read</button>
    );
};

export default ReadButton;