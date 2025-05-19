import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia Martinez",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Legacy Tracker helped me discover my grandfather’s war medal from World War II. Incredible platform!",
      rating: 5,
    },
    {
      id: 2,
      name: "Liam Johnson",
      avatar: "https://i.pravatar.cc/150?img=20",
      text: "As a history teacher, this site has become my favorite resource to engage students with real-world artifacts.",
      rating: 4,
    },
    {
      id: 3,
      name: "Amina Sheikh",
      avatar: "https://i.pravatar.cc/150?img=33",
      text: "A beautiful, user-friendly archive. I contributed an artifact from my region — the process was seamless.",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-orange-800 mb-6 dark:bg-gray-700 dark:text-white">
        What Our Users Say
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto dark:bg-gray-700 dark:text-white">
        Hear from educators, historians, and everyday explorers who’ve found meaning and connection through Legacy Tracker.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{review.name}</h4>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
