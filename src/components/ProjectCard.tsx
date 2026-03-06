import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  websiteUrl: string;
}

const ProjectCard = ({
  title,
  company,
  description,
  imageSrc,
  imageAlt,
  websiteUrl,
}: ProjectCardProps) => {
  return (
    <div className="card-items">
      <div className="items-heading">
        <span>{title}</span>
      </div>
      <div className="items-bottom">
        <img src={imageSrc} alt={imageAlt} />
        <div className="items-main">
          <div className="items-main-container">
            <span>{company}</span>
            <Link
              href={websiteUrl}
              className="link-adress"
              target="_blank"
              rel="noopenerer noreferrer"
            >
              {websiteUrl}
            </Link>
          </div>
          <Link
            href={websiteUrl}
            target="_blank"
            aria-label={`Visit ${company} website`}
            className="action-button"
          >
            <i className="icon-arrow-up-right"></i>
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
