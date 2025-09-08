import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/W4CsPtjd/pexels-aqtai-2233416.jpg",
    title: "🌙 Timeless Wisdom from Sunnah",
    description:
      "Explore authentic sayings of the Prophet ﷺ\nthat guide our hearts and lives.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/VWCxMqVh/ashkan-forouzani-7bl-IFp0k-FP4-unsplash.jpg",
    title: "📖 Illuminate Your Faith",
    description:
      "Discover beautiful quotes about patience, mercy,\nand remembrance of Allah.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/v6ZdsYpd/daniel-olah-2l-MK4dgqw-FM-unsplash.jpg",
    title: "🕌 Connect Spiritually",
    description:
      "Strengthen your Imaan through Sunnah sayings\nthat inspire peace and gratitude.",
  },
];

const BannerSlider = () => {
  return (
    <div className='px-2 md:px-4'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {slides.map((slide) => (
        <div key={slide.id} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="h-[75vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center text-left px-8 lg:px-16 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg whitespace-pre-line">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default BannerSlider;
