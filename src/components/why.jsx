import { useRef } from "react"
import { BsActivity, BsPeople } from "react-icons/bs"
import { BiCalendar, BiBrain, BiRocket, BiNetworkChart } from "react-icons/bi"
import { SiStudyverse } from "react-icons/si"
import { GiInspiration } from "react-icons/gi"
import Happy from "../assets/happy.jpg"

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
    {
      image: BiBrain,
      word: "Faster Course Completion",
      phrase: "Complete your online courses faster with support."
    },
    {
      image: BiRocket,
      word: "Networking Opportunities",
      phrase: "Meet people who share your learning goals."
    },
    {
      image: BiNetworkChart,
      word: "Better Knowledge Retention",
      phrase: "Group discussions help you understand better"
    },
    {
      image: GiInspiration,
      word: "Motivation Boost",
      phrase: "Stay inspired by learning alongside others"
    },
  ]

  return (
    <section
      style={{ backgroundImage: `url(${Happy})` }}
      ref={sectionRef}
      className="min-h-screen bg-cover bg-center bg-no-repeat pb-20 px-4 md:px-10 flex flex-col items-center gap-16"
    >
      <div className="text-center space-y-4 max-w-2xl pt-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
          Why Choose SkillSync?
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Empower your learning journey with community, structure, and support.
        </p>
      </div>

      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
        {steps.map((a, i) => {
          const Icon = a.image
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-blue-500 text-6xl sm:text-7xl mb-4">
                <Icon />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{a.word}</h4>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{a.phrase}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
