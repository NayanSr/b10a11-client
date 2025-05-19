import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  const featuredArtifacts = [
    {
      id: 1,
      title: "Ancient Roman Helmet",
      image:
        "https://imperiumromanum.pl/wp-content/uploads/2016/06/g3G1hRS.jpg",
      description: "A 1st-century Roman legionary's helmet found in Britain.",
    },
    {
      id: 2,
      title: "Egyptian Amulet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MleayUxwdWyT8GDJPh55PMCXIR3dhbMKUg&s",
      description: "Amulet symbolizing protection, worn by Pharaohs.",
    },
    {
      id: 3,
      title: "Medieval Sword",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34RCcO9fKjNIUM4uWmllH48Wi58I4kX-g6w&s",
      description: "13th-century knight’s sword, used in early Crusades.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-4 dark:bg-gray-700 dark:text-white">
          Welcome to Legacy Tracker
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto dark:bg-gray-700 dark:text-white">
          Discover, learn about, and contribute to the world's greatest
          collection of historical artifacts.
        </p>
        
      </section>

      {/* Featured Artifacts */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Featured Artifacts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={artifact.image}
                alt={artifact.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 dark:bg-gray-700 dark:text-white">{artifact.title}</h3>
                <p className="text-sm text-gray-600 dark:bg-gray-700 dark:text-white">{artifact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4 dark:bg-gray-700 dark:text-white">Preserving Our Past</h2>
        <p className="text-gray-600 max-w-xl mx-auto dark:bg-gray-700 dark:text-white">
          Legacy Tracker is a global effort to digitally preserve human history.
          We believe in open access to knowledge, and empower communities to
          share cultural heritage from around the world.
        </p>
      </section>

      
    </div>
  );
};

export default News;
