"use client";
import React from "react";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import AppButton from "@/components/AppButton";

const page = () => {
  return (
    <div className="careers-page">
      <div className="container">
        <div className="text-container">
          <div className="text-header">
            <h2>Join Our Team at SquareUp</h2>
            <p className="paragraph">
              Unlock your potential and join our team of innovators and problem
              solvers.
            </p>
          </div>
          <div className="bg-image"></div>
        </div>

        {/*  */}
        <div className="careers-container">
          <div className="careers-container-header">
            <h2>Welcome to SquareUp, where talent meets opportunity!</h2>
            <p className="paragraph">
              At SquareUp, we believe that the success of our agency lies in the
              talent, passion, and dedication of our team members. We are a
              digital product agency that thrives on innovation, creativity, and
              collaboration. If you're ready to make a difference and contribute
              to cutting-edge projects, we invite you to explore career
              opportunities with us.
            </p>
            <div className="careers-container-bottom">
              <span>Why Work at SquareUp?</span>
            </div>
          </div>
          <div className="careers-container-items">
            {/* 1 */}
            <div className="careers-container-card">
              <div className="card-header">
                <span>Innovative and Impactful Projects</span>
              </div>
              <p>
                At SquareUp, you'll have the opportunity to work on exciting and
                impactful projects that shape the digital landscape. From
                designing intuitive user interfaces to developing robust
                software solutions, you'll be part of a team that creates
                products that make a difference.
              </p>
            </div>
            {/* 2 */}
            <div className="careers-container-card">
              <div className="card-header">
                <span>Supportive Environment</span>
              </div>
              <p>
                At SquareUp, you'll have the opportunity to work on exciting and
                impactful projects that shape the digital landscape. From
                designing intuitive user interfaces to developing robust
                software solutions, you'll be part of a team that creates
                products that make a difference.
              </p>
            </div>
            {/* 3 */}
            <div className="careers-container-card">
              <div className="card-header">
                <span>Continuous Learning and Growth</span>
              </div>
              <p>
                We believe in investing in our team's growth and development. We
                provide opportunities for continuous learning, whether it's
                through workshops, training programs, or attending industry
                conferences. At SquareUp, you'll have the chance to expand your
                skill set and stay up-to-date with the latest trends and
                technologies.
              </p>
            </div>
            {/* 4 */}
            <div className="careers-container-card">
              <div className="card-header">
                <span>Challenging and Rewarding Work</span>
              </div>
              <p>
                Our projects are challenging, but the rewards are even greater.
                We tackle complex problems and push ourselves to deliver
                innovative solutions. You'll be empowered to take ownership of
                your work, make a real impact, and see your ideas come to life.
              </p>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="careers-container">
          <div className="careers-container-header">
            <h2>Current Openings</h2>
            <p className="paragraph">
              We are always on the lookout for talented individuals who are
              passionate about creating exceptional digital experiences. Whether
              you're a designer, engineer, project manager, or have skills that
              align with our agency's mission, we encourage you to explore our
              open positions.
            </p>
          </div>
          <div className="careers-sub-container">
            {/* card-container  1 */}
            <div className="card-container">
              <div className="card-container-heading">
                <span>Design Job Openings</span>
              </div>
              <div className="card-items">
                {/* card 1 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-cursor-bars"></i>
                    </div>
                    <div className="card-main">
                      <span>UI Designer</span>
                      <p>
                        Bring your creativity and expertise to our team as a UI
                        Designer. Collaborate with cross-functional teams to
                        design visually stunning and user-friendly interfaces.
                        Utilize your skills in layout design, typography, and
                        color theory to create engaging digital experiences that
                        leave a lasting impression.
                      </p>
                    </div>
                  </div>

                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* card  2 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-cursor-document"></i>
                    </div>
                    <div className="card-main">
                      <span>UX Designer</span>
                      <p>
                        Join us as a UX Designer and help shape exceptional user
                        experiences. Conduct user research, analyze data, and
                        create wireframes and prototypes to design intuitive and
                        user-centric interfaces. Collaborate closely with UI
                        Designers, developers, and stakeholders to ensure
                        seamless and enjoyable user journeys.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* 3 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-brush"></i>
                    </div>
                    <div className="card-main">
                      <span>Design Head</span>
                      <p>
                        Lead our design team as a Design Head and drive the
                        creative vision of our products. Provide strategic
                        direction, mentorship, and guidance to UI and UX
                        designers. Collaborate with cross-functional teams to
                        ensure design consistency and elevate our brand identity
                        through innovative and visually impactful designs.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
              </div>
            </div>
            {/* card-container  2 */}
            <div className="card-container">
              <div className="card-container-heading">
                <span>Development Job Openings</span>
              </div>
              <div className="card-items">
                {/* card 1 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-code-bracket"></i>
                    </div>
                    <div className="card-main">
                      <span>Front - End Developer</span>
                      <p>
                        Join our team as a Front-End Developer and bring our
                        designs to life. Transform UI/UX wireframes into
                        interactive web interfaces using HTML, CSS, and
                        JavaScript. Collaborate closely with designers and
                        back-end developers to ensure seamless integration and
                        optimal user experiences.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* card  2 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-command-line"></i>
                    </div>
                    <div className="card-main">
                      <span>Back - End Developer</span>
                      <p>
                        Be part of our team as a Backend Developer and
                        contribute to building robust and scalable web
                        applications. Develop server-side logic, integrate
                        databases, and optimize system performance. Collaborate
                        with front-end developers to ensure smooth communication
                        between the server and the user interface.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* 3 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-cog"></i>
                    </div>
                    <div className="card-main">
                      <span>Full Stack Developer</span>
                      <p>
                        Join us as a Full Stack Developer and take on end-to-end
                        responsibility for web application development. Combine
                        your skills in both front-end and back-end technologies
                        to create dynamic and responsive websites. Collaborate
                        with designers, developers, and stakeholders to deliver
                        comprehensive and user-friendly solutions.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
              </div>
            </div>
            {/* card-container  3 */}
            <div className="card-container">
              <div className="card-container-heading">
                <span>Management Job Openings</span>
              </div>
              <div className="card-items">
                {/* card 1 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-briefcase"></i>
                    </div>
                    <div className="card-main">
                      <span>BA Manager</span>
                      <p>
                        Lead our business analysis team as a BA Manager and
                        drive strategic initiatives. Gather and analyze
                        requirements, facilitate communication between
                        stakeholders, and ensure project alignment with business
                        objectives. Provide leadership and mentorship to a team
                        of talented business analysts.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* card  2 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-circle-stack"></i>
                    </div>
                    <div className="card-main">
                      <span>Project Manager</span>
                      <p>
                        Join our team as a Project Manager and oversee the
                        successful delivery of projects from initiation to
                        completion. Define project scope, manage timelines and
                        resources, and ensure effective communication across
                        cross-functional teams. Utilize your leadership and
                        organizational skills to drive project success.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* 3 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-user-group"></i>
                    </div>
                    <div className="card-main">
                      <span>HR Manager</span>
                      <p>
                        Be part of our team as an HR Manager and play a vital
                        role in managing our human resources. Lead talent
                        acquisition, employee engagement, and performance
                        management initiatives. Collaborate with leadership to
                        develop and implement HR strategies that foster a
                        positive and inclusive work culture.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
              </div>
            </div>
            {/* card-container 4 */}
            <div className="card-container">
              <div className="card-container-heading">
                <span>QA Job Openings</span>
              </div>
              <div className="card-items">
                {/* card 1 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-wrench"></i>
                    </div>
                    <div className="card-main">
                      <span>QA Tester</span>
                      <p>
                        Ensure the quality of our software products as a QA
                        Tester. Develop test plans, execute test cases, and
                        identify and report software defects. Collaborate with
                        developers and stakeholders to ensure that our products
                        meet high-quality standards and deliver an exceptional
                        user experience.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* card  2 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-chart-line"></i>
                    </div>
                    <div className="card-main">
                      <span>SQL Tester</span>
                      <p>
                        Join us as an SQL Tester and play a key role in testing
                        and validating the integrity of our databases. Write
                        complex SQL queries to perform data validation and
                        identify any anomalies. Collaborate with developers and
                        QA testers to ensure the accuracy and reliability of our
                        data.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
                {/* 3 */}
                <div className="card">
                  <div className="card-content">
                    <div className="icon">
                      <i className="icon-shield-right-half"></i>
                    </div>
                    <div className="card-main">
                      <span>Manual Tester</span>
                      <p>
                        Be part of our team as a Manual Tester and perform
                        comprehensive manual testing to ensure the quality and
                        functionality of our software applications. Develop test
                        cases, execute test scripts, and document test results.
                        Collaborate with developers and QA testers to
                        troubleshoot issues and enhance software performance.
                      </p>
                    </div>
                  </div>
                  <Link href={"/contact"} className="btn btn-card">
                    <AppButton label={"Apply Now"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/* ------  CTA Section --- */}
        <CTASection />
      </div>
    </div>
  );
};

export default page;
