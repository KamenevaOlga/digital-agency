"use client";
import React from "react";
import Card from "./Card";

const CardsSectionWhyChoose = () => {
  const cardsData = [
    {
      icon: "icon-medal",
      title: "Expertise",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
      icon: "icon-user-wf",
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    },
    {
      icon: "icon-shield-bolt",
      title: "Results-Driven Solutions",
      description:
        "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    },
    {
      icon: "icon-crown",
      title: "Collaborative Partnership",
      description:
        "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardsSectionWhyChoose;
