"use client";
import React from "react";
import ContactSection from "@/components/ContactSection";

const page = () => {
  return (
    <div className="process-page">
      <div className="container">
        <div className="text-container">
          <div className="text-header">
            <h2>Process of Starting the Project</h2>
            <p className="paragraph">
              At SquareUp, we value transparency, collaboration, and delivering
              exceptional results.
            </p>
          </div>
          <div className="bg-image"></div>
        </div>
        {/*  */}
        <div className="process-container">
          <div className="process-container-header">
            <h2>At SquareUp</h2>
            <p className="paragraph">
              We follow a structured and collaborative process to ensure the
              successful delivery of exceptional digital products. Our process
              combines industry best practices, creative thinking, and a
              client-centric approach.
            </p>
            <div className="process-container-bottom">
              <span>Here's an overview of our typical process:</span>
            </div>
          </div>
          {/*  */}
          <div className="process-container-items">
            {/* 1 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">01</div>
                <div className="card-name">Discovery</div>
              </div>
              <p>
                We begin by thoroughly understanding your business goals, target
                audience, and project requirements. We conduct in-depth research
                to gather insights and define project objectives, allowing us to
                develop a tailored strategy.
              </p>
            </div>
            {/* 2 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">02</div>
                <div className="card-name">Planning and Strategy</div>
              </div>
              <p>
                Based on the gathered information, we create a comprehensive
                project plan and strategy. This includes defining project
                milestones, timelines, deliverables, and resource allocation. We
                collaborate closely with you to align our strategy with your
                vision.
              </p>
            </div>
            {/* 3 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">03</div>
                <div className="card-name">Design</div>
              </div>
              <p>
                Our expert designers translate the project requirements into
                captivating visual designs. We create wireframes, mockups, and
                interactive prototypes to showcase the user interface, user
                experience, and overall design aesthetics. We iterate on the
                designs based on your feedback until we achieve the perfect look
                and feel.
              </p>
            </div>
            {/* 4 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">04</div>
                <div className="card-name">Development</div>
              </div>
              <p>
                Once the designs are approved, our skilled development team
                brings them to life. We use cutting-edge technologies and coding
                best practices to build robust and scalable digital products.
                Throughout the development phase, we maintain open lines of
                communication to keep you updated on progress and address any
                questions or concerns.
              </p>
            </div>
            {/* 5 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">05</div>
                <div className="card-name">Testing and Quality Assurance</div>
              </div>
              <p>
                We conduct rigorous testing to ensure that your digital product
                functions flawlessly across different devices, browsers, and
                operating systems. Our quality assurance team meticulously
                checks for bugs, usability issues, and performance bottlenecks.
                We strive for a seamless user experience and a high level of
                reliability.
              </p>
            </div>
            {/* 6 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">06</div>
                <div className="card-name">Deployment and Launch</div>
              </div>
              <p>
                When your digital product is thoroughly tested and meets your
                satisfaction, we prepare for deployment. We handle all the
                technical aspects of launching your product, ensuring a smooth
                transition from development to the live environment. We assist
                with setting up hosting, configuring servers, and managing any
                required integrations.
              </p>
            </div>
            {/* 7 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">07</div>
                <div className="card-name">Post-Launch Support</div>
              </div>
              <p>
                Our commitment to your success doesn't end with the launch. We
                provide ongoing support and maintenance services to ensure your
                digital product continues to perform optimally. We offer
                different support packages based on your needs, including bug
                fixes, feature enhancements, security updates, and technical
                support.
              </p>
            </div>
            {/* 8 */}
            <div className="process-container-card">
              <div className="card-header">
                <div className="number">08</div>
                <div className="card-name">Continuous Improvement</div>
              </div>
              <p>
                We believe in continuous improvement and strive to optimize your
                digital product even after launch. We monitor user feedback,
                analytics, and market trends to identify opportunities for
                enhancement and growth. We proactively suggest improvements and
                updates to keep your digital product ahead of the curve.
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default page;
