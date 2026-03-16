"use client";
import React, { useState } from "react";
import FAQSection from "@/components/FAQSection";
import Form from "@/components/Form";
import CTASection from "@/components/CTASection";
import AppButtonSocialNetwork from "@/components/AppButtonSocialNetwork";
import YandexMap from "@/components/ymap/YandexMap";
import MapButton from "@/components/ymap/MapButton";

const contacts = {
  email: "hello@squareup.com",
  phone: "+91 91813 23 2309",
};

const page = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:${contacts.email}";
  };
  const handlePhoneClick = () =>
    (window.location.href = "tel:${contacts.phone}");

  const [showMap, setShowMap] = useState(false);
  const toggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="text-container">
            <div className="text-header">
              <h2>Contact Us</h2>
              <p className="paragraph">
                Get in touch with us today and let us help you with any
                questions or inquiries you may have.
              </p>
            </div>
            <div className="bg-image"></div>
          </div>
          <div className="contact-container">
            <div className="button-container">
              <button onClick={handleEmailClick} type="button">
                <i className="icon-envelope"></i>
                <span>{contacts.email}</span>
              </button>
              <button onClick={handlePhoneClick} type="button">
                <i className="icon-phone"></i>
                <span>{contacts.phone}</span>
              </button>
              <MapButton
                onClick={toggleMap}
                label={showMap ? "Hide Location" : "Get Location"}
              />
            </div>
            <YandexMap showMap={showMap} />

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
    </>
  );
};

export default page;
