export default function Footer() {
  return (
    <footer className="py-8 mt-16 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-t-4 border-red-500 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
          © 2023 <span className="font-semibold">Khabib Nurmagomedov</span>. All
          rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["Privacy", "Terms", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-gray-700 dark:text-gray-300 hover:text-red-500 transition duration-300 transform hover:scale-105"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
