import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();

  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((book: any) => String(book.bookId) === id);

  console.log(book,"book");
 return (
  <div className="container mx-auto px-4 py-10">
    <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-200">
      
      <figure className="lg:w-1/2 bg-base-200 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="w-full max-w-md rounded-xl object-cover shadow-lg"
        />
      </figure>

      <div className="card-body lg:w-1/2 p-6 lg:p-10">

        {/* Book Title */}
        <h2 className="card-title text-3xl font-bold text-base-content">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-base text-base-content/60">
          by <span className="font-semibold text-base-content/80">
            {book.author}
          </span>
        </p>

        {/* Category + Rating */}
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className="badge badge-primary badge-outline">
            {book.category}
          </span>

          <span className="badge badge-warning gap-1">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Review */}
        <p className="mt-5 leading-7 text-base-content/70">
          {book.review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-ghost"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="grid grid-cols-2  gap-4 mt-6 rounded-xl bg-base-200 p-5">
          <div >
            <p className="text-sm  text-base-content/50">Total Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-sm  text-base-content/50">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-sm  text-base-content/50">Publisher</p>
            <p className="font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-sm  text-base-content/50">Author</p>
            <p className="font-semibold">{book.author}</p>
          </div>
        </div>

        {/* Button */}
        <div className="card-actions  mt-2">
          <ReadButton book= {book} />
          <WishlistButton book={book} />
        </div>
      </div>
    </div>
  </div>
)
}
export default BookDetailsPage;