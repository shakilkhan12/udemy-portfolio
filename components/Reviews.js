"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/reviews";
import { useState } from "react";

const Reviews = () => {
  const [count, setCount] = useState(6);
  return (
    <SectionWrapper>
      <Heading>Testimonials</Heading>
      <h1 className="text-3xl md:text-5xl font-black capitalize mt-5">
        what{" "}
        <strong className="text-violet-600 dark:text-zinc-400">
          people say
        </strong>
      </h1>
      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5 leading-[22px]">
        I developed products that are more than pretty. I make them shippable
        and usable.
      </p>
      <div className="relative w-full">
        {data.length !== count ? (
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white/80 dark:from-[#121212]/90 from-[50%] to-transparent flex justify-center items-end z-[9999]">
            <button
              className="h-[45px] bg-violet-600 text-white rounded-lg font-medium text-base capitalize px-4"
              onClick={() => setCount(count + 6)}
            >
              show more
            </button>
          </div>
        ) : (
          ""
        )}

        <Masonry
          breakpointCols={{
            default: 3,
            1200: 3,
            1000: 2,
            700: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.slice(0, count).map((rating) => (
            <div
              key={rating.id}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-7 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex gap-5">
                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image
                    src={rating.image}
                    fill
                    alt="client image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="font-bold text-lg capitalize text-zinc-900 dark:text-zinc-300">
                    {rating.name}
                  </h1>
                  <span className="block mt-[1px] text-base text-zinc-500 dark:text-zinc-300 capitalize font-medium leading-[20px]">
                    {rating.company}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                {rating.comment}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </SectionWrapper>
  );
};
export default Reviews;
