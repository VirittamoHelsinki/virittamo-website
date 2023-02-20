import CarouselSetup from "./CarouselSetup";

import { Text } from "./SubComponents/Text";
import { Video } from "./SubComponents/Video";
import { Image } from "./SubComponents/Image";

export const Carousel = () => {
  /*
    { component: <Text title="" text="" /> },
    { component: <Video src="" /> },
    { component: <Image src="" alt="" /> },
  */
  const slides = [
    { component: <Text title="" text="" /> },
    { component: <Video src="" /> },
    { component: <Image src="" alt="" /> },
  ];

  return (
    <div className="carousel__items--container">
      <CarouselSetup items={slides} />
    </div>
  );
};
