"use client";
import Link from "next/link";
import LogoCTA from "./LogoCTA";
import AppButton from "./AppButton";

const CTASection = () => {
  return (
    <div className="cta-container">
      <div className="cta-top">
        <div className="cta-top-logo">
          <LogoCTA />
        </div>
        <div className="cta-top-text">
          <span>
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </span>
          <p>
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>
      <div className="cta-bottom">
        <div className="cta-bottom-text">
          <span>Welcome to SquareUp</span>
          <p>
            Where collaboration, Expertise, and Client-Centricity Intersect to
            Shape the Future of Digital Innovation.
          </p>
        </div>

        <Link href={"/contact"} className="btn-sm btn-green">
          <AppButton label={"Start Project"} />
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
