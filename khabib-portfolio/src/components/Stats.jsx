export default function Stats() {
  const stats = [
    { number: "29", label: "Wins", highlight: "from-red-500 to-amber-500" },
    {
      number: "0",
      label: "Losses",
      highlight: "from-emerald-500 to-green-500",
    },
    {
      number: "8",
      label: "Title Defenses",
      highlight: "from-blue-500 to-cyan-500",
    },
    {
      number: "13-0",
      label: "UFC Record",
      highlight: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="stats" className="relative py-16 my-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-green-500/5 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Animated title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r  from-red-600 to-red-900">
            By The Numbers
          </span>
        </h2>

        {/* Stats grid with stunning hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group perspective-1000 transform transition-all duration-700 hover:z-10"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl overflow-hidden">
                {/* Animated background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${stat.highlight}`}
                ></div>

                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${stat.highlight} filter blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-700`}
                ></div>

                {/* Stat number with counter animation */}
                <p className="text-5xl md:text-6xl font-extrabold mb-3 relative">
                  <span
                    className={`block bg-clip-text text-transparent bg-gradient-to-br ${stat.highlight}`}
                  >
                    {stat.number}
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-current to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </p>

                {/* Label with animated underline */}
                <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 relative inline-block">
                  {stat.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full"></span>
                </p>

                {/* Floating corner element */}
                <div
                  className={`absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 ${stat.highlight
                    .replace("from-", "border-")
                    .replace(
                      " to-",
                      " border-"
                    )} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
