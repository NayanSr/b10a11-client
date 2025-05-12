import React from 'react';

const About = () => {
    return (
       <div className=" text-black lg:w-[1400px] px-4 my-4">
      <h3 className="text-lg font-semibold ">About Our Collection</h3>
      <p className=" text-sm">
        Discover curated artifacts from ancient civilizations, showcasing humanity's cultural heritage through 
        verified archaeological treasures.
      </p>
      
      <ul className="space-y-2 text-black text-sm">
        <li className="flex items-start gap-2">
          <span className="text-black">🏺</span>
          <span>Digitally preserving cultural artifacts</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-black">🔍</span>
          <span>Making history accessible to all</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-black">📜</span>
          <span>Sharing untold historical narratives</span>
        </li>
      </ul>

      <div className="pt-2 flex gap-4">
        <a 
          href="/about" 
          className="text-black hover:text-amber-200 text-sm font-medium transition-colors"
        >
          Learn More →
        </a>
        <a 
          href="/team" 
          className=" hover:text-gray-300 text-sm transition-colors"
        >
          Meet the Team
        </a>
      </div>
    </div>
    );
};

export default About;