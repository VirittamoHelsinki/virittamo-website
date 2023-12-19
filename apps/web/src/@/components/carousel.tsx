"use client";

import React, { useState, useCallback } from "react";
import { useTransition, animated } from "@react-spring/web";
import Image from "next/image";

interface SlideData {
  imageUrl: string;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  }, [slides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  }, [slides]);

  const transitions = useTransition(slides[activeIndex], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div className="relative overflow-hidden pt-[9.375rem]">
      <div className="flex h-[911px] w-full flex-1 transform-gpu space-x-4 transition-all">
        {transitions((style, item) => (
          <animated.div
            style={style}
            className="relative h-full max-h-[911px] w-full"
          >
            <Image
              src={item!.imageUrl}
              alt={item!.title}
              className="aspect-w-16 aspect-h-9 h-[911px] w-[1720px] max-w-[1720px] rounded-xl object-cover"
              width={2000}
              height={911}
            />
            <div className="absolute bottom-0 z-50 p-10">
              <h2 className="text-[6.25rem] font-bold text-white">
                {item!.title}
              </h2>
              {/* <p className="text-md text-gray-600">{item!.description}</p> */}
            </div>
          </animated.div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 px-4 py-2 font-bold text-black shadow hover:bg-opacity-75"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 px-4 py-2 font-bold text-black shadow hover:bg-opacity-75"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}
