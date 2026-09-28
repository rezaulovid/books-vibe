import BookCard from "@/components/homepage/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  try {
    const response = await fetch("http://localhost:3000/booksData.json",
      // `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};
const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800">
          Explore Our Books
        </h1>

        <p className="mt-3 text-slate-500">
          Discover your next favorite book from our collection.
        </p>
      </div>

     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {booksData.map((book: IBook, ind: number) => {
    return <BookCard key={book.bookId} book={book} />;
  })}
</div>

    </section>
  );
};

export default Books;