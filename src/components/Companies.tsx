"use client";
import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="companies">
      <div className="sub-container">
        <div className="companies-header">
          <h1>Trusted By 250+ Companies</h1>
        </div>
        <div className="card-container">
          <div className="card">
            <Image
              className="zapier"
              src="/images/companies/zapier.png"
              alt="Zapier"
              width={80}
              height={40}
            />
          </div>
          <div className="card">
            <Image
              className="spotify"
              src="/images/companies/spotify.png"
              alt="Spotify"
              width={117}
              height={40}
            />
          </div>
          <div className="card">
            <Image
              className="zoom"
              src="/images/companies/zoom.png"
              alt="Zoom"
              width={82}
              height={40}
            />
          </div>
          <div className="card">
            <Image
              className="slack"
              src="/images/companies/slack.png"
              alt="Slack"
              width={101}
              height={40}
            />
          </div>
          <div className="card">
            <Image
              className="amazon"
              src="/images/companies/amazon.png"
              alt="Amazon"
              width={92}
              height={40}
            />
          </div>
          <div className="card">
            <Image
              className="adobe"
              src="/images/companies/adobe.png"
              alt="Adobe"
              width={111}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
