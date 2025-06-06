import { useEffect, useRef } from "react"
import { BsActivity, BsPeople } from "react-icons/bs"
import { BiCalendar } from "react-icons/bi"
import { SiStudyverse } from "react-icons/si"
import gsap from "gsap"

export default function Why() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const steps = [
    {
      image: BiCalendar,
      word: "Accountability",
      phrase: "Stay consistent with group support"
    },
    {
      image: BsActivity,
      word: "Weekly Progress",
      phrase: "Track your goals effectively"
    },
    {
      image: SiStudyverse,
      word: "Peer Support",
      phrase: "Learn and grow together"
    },
    {
      image: BsPeople,
      word: "Flexible Learning",
      phrase: "Schedules that fit your life"
    },
  ]

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    })

    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out"
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen py-16 px-6 flex flex-col items-center gap-16 bg-gradient-to-br from-white to-slate-50"
    >
      <div className="text-center space-y-4 max-w-2xl">
        <h2 className="text-6xl font-semibold text-gray-900">Why Choose SkillSync?</h2>
        <p className="text-lg text-gray-600">
          Empower your learning journey with community, structure, and support.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 max-w-6xl">
        {steps.map((a, i) => {
          const Icon = a.image
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="w-[250px] h-[280px] p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-blue-600 text-5xl mb-4">
                <Icon />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{a.word}</h4>
              <p className="text-gray-600 mt-2">{a.phrase}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
