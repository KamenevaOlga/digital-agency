"use client";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";

import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import AppButton from "@/components/AppButton";
import Companies from "./Companies";
import CardsSectionWhyChoose from "./whoChooseUs/CardsSectionWhyChoose";

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

          <div className="card-container">
            <div className="card">
              <div className="card-content">
                <div className="card-header">
                  <div className="icon">
                    <i className="icon-paint-brush"></i>
                  </div>
                  <h3>Design</h3>
                </div>
                <p>
                  At Squareup, our design team is passionate about creating
                  stunning, user-centric designs that captivate your audience
                  and elevate your brand. We believe that great design is not
                  just about aesthetics; it's about creating seamless and
                  intuitive user experiences.
                </p>
              </div>
              <Link href={"/services"} className="btn btn-card">
                <AppButton label="Learn More" />
              </Link>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-header">
                  <div className="icon">
                    <i className="icon-puzzle-piece"></i>
                  </div>
                  <h3>Engineering</h3>
                </div>
                <p>
                  Our engineering team combines technical expertise with a
                  passion for innovation to build robust and scalable digital
                  solutions. We leverage the latest technologies and best
                  practices to deliver high-performance applications tailored to
                  your specific needs.
                </p>
              </div>
              <Link href={"/services"} className="btn btn-card">
                <AppButton label="Learn More" />
              </Link>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-header">
                  <div className="icon">
                    <i className="icon-battery-bolt"></i>
                  </div>
                  <h3>Project Management</h3>
                </div>
                <p>
                  Our experienced project management team ensures that your
                  projects are delivered on time, within budget, and according
                  to your specifications. We follow industry-standard
                  methodologies and employ effective communication and
                  collaboration tools to keep you informed throughout the
                  development process.
                </p>
              </div>
              <Link href={"/services"} className="btn btn-card">
                <AppButton label="Learn More" />
              </Link>
            </div>
          </div>
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

          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <i className="icon-medal"></i>
                </div>
                <h3>Expertise</h3>
              </div>
              <p className="paragraph">
                Our team consists of highly skilled professionals who have a
                deep understanding of the digital landscape. We stay updated
                with the latest industry trends and best practices to deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <i className="icon-user-wf"></i>
                </div>
                <h3>Client-Centric Approach</h3>
              </div>
              <p className="paragraph">
                We prioritize our clients and their unique needs. We listen to
                your ideas, challenges, and goals, and tailor our services to
                meet your specific requirements. Your success is our success.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <i className="icon-shield-bolt"></i>
                </div>
                <h3>Results-Driven Solutions</h3>
              </div>
              <p className="paragraph">
                Our primary focus is on delivering results. We combine
                creativity and technical expertise to create digital products
                that drive business growth, enhance user experiences, and
                provide a competitive advantage.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="icon">
                  <i className="icon-crown"></i>
                </div>
                <h3>Collaborative Partnership</h3>
              </div>
              <p className="paragraph">
                We value long-term relationships with our clients. We see
                ourselves as your digital partner, providing ongoing support,
                maintenance, and updates to ensure your digital products
                continue to thrive.
              </p>
            </div>
          </div>
          {/* <CardsSectionWhyChoose /> */}
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
        </div>
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
