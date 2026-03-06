"use client";
import Link from "next/link";
import Accordion from "./accordion/Accordion";

const FAQSection = () => {
  return (
    <div className="faqSection ">
      <div className="text-container">
        <div className="text-header">
          <h2>Frequently Asked Questions</h2>
          <p className="paragraph">
            Still you have any questions? Contact our Team via
            hello@squareup.com
          </p>
        </div>
        <div className="bg-image"></div>
      </div>

      <Accordion />

      {/* <div className="accordion" id="accordion">
        <div className="items-container"> */}
      {/* -- 1 -- */}
      {/* <div className="item active">
            <Link href={"#"}>
              <div className="number">01</div>
              <span>What services does SquareUp provide?</span>
              <i className="icon-plus icon-open"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          <div className="divider"></div> */}
      {/* -- 2 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">02</div>
              <span>How can SquareUp help my business?</span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management.
              </p>
            </div>
          </div>
          <div className="divider"></div> */}
      {/* -- 3 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">03</div>
              <span>What industries does SquareUp work with?</span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          <div className="divider"></div> */}
      {/* -- 4 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">04</div>
              <span>
                How long does it take to complete a project with SquareUp?
              </span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          <div className="divider"></div>
        </div> */}

      {/*  2 col */}
      {/* <div className="items-container hidden lg:block"> */}
      {/* -- 5 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">05</div>
              <span>
                Do you offer ongoing support and maintenance after the project
                is completed?
              </span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          <div className="divider"></div> */}
      {/* -- 6 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">06</div>
              <span>
                Can you work with existing design or development frameworks?
              </span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management.
              </p>
            </div>
          </div>
          <div className="divider"></div> */}
      {/* -- 7 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">07</div>
              <span>
                How involved will I be in the project development process?
              </span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          <div className="divider"></div> */}
      {/* -- 8 -- */}
      {/* <div className="item">
            <Link href={"#"}>
              <div className="number">08</div>
              <span>
                Can you help with website or app maintenance and updates?
              </span>
              <i className="icon-plus"></i>
            </Link>
            <div className="panel">
              <p>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div> */}
    </div>
  );
};

export default FAQSection;
