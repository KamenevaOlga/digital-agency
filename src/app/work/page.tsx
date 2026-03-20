"use client";
import React from "react";
import LogoSmall from "@/components/LogoSmall";
import Link from "next/link";
import AppButton from "@/components/AppButton";
import ProjectCard from "@/components/ProjectCard";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "E-Commerce Platform for Fashion Hub",
    company: "Chic Boutique",
    description:
      "We developed a visually stunning and user‑friendly e‑commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
    imageSrc: "/images/chic_boutique.jpg",
    imageAlt: "Chic Boutique e-commerce platform",
    websiteUrl: "https://www.chicboutique.com",
  },
  {
    title: "Mobile App for Food Delivery Service",
    company: "HungryBites",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real‑time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
    imageSrc: "/images/hungry_bites.jpg",
    imageAlt: "HungryBites food delivery mobile app",
    websiteUrl: "https://www.hungrybites.com",
  },
  {
    title: "Booking and Reservation System for Event Management",
    company: "EventMasters",
    description:
      "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user‑friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
    imageSrc: "/images/event_masters.jpg",
    imageAlt: "EventMasters event management system",
    websiteUrl: "https://www.eventmasters.com",
  },
  {
    title: "Custom Software for Workflow Automation",
    company: "ProTech Solutions",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
    imageSrc: "/images/pro_tech_solutions.jpg",
    imageAlt: "PProTech Solutions",
    websiteUrl: "https://www.protechsolutions.com",
  },
  {
    title: "Web Portal for Real Estate Listings",
    company: "Dream Homes Realty",
    description:
      "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
    imageSrc: "/images/dream_homes_realty.jpg",
    imageAlt: "Dream Homes Realty",
    websiteUrl: "https:/www.dreamhomesrealty.com",
  },
  {
    title: "Mobile App for Fitness Tracking",
    company: "FitLife Tracker",
    description:
      "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
    imageSrc: "/images/fit_life_tracker.jpg",
    imageAlt: "FitLife Tracker",
    websiteUrl: "https:/www.fitlifetracker.com",
  },
  {
    title: "Custom Software for Supply Chain Management",
    company: "Global Logistics Solutions",
    description:
      "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    imageSrc: "/images/global_logistics_solutions.jpg",
    imageAlt: "Global Logistics Solutions",
    websiteUrl: "https:/www.globallogisticssolutions.com",
  },
  {
    title: "Educational Platform for Online Learning",
    company: "EduConnect",
    description:
      "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
    imageSrc: "/images/edu_connect.jpg",
    imageAlt: "EduConnect",
    websiteUrl: "https:/www.educonnect.com",
  },
  {
    title: "Mobile App for Travel Planning",
    company: "WanderWise",
    description:
      "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
    imageSrc: "/images/wander_wise.jpg",
    imageAlt: "WanderWise",
    websiteUrl: "https:/www.wanderwise.com",
  },
  {
    title: "Web Application for Customer Relationship Management",
    company: "ConnectCRM",
    description:
      "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
    imageSrc: "/images/connect_crm.jpg",
    imageAlt: "ConnectCRM",
    websiteUrl: "https:/www.connectcrm.com",
  },
];

const page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const displayedProjects = isMobile ? projects.slice(0, 4) : projects;

  return (
    <div className="work-page">
      <div className="container">
        <div className="text-container">
          <div className="text-header">
            <h2>Our Works</h2>
            <p className="paragraph">
              Discover a portfolio of visually stunning and strategically
              crafted digital projects that showcase our creativity and
              expertise.
            </p>
          </div>
          <div className="bg-image"></div>
        </div>

        {/*  */}
        <div className="work-page-container">
          <div className="work-page-header">
            <h2>At SquareUp</h2>
            <p className="paragraph">
              We have had the privilege of working with a diverse range of
              clients and delivering exceptional digital products that drive
              success.
            </p>
            <div className="work-page-bottom">
              <span>Here are ten examples of our notable works:</span>
            </div>
          </div>
          {/*  */}
          <div className="sub-container-items">
            <div className="work-sub-container">
              {displayedProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="contact-section">
          <div className="text-container">
            <div className="text-header">
              <LogoSmall />
              <div className="text-header-container">
                <h5>Let us Bring your Ideas to Life in the Digital World.</h5>
                <p className="paragraph">
                  No matter which services you choose, we are committed to
                  delivering exceptional results that exceed your expectations.
                  Our multidisciplinary team works closely together to ensure
                  seamless collaboration and a unified vision for your digital
                  product.
                </p>
              </div>
              <Link href={"/contact"} className="btn-sm btn-green">
                <AppButton label={"Start Project"} />
              </Link>
            </div>
            <div className="bg-image"></div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default page;
