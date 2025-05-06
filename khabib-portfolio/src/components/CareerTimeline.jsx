export default function CareerTimeline() {
  const milestones = [
    {
      year: "2008",
      title: "Professional Debut",
      description: "Began his professional MMA career in Russia.",
    },
    {
      year: "2012",
      title: "Signed with UFC",
      description: "Debuted in UFC with a win over Kamal Shalorus.",
    },
    {
      year: "2018",
      title: "Lightweight Champion",
      description:
        "Defeated Al Iaquinta to win the UFC Lightweight Championship.",
    },
    {
      year: "2020",
      title: "Final Fight",
      description:
        "Defeated Justin Gaethje at UFC 254, then retired with a perfect 29-0 record.",
    },
  ];

  return (
    <section
      id="career"
      className="py-16 my-16 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-inner"
    >
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100 tracking-wide">
        Career Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 dark:from-red-400 dark:to-red-600 transform -translate-x-1/2"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 px-6 py-4">
              <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition duration-500 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  {milestone.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {milestone.description}
                </p>
              </div>
            </div>
            <div className="z-10 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white dark:ring-gray-800 transform transition duration-500 hover:scale-110 hover:ring-red-400">
              {milestone.year}
            </div>
            <div className="md:w-1/2 px-6 py-4"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
