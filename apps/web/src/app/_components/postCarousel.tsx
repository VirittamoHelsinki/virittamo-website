"use client"
import { Card, CardContent } from "~/@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "~/@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
    {
        imageUrl:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png",
        title: "Generative Art",
        description:
            "Generative art is art created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist.",
    },
    {
        imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg",
        title: "Generative Art",
        description:
            "Generative art is art created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist.",
    },
    {
        imageUrl:
            "https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg",
        title: "Generative Art",
        description:
            "Generative art is art created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist.",
    },
];

export function CarouselDemo() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="pt-[9.375rem]">
            <Carousel
                className="w-full flex items-center justify-center"
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
            >
                <CarouselContent>
                    {slides.map((item, index) => (
                        <CarouselItem key={index}>
                            <Card className="p-0 rounded-xl border-none">
                                <CardContent className="relative flex p-0">
                                <figure className="aspect-video w-full">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-[911px] rounded-xl object-cover"
                                        width={2000}
                                        height={911}
                                    />
                                    </figure>
                                    <div className="absolute bottom-0 left-0 pl-20 pb-10 text-white max-w-4xl">
                                        <h2 className="text-[6.25rem] font-bold">{item.title}</h2>
                                        <p className="text-xl">{item.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}
