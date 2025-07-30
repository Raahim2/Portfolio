// components/Follow.js or pages/your-page.js

import React from 'react';
import Starter from './Starter'; 
import FollowCard from './FollowCard';




const Follow = () => {
  return (
    // Section container with a dark background and vertical padding
    <section className="text-white w-full py-20 lg:py-24" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Starter component for the title and description */}
        <Starter 
          title="Connect With Me"
          text1={"Find me on"}
          text2={"these platforms"}
        />

        

         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-800 md:divide-x md:divide-gray-800">
            <FollowCard type="LinkedIn" />
            <FollowCard type="GitHub" />
            <FollowCard type="LeetCode" />
        </div>
        
      </div>
    </section>
  );
};

export default Follow;