"use client";
import React, { useState } from "react";
import FAQSection from "@/components/FAQSection";
import Form from "@/components/Form";
import CTASection from "@/components/CTASection";
import AppButtonSocialNetwork from "@/components/AppButtonSocialNetwork";

const page = () => {
  const handleEmailClick = () =>
    (window.location.href = "mailto:hello@squareup.com");
  const handlePhoneClick = () => (window.location.href = "tel:+9191813232309");

  return (
    <div className="contact-page">
      <div className="container">
        <div className="text-container">
          <div className="text-header">
            <h2>Contact Us</h2>
            <p className="paragraph">
              Get in touch with us today and let us help you with any questions
              or inquiries you may have.
            </p>
          </div>
          <div className="bg-image"></div>
        </div>
        <div className="contact-container">
          <div className="button-container">
            <button onClick={handleEmailClick}>
              <i className="icon-envelope"></i>
              <span>hello@squareup.com</span>
            </button>
            <button onClick={handlePhoneClick}>
              <i className="icon-phone"></i>
              <span>+91 91813 23 2309</span>
            </button>
            <button>
              <i className="icon-map-pin"></i>
              <span>Get Location</span>
            </button>
          </div>
          <Form />
          <div className="sub-container">
            <div className="sub-container-top">
              <span className="heading">Operating Days</span>
              <span className="text">Monday to Friday</span>
            </div>
            <div className="divider"></div>
            <div className="sub-container-bottom">
              <span className="heading">Stay Connected</span>
              <AppButtonSocialNetwork />
            </div>
          </div>
        </div>
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
};

export default page;
