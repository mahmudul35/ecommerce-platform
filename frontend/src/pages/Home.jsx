import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const slides = [
  {
    image: "/slide1.jpg",
    title: "Discover Pabna's Finest Products",
    description:
      "Explore a wide range of locally sourced products, from handmade crafts to fresh produce.",
    buttonText: "Shop Now",
  },
  {
    image: "/slide4.avif",
    title: "Support Local Artisans",
    description:
      "Help local artisans and farmers by purchasing their products.",
    buttonText: "Explore",
  },
  {
    image: "/slide5.avif",
    title: "Fast delivery across Pabna",
    description: "Get your order delivered to your doorstep in no time.",
    buttonText: "Browse Now",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden ">
      <Carousel className="w-full h-full relative">
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
          className="flex w-full h-full"
        >
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-w-full relative">
              <div
                className="w-full h-[80vh]  bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="text-white text-center px-4 z-10 max-w-2xl">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg mb-6">{slide.description}</p>
                  <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
          }
        />
        <CarouselNext
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
        />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
