import { useEffect, useState, useRef, useCallback } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LoadingSlides } from "../Carousel-home/SubComponents/LoadingSlides";
import { SlideIndicator } from "../SlideIndicator";
import { Link } from "react-router-dom";
import { Image } from "../Image";

function getRandomInt(min: number, max: number): number {
  // The maximum is exclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// The main component that renders the project carousel
export function ProjectCarousel({
    name,
    description,
    slides = [],
    autoPlay = false,
    autoPlayInterval = 5000,
}: {
    name: string;
    description: string;
    slides: { component: React.ComponentType<any>;[key: string]: any }[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout>();

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

    useEffect(() => {
        if (autoPlay) {
            timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);

            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        }
    }, [activeIndex, autoPlay, autoPlayInterval, nextSlide]);

    if (!slides || slides.length === 0) {
        return null;
    }

    // Create a new array of slides to maintain a continuous flow when reaching the end
    const allSlides = [...slides, ...slides, ...slides];

    // Calculate the starting index of the slides to show
    const startIndex = activeIndex + slides.length;

    // Select three slides from the array starting from the 'startIndex'
    const displaySlides = allSlides.slice(startIndex, startIndex + 3);

    return (
        <div className="flex flex-col w-full justify-center items-center gap-3 px-[10%]">
            {name && <h2 className="">{name}</h2>}
            {description && (
            <div className="flex items-center gap-3">
            <p>{description}</p>
            <a href="mailto:arto.aitta@hel.fi" className="py-2 px-3 uppercase font-bold bg-[#f4a3c5]">Ota Yhteyttä</a>
            <Link to="/#contacts" className="py-2 px-3 uppercase font-bold bg-[#f4a3c5]">Ota Yhteyttä</Link>
            </div>
            )}
            <div className="projectPage__teams--carousel relative">
                <ul
                    className="z-0 flex w-full translate-x-0 transform items-center justify-between gap-3 transition-all duration-1000 ease-in-out"
                    style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0.2) 100%)' }}
                >
                    {displaySlides.map((slide, index) => (
                        <li
                        key={index}
                            className="group relative flex h-full w-full md:w-1/3 transition-all duration-700 ease-in-out transform translate-x-0 pointer-events-auto"
                        >
                        <Link
                        className="w-full"
                        to={`/projects/${name.toLowerCase()}/${getRandomInt(1, 4)}`}
                        >
                            <div className="h-[400px] w-full rounded border border-gray-200">
                                <Image
                                    src={slide.image.data.attributes.url}
                                    alt={slide.title}
                                    className="h-full w-full rounded object-cover"
                                />
                            </div>
                            <div className="hidden absolute bottom-0 left-0 group-hover:flex w-full flex-wrap items-center bg-white/70 p-3">
                                <h3 className="w-full flex-[1_1_100%] text-2xl leading-8">
                                    {slide.title}
                                </h3>
                                <p className="flex-[1_1_80%] text-lg font-thin">
                                    {slide.description}
                                </p>
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="absolute inset-0 pointer-events-none flex justify-between items-center">
                    <button
                        className="z-10 pointer-events-auto cursor-pointer"
                        onClick={prevSlide}
                    >
                        <SlArrowLeft className="h-6 w-6" />
                    </button>
                    <button
                        className="z-10 pointer-events-auto cursor-pointer"
                        onClick={nextSlide}
                    >
                        <SlArrowRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
