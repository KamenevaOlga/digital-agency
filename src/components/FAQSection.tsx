"use client";
import Accordion from "./accordion/Accordion";

const FAQSection = () => {
  return (
    <div className="faqSection ">
      <div className="text-container">
        <div className="text-header">
          <h2>Frequently Asked Questions</h2>
          <p className="paragraph">
            Still you have any questions? Contact our Team via
            hello@squareup.com
          </p>
        </div>
        <div className="bg-image"></div>
      </div>
      <Accordion />
    </div>
  );
};

export default FAQSection;
