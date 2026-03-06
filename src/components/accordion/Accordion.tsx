"use client";
import { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const data = [
    {
      number: "01",
      question: "What services does SquareUp provide?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      number: "02",
      question: "How can SquareUp help my business?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management.",
    },
    {
      number: "03",
      question: "What industries does SquareUp work with?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      number: "04",
      question: "How long does it take to complete a project with SquareUp?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      number: "05",
      question:
        "Do you offer ongoing support and maintenance after the project is completed?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      number: "06",
      question: "Can you work with existing design or development frameworks?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management.",
    },
    {
      number: "07",
      question: "How involved will I be in the project development process?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      number: "08",
      question: "Can you help with website or app maintenance and updates?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
  ];

  const midIndex = Math.ceil(data.length / 2);
  const firstColumn = data.slice(0, midIndex);
  const secondColumn = data.slice(midIndex);

  const [open, setOpen] = useState(0);

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <>
      <div className="accordion">
        <div>
          {firstColumn.map((item, localIndex) => {
            const globalIndex = localIndex;
            return (
              <AccordionUI
                key={`col1-${globalIndex}`}
                title={item.question}
                number={item.number}
                onClick={toggle}
                itemIndex={globalIndex}
                isOpen={open === globalIndex}
              >
                {item.answer}
              </AccordionUI>
            );
          })}
        </div>
        <div className="hidden lg:block">
          {secondColumn.map((item, localIndex) => {
            const globalIndex = midIndex + localIndex;
            return (
              <AccordionUI
                key={`col2-${globalIndex}`}
                title={item.question}
                number={item.number}
                isOpen={open === globalIndex}
                onClick={toggle}
                itemIndex={globalIndex}
              >
                {item.answer}
              </AccordionUI>
            );
          })}
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Accordion;
