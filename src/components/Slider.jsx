import { useEffect, useState } from "react";

const Slider = () => {
    const slides = [
        "https://i.ibb.co.com/m6jTdh9/Capture3.jpg",
        "https://i.ibb.co.com/n8Bk31k/Ancient-Artifacts-Header-1536x400.jpg",
        "https://i.ibb.co.com/dQjNGjn/Capture2.jpg",
        "https://i.ibb.co.com/b3k5r8q/Capture1.jpg",
        "https://i.ibb.co.com/VL72vYx/Ancient-Egypt.jpg",
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle through slides
        }, 7000); // Change slide every 3 seconds
    
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
              <img src={slide} className="w-full h-[300px] object-cover" alt={`Slide ${index + 1}`} />
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
