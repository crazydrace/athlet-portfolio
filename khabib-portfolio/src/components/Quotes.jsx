const quotes = [
  "If Sambo was easy, it would be called Jiu-Jitsu.",
  "I don't fight for the money. I fight for my legacy.",
  "You can talk, but when cage closes, it's only you and me.",
  "I'm going to smash your boy. I'm going to maul him.",
  "I know only one thing I want to do: dominate.",
];

export default function Quotes() {
  return (
    <section
      id="quotes"
      className="py-16 my-16 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-inner"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-100 tracking-wide">
        Iconic Quotes
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white/30 dark:bg-gray-700/30 backdrop-blur-lg rounded-2xl shadow-lg border border-transparent hover:border-red-500 transform transition duration-500 hover:scale-105"
          >
            <blockquote className="text-2xl italic font-medium text-gray-700 dark:text-gray-200 leading-relaxed group-hover:text-red-500 transition-colors duration-500">
              “{quote}”
            </blockquote>
            <div className="absolute -top-4 left-8 w-8 h-8 bg-red-500 rounded-full shadow-md animate-pulse group-hover:scale-110 transition-transform"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
