import { useState } from "react";

const images = [
  {
    url: "https://www.onlinegambling.com/news/wp-content/uploads/2020/03/Khabib-Nurmagomedov-Russia-scaled.jpg",
    caption: "The Eagle in his natural habitat",
  },
  {
    url: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/01/21_06_26_80a11571fd05d8252310ce68143d44d3_690-1.jpg",
    caption: "UFC Lightweight Champion",
  },
  {
    url: "https://th.bing.com/th/id/OIP.F3TtcczuC4jUqaM1xAxADgHaE7?cb=iwp1&rs=1&pid=ImgDetMain",
    caption: "Undefeated and undisputed",
  },
  {
    url: "https://staticg.sportskeeda.com/editor/2022/09/5dc78-16642070964890-1920.jpg",
    caption: "Dominating the octagon",
  },
  {
    url: "https://i.pinimg.com/originals/f5/d7/c6/f5d7c624cbf12d0ac303747d1de8288f.jpg",
    caption: "Smesh machine in action",
  },
  {
    url: "https://th.bing.com/th/id/OIP.vnCKluMHxmsgCVW1xRKJLAHaEo?cb=iwp1&rs=1&pid=ImgDetMain",
    caption: "Retired undefeated - 29-0",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section id="gallery" className="relative py-16 my-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl animate-float"></div>
      </div>

      {/* Section header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-cyan-900">
            Fight Gallery
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Relive Khabib's most iconic moments in the octagon
        </p>
      </div>

      {/* Gallery grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              {/* Image with parallax effect */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={image.url}
                  alt={`Khabib Nurmagomedov ${index + 1}`}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold">
                    {image.caption}
                  </h3>
                  <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition">
                    View Full Image
                  </button>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-red-600 transform translate-x-8 -translate-y-8 rotate-45 group-hover:bg-green-600 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Navigation arrows */}
            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative w-full h-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-center">
                <h3 className="text-white text-2xl font-bold">
                  {selectedImage.caption}
                </h3>
                <p className="text-gray-300">
                  Image {currentIndex + 1} of {images.length}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => navigate("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
