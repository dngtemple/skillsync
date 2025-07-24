import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Ava1 from "../assets/ava1.jpg";
import Ava2 from "../assets/ava2.jpg";
import Ava3 from "../assets/ava3.jpg";

export default function Testimonial() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 0.5,
    });
  }, []);

  const testimonials = [
    { name: "Majestina", avatar: Ava1, quote: "SkillSync helped me connect with mentors and grow my skills faster than ever." },
    { name: "Kekeli", avatar: Ava2, quote: "The platform is easy to use and the resources are top-notch." },
    { name: "Opong", avatar: Ava2, quote: "I love the interactive courses and the supportive community." },
    { name: "Yaw", avatar: Ava1, quote: "SkillSync made learning fun and engaging for me." },
    { name: "Charity", avatar: Ava3, quote: "I gained confidence in my abilities thanks to SkillSync." },
    { name: "Wisdom", avatar: Ava3, quote: "The feedback from instructors is always constructive and helpful." },
    { name: "Koomson", avatar: Ava2, quote: "SkillSync has the best community for learners." },
    { name: "Gorge", avatar: Ava1, quote: "I recommend SkillSync to anyone looking to upskill." },
    { name: "Pienel", avatar: Ava3, quote: "The variety of courses available is impressive." },
    { name: "Oduro", avatar: Ava2, quote: "SkillSync helped me achieve my career goals." }
  ];

  return (
    <section className='w-full min-h-screen px-4 md:px-8 py-10 bg-gray-100'>
      <h2 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center">
        What Learners Say About SkillSync
      </h2>

      <div className='w-full max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className='bg-blue-200 p-6 rounded-2xl flex items-start gap-4 shadow-md'
          >
            <img
              src={item.avatar}
              className='w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover'
              alt={`Avatar of ${item.name}`}
            />
            <div>
              <h3 className='text-lg font-bold'>{item.name}</h3>
              <p className='text-sm'>" {item.quote} "</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
