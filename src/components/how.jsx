
import image3 from "../assets/image3.png"
import image7 from "../assets/image7.png"
import image9 from "../assets/image9.png"

export default function How() {
  const steps = [
    {
      image: image9,
      title: "Step 1",
      description: "Create an account and set your learning goals.",
      extra: "You’re one decision away from leveling up.",
    },
    {
      image: image7,
      title: "Step 2",
      description: "Get matched with a supportive group.",
      extra: "Your tribe is waiting. Let's grow together.",
    },
    {
      image: image3,
      title: "Step 3",
      description: "Stay consistent and build habits together.",
      extra: "Consistency beats talent every time.",
    },
  ];

  return (
    <div className=" w-[100%]  h-screen px-4 py-12 flex flex-col gap-16">
      <h1 className="text-6xl font-semibold text-center text-gray-800">
        How SkillSync Works
      </h1>

      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 shadow-md rounded-2xl p-4 flex flex-col items-center transition hover:shadow-lg"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-1">{step.title}</h3>
            <p className="text-center text-gray-600 mb-2">{step.description}</p>
            <p className="text-sm text-gray-500 italic text-center">{step.extra}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
