import { useEffect, useState } from "react";

const Slider = () => {
    const slides = [
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle through slides
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [slides.length]);
    
      return (
        <div className="carousel w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item relative w-full ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button
                  className="btn btn-circle"
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === 0 ? slides.length - 1 : prev - 1
                    )
                  }
                >
                  ❮
                </button>
                <button
                  className="btn btn-circle"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % slides.length)
                  }
                >
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
      );
};

export default Slider;
