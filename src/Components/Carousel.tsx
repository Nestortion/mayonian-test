import { useEffect, useState } from "react";
import CarouselImage from "../assets/carousel-img.png";
import Bell from "../assets/bell.png";

type CarouselEntry = {
  imgPath: string;
};

const carouselData: Array<CarouselEntry> = [
  { imgPath: CarouselImage },
  { imgPath: CarouselImage },
  { imgPath: CarouselImage },
];

const Carousel = () => {
  const [currentCarouselImage, setCurrentCarouselImage] = useState<string>(
    carouselData[0].imgPath,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      setCurrentCarouselImage(carouselData[randomIndex].imgPath);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div>
        <img src={currentCarouselImage} alt="" />
      </div>
      <div className="flex items-center gap-1">
        <div>
          <img src={Bell} alt="" />
        </div>
        <p className=" text-[#00A6FF]">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </p>
      </div>
    </div>
  );
};

export default Carousel;
