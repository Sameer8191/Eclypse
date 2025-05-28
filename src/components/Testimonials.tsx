import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Random Woman',
    location: 'NY, USA',
    quote: 'Understated, but unforgettable. It feels like it was made for me',
    image: '../public/assets/Reviews/Ellipse 4.png',
  },
  {
    id: 2,
    name: 'Cool Guy',
    location: 'LA, USA',
    quote: 'A product that truly understands me!',
    image: '../public/assets/Reviews/Ellipse 5.png',
  },
  {
    id: 3,
    name: 'Artistic Lady',
    location: 'Paris, France',
    quote: 'A delightful experience, perfectly crafted.',
    image: '../public/assets/Reviews/Ellipse 3.png',
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="bg-black text-white px-4 py-6 pl-0 max-w-7xl mx-auto mt-5 flex flex-col md:flex-row justify-between items-center relative gap-8">
      {/* Review Section */}
      <div className="max-w-xl md:max-w-2xl text-center md:text-left">
        <h2 className="uppercase text-xs tracking-widest mb-4 md:mb-5">Our Customers</h2>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl leading-snug mb-4 md:mb-5">
          “{currentTestimonial.quote}”
        </blockquote>
        <div>
          <div className="font-normal text-lg">{currentTestimonial.name}</div>
          <div className="text-xs text-gray-400 mt-1">{currentTestimonial.location}</div>
        </div>
      </div>

      {/* Images and Arrows */}
      <div className="flex flex-row md:flex-col items-center gap-4">
        {/* Up Arrow */}
        <svg
          onClick={handlePrev}
          className="w-5 h-5 sm:w-6 sm:h-6 fill-white cursor-pointer"
          viewBox="0 0 24 24"
          role="button"
          aria-label="Previous testimonial"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handlePrev();
          }}
        >
          <path d="M6 15l6-6 6 6" />
        </svg>

        {/* Images */}
        <div className="flex flex-row md:flex-col gap-3">
          {testimonialsData.map((testimonial, index) => (
            <img
              key={testimonial.id}
              src={testimonial.image}
              alt={testimonial.name}
              className={`rounded-full cursor-pointer border-2 ${
                currentIndex === index ? 'border-white' : 'border-transparent'
              } w-14 h-14 sm:w-20 sm:h-20`}
              style={{ objectFit: 'fill' }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Down Arrow */}
        <svg
          onClick={handleNext}
          className="w-5 h-5 sm:w-6 sm:h-6 fill-white cursor-pointer"
          viewBox="0 0 24 24"
          role="button"
          aria-label="Next testimonial"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleNext();
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialSection;
