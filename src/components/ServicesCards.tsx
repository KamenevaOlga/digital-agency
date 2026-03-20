"use client";
import React from "react";
import Link from "next/link";
import AppButton from "@/components/AppButton";

interface CardProps {
  iconClass: string;
  title: string;
  description: string;
  href: string;
}

const Card = ({ iconClass, title, description, href }: CardProps) => (
  <div className="card">
    <div className="card-content">
      <div className="card-header">
        <div className="icon">
          <i className={iconClass}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
    <Link href={href} className="btn btn-card">
      <AppButton label="Learn More" />
    </Link>
  </div>
);

const ServicesCards = () => {
  const cardsData = [
    {
      iconClass: "icon-paint-brush",
      title: "Design",
      description:
        "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      href: "/services#design-section",
    },
    {
      iconClass: "icon-puzzle-piece",
      title: "Engineering",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      href: "/services#engineering-section",
    },
    {
      iconClass: "icon-battery-bolt",
      title: "Project Management",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      href: "/services#project-management-section",
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default ServicesCards;
