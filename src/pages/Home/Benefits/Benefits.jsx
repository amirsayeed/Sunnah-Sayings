import React from "react";
import { FaQuoteLeft, FaCheckCircle, FaUsers } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaQuoteLeft size={36} className="text-[#2dcfc4]" />,
    title: "Authentic Islamic Quotes",
    description:
      "Access a curated collection of authentic Hadiths, Quranic verses, and sayings from Islamic scholars."
  },
  {
    id: 2,
    icon: <FaCheckCircle size={36} className="text-[#2dcfc4]" />,
    title: "Verified & Approved",
    description:
      "All quotes are verified and approved by the admin to ensure authenticity and accuracy."
  },
  {
    id: 3,
    icon: <FaUsers size={36} className="text-[#2dcfc4]" />,
    title: "Community Contributions",
    description:
      "Users can submit new quotes, contribute to the collection, and see their submissions’ approval status."
  },
];

const Benefits = () => {
  return (
    <div className="px-2 md:px-4 my-10 ">
      <h2 className="text-xl md:text-3xl font-bold text-center">
        Discover the Wisdom
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="border border-gray-300 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
