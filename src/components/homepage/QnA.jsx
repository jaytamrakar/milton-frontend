import React, { useState } from "react";

const QnA = ({ faqData }) => {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const toggleQuestion = (id) => {
    if (openedQuestion === id) {
      setOpenedQuestion(null);
    } else {
      setOpenedQuestion(id);
    }
  };

  return (
    <div className="w-[1000px] min-w-full mx-auto m-8 ">
      {faqData.map((item) => (
        <div key={item.id} className="mb-8 p-2 rounded-2xl bg-octothorpe-blue">
          <button
            onClick={() => toggleQuestion(item.id)}
            className="flex justify-between items-center w-full p-6 rounded-md focus:outline-none"
          >
            <p className="font-bold text-xl leading-6 text-[#2d2d2d] ">
              {item.question}
            </p>
            <svg
              className={`w-4 h-4 font-bold text-xl leading-6 text-[#2d2d2d] transition-transform ${
                openedQuestion === item.id ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openedQuestion === item.id && (
            <div className="px-6 pb-6 rounded-b-md">
              <p className="text-[#6b6b78] text-base font-medium text-left leading-6">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QnA;
