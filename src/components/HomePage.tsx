"use client";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import AppButton from "@/components/AppButton";
import Companies from "./Companies";
import CardsSectionWhyChoose from "./whoChooseUs/CardsSectionWhyChoose";
import ServicesCards from "./ServicesCards";

const HomePage = () => {
  return (
    <div className="content">
      <HeroSection />
      <div className="container">
        <Companies />

        <div className="our-services">
          <div className="text-container">
            <div className="text-header">
              <h2>Our Services</h2>
              <p className="paragraph">
                Transform your brand with our innovative digital solutions that
                captivate and engage your audience.
              </p>
            </div>
            <div className="bg-image"></div>
          </div>
          <ServicesCards />
        </div>
        <div className="why-choose-us">
          <div className="text-container">
            <div className="text-header">
              <h2>Why Choose SquareUp?</h2>
              <p className="paragraph">
                Experience excellence in digital craftsmanship with our team of
                skilled professionals dedicated to delivering exceptional
                results.
              </p>
            </div>
            <div className="bg-image"></div>
          </div>
          <CardsSectionWhyChoose />
        </div>
        <div className="testimonials-section">
          <div className="text-container">
            <div className="text-header">
              <h2>What our Clients say About us</h2>
              <p className="paragraph">
                At SquareUp, we take pride in delivering exceptional digital
                products and services that drive success for our clients. Here's
                what some of our satisfied clients have to say about their
                experience working with us
              </p>
            </div>
            <div className="bg-image"></div>
          </div>
          {/*  */}
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h4>
                  SquareUp has been Instrumental in Transforming our Online
                  Presence.
                </h4>
                <p>
                  Their team's expertise in web development and design resulted
                  in a visually stunning and user-friendly e-commerce platform.
                  Our online sales have skyrocketed, and we couldn't be happier.
                </p>
              </div>
              <div className="card-footer">
                <div className="sub-container">
                  <img src="./images/avatar/john_smith.jpg" alt="John Smith" />
                  <div className="items-container">
                    <p className="name">John Smith</p>
                    <span>CEO of Chic Boutique</span>
                  </div>
                </div>
                <Link href={"#"}>
                  <AppButton label={"Open Website"} />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Working with SquareUp was a breeze.</h4>
                <p>
                  They understood our vision for a mobile app that streamlined
                  our food delivery service. The app they delivered exceeded our
                  expectations, and our customers love the seamless ordering
                  experience. SquareUp is a trusted partner we highly recommend.
                </p>
              </div>
              <div className="card-footer">
                <div className="sub-container">
                  <img
                    src="./images/avatar/sarah_johnson.jpg"
                    alt="Sarah Johnson"
                  />
                  <div className="items-container">
                    <p className="name">Sarah Johnson</p>
                    <span>Founder of HungryBites.</span>
                  </div>
                </div>
                <Link href={"#"}>
                  <AppButton label={"Open Website"} />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>
                  SquareUp developed a comprehensive booking and reservation
                  system for our event management company
                </h4>
                <p>
                  Their attention to detail and commitment to delivering a
                  user-friendly platform was evident throughout the project. The
                  system has streamlined our operations and enhanced our
                  clients' event experiences.
                </p>
              </div>
              <div className="card-footer">
                <div className="sub-container">
                  <img
                    src="./images/avatar/mark_thompson.jpg"
                    alt="Mark Thompson"
                  />
                  <div className="items-container">
                    <p className="name">Mark Thompson</p>
                    <span>CEO of EventMasters</span>
                  </div>
                </div>
                <Link href={"#"}>
                  <AppButton label={"Open Website"} />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>
                  ProTech Solutions turned to SquareUp to automate our workflow
                </h4>
                <p>
                  They delivered an exceptional custom software solution. The
                  system has significantly increased our productivity and
                  reduced manual errors. SquareUp's expertise and
                  professionalism have made them a trusted technology partner.
                </p>
              </div>
              <div className="card-footer">
                <div className="sub-container">
                  <img
                    src="./images/avatar/laura_adams.jpg"
                    alt="Laura Adams"
                  />
                  <div className="items-container">
                    <p className="name">Laura Adams</p>
                    <span>COO of ProTech Solutions.</span>
                  </div>
                </div>
                <Link href={"#"}>
                  <AppButton label={"Open Website"} />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>
                  SquareUp designed and developed a captivating web portal for
                  showcasing our real estate listings.
                </h4>
                <p>
                  The platform is visually appealing and easy to navigate,
                  allowing potential buyers to find their dream homes
                  effortlessly. SquareUp's expertise in the real estate industry
                  is unmatched.
                </p>
              </div>
              <div className="card-footer">
                <div className="sub-container">
                  <img
                    src="./images/avatar/michael_anderson.jpg"
                    alt="Michael Anderson"
                  />
                  <div className="items-container">
                    <p className="name">Michael Anderson</p>
                    <span>Founder of Dream Homes Realty.</span>
                  </div>
                </div>
                <Link href={"#"}>
                  <AppButton label={"Open Website"} />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>
                  FitLife Tracker wanted a mobile app that tracked fitness
                  activities and provided personalized workout plans.
                </h4>
                <p>
                  SquareUp's team developed an intuitive and feature-rich app
                  that has helped our users stay motivated and achieve their
                  fitness goals. We highly recommend SquareUp for any health and
                  fitness app development needs.
                </p>
              </div>
              <div className="card-footer">
                <div className="sub-container">
                  <img
                    src="./images/avatar/emily_turner.jpg"
                    alt="Emily Turner"
                  />
                  <div className="items-container">
                    <p className="name">Emily Turner</p>
                    <span>CEO of FitLife Tracker</span>
                  </div>
                </div>
                <Link href={"#"}>
                  <AppButton label={"Open Website"} />
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
