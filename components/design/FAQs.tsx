'use client'

import { useState } from "react";
import PlusIcon from "../../public/assets/icons/plus.svg";
import MinusIcon from "../../public/assets/icons/Minus.svg";
import clsx from "clsx";

const items = [
  {
    question: "What payment methods do we accepet?",
    answer: "Site is is development mode. We'll add it soon",
  },
  {
    question: "How does the pricing work for teams?",
    answer: "Site is is development mode. Enjoy the free aceess as of now",
  },
  {
    question: "Can I change my plan later",
    answer: "Site is is development mode, but sure you can once its rolled out",
  },
  {
    question: "Is my data secure",
    answer:
      "Security is our top priority. We have end-to-end encryption and accessibility to your work is in your hands",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
          <span className="flex-1 text-lg font-bold">{question}</span>
          {isOpen? <MinusIcon/>:<PlusIcon/>}
        <div
          className={clsx('mt-4',{
            hidden: !isOpen,
            "": isOpen === true,
          })}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="contianer">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          {" "}
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
