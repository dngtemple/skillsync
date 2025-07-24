import React from 'react';
import vid2 from "../assets/skill.mp4";

export default function Video() {
  return (
    <section className='w-full py-8 px-4 md:px-8'>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-8">
        Your Learning Accountability Partner
      </h2>

      <div className="w-full max-w-6xl mx-auto aspect-video">
        <video
          src={vid2}
          autoPlay
          playsInline
          muted
          loop
          className='w-full h-full object-cover rounded-lg shadow-md'
        />
      </div>
    </section>
  );
}
