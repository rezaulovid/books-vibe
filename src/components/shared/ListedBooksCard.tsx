import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IListedBookCardProps {
    book: IBook
}

const ListedBooksCard = ({ book }: IListedBookCardProps) => {

    const {
        bookId,
        bookName,
        author,
        image,
        category,
        rating,
        tags
    } = book;

    return (
        <div
            className="card lg:card-side bg-base-100 shadow-md border border-gray-200 rounded-2xl overflow-hidden"
        >
            {/* Book Image */}
            <figure className="lg:w-56 w-full">
                <Image
                    src={image}
                    alt={bookName}
                    width={250}
                    height={320}
                    className="w-full h-64 lg:h-full object-cover"
                />
            </figure>

            {/* Book Information */}
            <div className="card-body">
                <div className="flex flex-wrap gap-2 mb-2">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-success badge-outline"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h2 className="card-title text-2xl">
                    {bookName}
                </h2>

                <p className="text-gray-500">
                    By {author}
                </p>

                <p className="text-sm text-gray-500">
                    Category: {category}
                </p>

                <div className="flex items-center gap-2 mt-2">
                    <span className="font-semibold">
                        ⭐ {rating}
                    </span>
                </div>

                <div className="card-actions mt-4">
                    <Link href={`/books/${bookId}`}>
                       
                        <button className="btn btn-success rounded-xl text-white">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;
