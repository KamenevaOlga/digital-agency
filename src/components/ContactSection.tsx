"use client";
import LogoSmall from "./LogoSmall";
import Form from "./Form";
import Link from "next/link";
import AppButton from "./AppButton";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="text-container">
        <div className="text-header">
          <LogoSmall />
          <div className="header-container">
            <h5>Thank you for your Interest in SquareUp.</h5>
            <p className="paragraph">
              We would love to hear from you and discuss how we can help bring
              your digital ideas to life. Here are the different ways you can
              get in touch with us.
            </p>
          </div>
          <Link href={"/contact"} className="btn-sm btn-green">
            <AppButton label={"Start Project"} />
          </Link>
        </div>
        <div className="bg-image"></div>
      </div>
      <Form />
    </div>
  );
};

export default ContactSection;
