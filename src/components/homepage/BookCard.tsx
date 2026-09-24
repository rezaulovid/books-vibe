import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
  book:IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-100">
        <Image
          src={book?.image}
          alt={book.bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-green-600 shadow">
            {book.category}
          </span>
        </div>
      </div>

      {/* Book Information */}
      <div className="space-y-4 p-5">

        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-800">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            by {book.author}
          </p>
        </div>

        {/* Rating & Pages */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold text-slate-700">
              {book.rating}
            </span>
          </div>

          <span className="text-sm text-slate-500">
            {book.totalPages} pages
          </span>
        </div>

        {/* Review */}
        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {book.review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
     <Link href={`/books/${book.bookId}`}>
        <button className="btn btn-success w-full rounded-xl text-white">
          View Details
        </button>
     </Link>
      </div>
    </div>
  );
};

export default BookCard;