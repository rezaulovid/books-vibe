import Image from "next/image";
import React from "react";
import bannerImg from "@/assetes/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-slate-100 rounded-3xl p-6 md:p-10 lg:p-14 shadow-sm">

          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              📚 Discover Your Next Book
            </span>

            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to freshen up
              <br />
              your bookshelf
            </h2>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read for your bookshelf.
            </p>

            <button className="btn btn-success rounded-full px-7 text-white shadow-md transition hover:scale-105">
              View the Books →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={bannerImg}
                width={600}
                height={600}
                alt="Books collection"
                className="h-auto w-full max-w-md object-cover transition duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
