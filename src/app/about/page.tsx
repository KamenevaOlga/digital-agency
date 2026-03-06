"use client";
import React from "react";
import CTASection from "@/components/CTASection";
import LogoCTA from "@/components/LogoCTA";

const page = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="text-container">
          <div className="text-header">
            <h2>About Us</h2>
            <p className="paragraph">
              Welcome to SquareUp, where collaboration, expertise, and
              client-centricity intersect to shape the future of digital
              innovation.
            </p>
          </div>
          <div className="bg-image"></div>
        </div>
        {/*  */}
        <div className="about-container-logo">
          <div className="about-logo-header">
            <h2>About SquareUp</h2>
            <p className="paragraph">
              SquareUp is a digital product agency that is passionate about
              crafting exceptional digital experiences. We specialize in design,
              engineering, and project management, helping businesses thrive in
              the digital landscape. At SquareUp, we follow a structured and
              collaborative process to ensure the successful delivery of
              exceptional digital products. Our process combines industry best
              practices, creative thinking, and a client-centric approach.
            </p>
          </div>
          <div className="about-logo-image">
            <img src="./images/about_image.png" alt="" className="about-img" />
            <div className="logo-absolute">
              <LogoCTA />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="about-container-items">
          <div className="about-items-heading">
            <span>Our Story</span>
          </div>
          <div className="about-items">
            {/* 1 */}
            <div className="items-card">
              <div className="items-header">
                <div className="number">01</div>
                <div className="items-heading">Design</div>
              </div>
              <p className="paragraph">
                Once upon a time, in a world driven by technology, a group of
                talented designers came together with a shared vision. They
                believed that design could shape the way people interacted with
                digital products. With their passion for aesthetics and
                usability, they founded SquareUp Digital Product Agency's design
                department. Their mission was to create visually stunning and
                user-friendly interfaces that would leave a lasting impression.
              </p>
            </div>
            {/* 2 */}
            <div className="items-card">
              <div className="items-header">
                <div className="number">02</div>
                <div className="items-heading">Engineering</div>
              </div>
              <p className="paragraph">
                Meanwhile, a team of brilliant engineers was busy crafting the
                backbone of digital innovation. With their expertise in coding
                and development, they founded the engineering division of
                SquareUp. They believed that technology had the power to
                transform ideas into reality. Their mission was to build robust,
                scalable, and cutting-edge digital solutions that would push the
                boundaries of what was possible.
              </p>
            </div>
            {/* 3 */}
            <div className="items-card">
              <div className="items-header">
                <div className="number">03</div>
                <div className="items-heading">Project Management</div>
              </div>
              <p className="paragraph">
                In the midst of the creative and technical minds, a group of
                project managers emerged as the glue that held everything
                together. They understood the importance of effective
                communication, organization, and efficient execution. With their
                skills in planning and coordination, they founded SquareUp's
                project management team. Their mission was to ensure that every
                project ran smoothly, on time, and within budget.
              </p>
            </div>
            {/* 4 */}
            <div className="items-card">
              <div className="items-header">
                <div className="number">04</div>
                <div className="items-heading">Collaboration</div>
              </div>
              <p className="paragraph">
                At SquareUp, these three departments came together to form a
                cohesive and collaborative unit. They embraced the power of
                collaboration and recognized that their combined expertise would
                result in truly exceptional digital products. They believed that
                by working closely with their clients, understanding their
                needs, and involving them in the creative process, they could
                deliver solutions that surpassed expectations.
              </p>
            </div>
            {/* 5 */}
            <div className="items-card">
              <div className="items-header">
                <div className="number">05</div>
                <div className="items-heading">Client-Centric Approach</div>
              </div>
              <p className="paragraph">
                SquareUp's success was not solely measured by their technical
                prowess or design skills but by their unwavering commitment to
                their clients. They placed their clients at the center of
                everything they did. They took the time to listen, understand
                their unique challenges, and tailor their services to meet their
                specific requirements. Their mission was to become trusted
                partners, guiding businesses on their digital journey.
              </p>
            </div>
            {/* 6 */}
            <div className="items-card">
              <div className="items-header">
                <div className="number">06</div>
                <div className="items-heading">Driving Success</div>
              </div>
              <p className="paragraph">
                With each project, SquareUp's reputation grew. Their portfolio
                expanded to include a diverse range of industries and their
                impact was felt far and wide. From startups to established
                enterprises, businesses sought out SquareUp for their expertise
                in creating digital products that delivered tangible results.
                SquareUp's success was driven by their passion for innovation,
                their dedication to quality, and their commitment to helping
                their clients succeed in the digital world.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <CTASection />
      </div>
    </div>
  );
};

export default page;
