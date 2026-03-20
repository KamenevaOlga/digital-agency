"use client";
import React from "react";
import AppButton from "@/components/AppButton";
import ContactSection from "@/components/ContactSection";
import LogoSmall from "@/components/LogoSmall";
import Link from "next/link";

const page = () => {
  return (
    <div className="services-page">
      <div className="container">
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
        </div>

        {/* ----------- Design -- */}
        <div className="services-container">
          <div className="services-header">
            <h2 id="design-section">Design</h2>
            <p className="paragraph">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
            <div className="services-bottom">
              <span>Our design services include:</span>
            </div>
          </div>
          <div className="services-sub-container">
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>User Experience (UX) Design</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-cursor-on-square-and-dasher"></i>
                  </div>
                  <span>User Research and Persona Development</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-cursor-document"></i>
                  </div>
                  <span>Information Architecture and Wireframing</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-cursor-arrow-ripple"></i>
                  </div>
                  <span>Interactive Prototyping and User Testing</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-arrow-up-down-stars"></i>
                  </div>
                  <span>UI Design and Visual Branding</span>
                </div>
              </div>
            </div>
            {/* ------ */}
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>User Interface (UI) Design</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-cursor-bars"></i>
                  </div>
                  <span>Intuitive and Visually Appealing Interface Design</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-clock-dotted"></i>
                  </div>
                  <span>Custom Iconography and Illustration</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-pen"></i>
                  </div>
                  <span>Typography and Color Palette Selection</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-squares-correction"></i>
                  </div>
                  <span>Responsive Design for Various Devices</span>
                </div>
              </div>
            </div>
            {/* -------- */}
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Branding and Identity</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-circle-dashed"></i>
                  </div>
                  <span>Logo Design and Visual Identity Development</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-pointing-arrows"></i>
                  </div>
                  <span>Brand Strategy and Positioning</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-share"></i>
                  </div>
                  <span>Brand Guidelines and Style Guides</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-copybook"></i>
                  </div>
                  <span>
                    Marketing Collateral Design (Brochures, Business Cards,
                    etc.)
                  </span>
                </div>
              </div>
            </div>
            {/* ---- */}
          </div>
        </div>

        {/* -------- Engineering -- */}
        <div className="services-container">
          <div className="services-header">
            <h2 id="engineering-section">Engineering</h2>
            <p className="paragraph">
              Our engineering team combines technical expertise with a passion
              for innovation to build robust and scalable digital solutions. We
              leverage the latest technologies and best practices to deliver
              high-performance applications tailored to your specific needs.
            </p>
            <div className="services-bottom">
              <span>Our engineering services include:</span>
            </div>
          </div>
          <div className="services-sub-container">
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Web Development</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-code-bracket"></i>
                  </div>
                  <span>Front-End Development (HTML, CSS, JavaScript)</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-command-line"></i>
                  </div>
                  <span>Back-End Development (PHP, Python, Ruby)</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-cog"></i>
                  </div>
                  <span>
                    Content Management System (CMS) Development (WordPress,
                    Drupal)
                  </span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-light-beacon"></i>
                  </div>
                  <span>
                    E-Commerce Platform Development (Magento, Shopify)
                  </span>
                </div>
              </div>
            </div>
            {/* ------ */}
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Mobile App Development</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-filled-ipad"></i>
                  </div>
                  <span>Native iOS and Android App Development</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-arrow-turn-up-iphone"></i>
                  </div>
                  <span>
                    Cross-Platform App Development (React Native, Flutter)
                  </span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-cursor-arrow-rays"></i>
                  </div>
                  <span>App Prototyping and UI/UX Design Integration</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-hand-point-up-braille"></i>
                  </div>
                  <span>App Testing, Deployment, and Maintenance</span>
                </div>
              </div>
            </div>
            {/* -------- */}
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Custom Software Development</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-rectangle-dashed-badge-record"></i>
                  </div>
                  <span>Enterprise Software Development</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-tv-sparkles"></i>
                  </div>
                  <span>Custom Web Application Development</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-squares-plus"></i>
                  </div>
                  <span>Integration with Third-Party APIs and Systems</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-queue-list"></i>
                  </div>
                  <span>Legacy System Modernization and Migration</span>
                </div>
              </div>
            </div>
            {/* ---- */}
          </div>
        </div>

        {/* ---- Project Management -- */}
        <div className="services-container">
          <div className="services-header">
            <h2 id="project-management-section">Project Management</h2>
            <p className="paragraph">
              Our experienced project management team ensures that your projects
              are delivered on time, within budget, and according to your
              specifications. We follow industry-standard methodologies and
              employ effective communication and collaboration tools to keep you
              informed throughout the development process.
            </p>
            <div className="services-bottom">
              <span>Our project management services include:</span>
            </div>
          </div>
          <div className="services-sub-container">
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Project Planning and Scoping</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-inbox-arrow-down"></i>
                  </div>
                  <span>Requirements Gathering and Analysis</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-chart-bar"></i>
                  </div>
                  <span>Project Roadmap and Timeline Development</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-arrows-pointing-in"></i>
                  </div>
                  <span>Resource Allocation and Task Assignment</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-chart-bar"></i>
                  </div>
                  <span>Resource Allocation and Task Assignment</span>
                </div>
              </div>
            </div>
            {/* ------ */}
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Agile Development</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-inbox-stack"></i>
                  </div>
                  <span>Iterative Development and Sprints</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-circle-stack"></i>
                  </div>
                  <span>Scrum or Kanban Methodology Implementation</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <span>Regular Progress Updates and Demos</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-wand-and-stars"></i>
                  </div>
                  <span>Continuous Improvement and Feedback Incorporation</span>
                </div>
              </div>
            </div>
            {/* -------- */}
            <div className="sub-container-items">
              <div className="sub-container-heading">
                <span>Quality Assurance and Testing</span>
              </div>
              <div className="card-items-container">
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-puzzle-piece-sm"></i>
                  </div>
                  <span>Test Planning and Execution</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-shield-right-half"></i>
                  </div>
                  <span>Functional and Usability Testing</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-chart-line"></i>
                  </div>
                  <span>Performance and Security Testing</span>
                </div>
                <div className="card-items">
                  <div className="icon">
                    <i className="icon-wrench"></i>
                  </div>
                  <span>Bug Tracking and Issue Resolution</span>
                </div>
              </div>
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
