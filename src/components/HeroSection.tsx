"use client";
import Link from "next/link";
import AppButton from "./AppButton";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="bg-container">
          <div className="sub-container">
            <div className="block">
              <h1>
                A Digital Product Studio
                <br /> that will Work
              </h1>
              <div className="text">
                <p>
                  For <span>startups</span>, <span>enterprise leaders</span>,
                  <span>media & publishers</span> and <span>social good</span>.
                </p>
              </div>
            </div>
            <div className="button-container">
              <Link href={"/work"} className="btn-grey">
                <AppButton label="Our Works" />
              </Link>
              <Link href={"/contact"} className="btn-green btn-sm">
                <AppButton label="Contact Us" />
              </Link>
            </div>
          </div>
          <img src="/images/abstract.png" alt="Abstract Design" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
