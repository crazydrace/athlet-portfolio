export default function Hero() {
  return (
    <section className="relative py-12 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full  dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text content with stunning animations */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="inline-block overflow-hidden">
              <span className="block animate-slide-up delay-100">
                Undefeated.
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="block animate-slide-up delay-200">
                Undisputed.
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="block animate-slide-up delay-300 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-900">
                Unmatched.
              </span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg animate-fade-in delay-500">
            29-0. Former UFC Lightweight Champion. One of the greatest mixed
            martial artists of all time.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in delay-700">
            <a
              href="https://en.wikipedia.org/wiki/Khabib_Nurmagomedov"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 bg-red-600 text-white rounded-lg overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-lg"></span>
            </a>
            <a
              href="#stats"
              className="relative px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden group"
            >
              <span className="relative z-10 text-gray-800 dark:text-white">
                View Stats
              </span>
              <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 transition-all duration-500 rounded-lg"></span>
            </a>
          </div>
        </div>

        {/* Image with parallax and hover effect */}
        <div className="md:w-1/2 relative group">
          <div className="relative w-full max-w-lg mx-auto">
            <img
              src="https://th.bing.com/th/id/OIP.kBC9stbPkAchMe4c4_YZMwHaE7?w=300&h=200&c=7&r=0&o=7&cb=iwp1&pid=1.7&rm=3"
              alt="Khabib Nurmagomedov"
              className="rounded-xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-700 z-10 relative"
            />
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-green-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            <div className="absolute -inset-1 border-4 border-transparent group-hover:border-red-500/30 rounded-xl transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
