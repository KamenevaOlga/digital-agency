"use client";
import Link from "next/link";
import React from "react";

const AppButtonSocialNetwork = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
  };

  return (
    <div className="button-container-social-network">
      <Link
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Поделиться в Facebook"
        className="social-button"
      >
        <i className="icon-facebook-f"></i>
      </Link>
      <Link
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Твитнуть в Twitter"
        className="social-button"
      >
        <i className="icon-twitter"></i>
      </Link>
      <Link
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Поделиться в LinkedIn"
        className="social-button"
      >
        <i className="icon-linkedin"></i>
      </Link>
    </div>
  );
};

export default AppButtonSocialNetwork;
