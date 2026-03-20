import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default Card;
