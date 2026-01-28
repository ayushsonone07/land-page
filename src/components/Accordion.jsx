import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "What services do you provide?",
    content:
      "We offer full-stack web development, UI/UX design, backend APIs, cloud deployment, and long-term maintenance.",
  },
  {
    title: "Which technologies do you use?",
    content:
      "We work with React, Next.js, Tailwind CSS, Node.js, Django, and modern cloud platforms.",
  },
  {
    title: "Is your platform scalable?",
    content:
      "Yes. Our architecture is designed to scale efficiently as your user base and traffic grow.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition ${
              isOpen
                ? "border-indigo-600 shadow-lg"
                : "border-gray-200"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-semibold">
                {item.title}
              </span>

              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-indigo-600" : ""
                }`}
              />
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-6 text-gray-600">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
