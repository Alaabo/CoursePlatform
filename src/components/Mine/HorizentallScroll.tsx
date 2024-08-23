// components/HorizontalScrollSection.tsx
import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface HorizontalScrollSectionProps {
  children: ReactNode[];
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Scrolling Buttons */}
      <button
        className="hidden lg:flex absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full shadow-lg z-10 hover:bg-gray-600 focus:outline-none"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>
      <button
        className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full shadow-lg z-10 hover:bg-gray-600 focus:outline-none"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className=" flex overflow-x-auto space-x-4 p-4 snap-x snap-mandatory scrollbar-hide"
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96 xl:w-1/4 snap-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
