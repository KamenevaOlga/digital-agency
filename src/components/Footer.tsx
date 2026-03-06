"use client";
import Link from "next/link";
import LogoBig from "./LogoBig";
import { usePathname } from "next/navigation";
import AppButtonSocialNetwork from "./AppButtonSocialNetwork";

const menuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Work",
    url: "/work",
  },
  {
    label: "Process",
    url: "/process",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Careers",
    url: "/careers",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

interface menuItemsProps {
  label: string;
  url: string;
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <LogoBig />
          <div className="divider"></div>

          <div className="nav-container">
            {menuItems.map((link) => (
              <Link key={link.label} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="social-network">
            <span>Stay Connected</span>
            <AppButtonSocialNetwork />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-contact">
            <button>
              <i className="icon-envelope"></i>
              <span>hello@squareup.com</span>
            </button>
            <button>
              <i className="icon-phone"></i>
              <span>+91 91813 23 2309</span>
            </button>
            <button>
              <i className="icon-map-pin"></i>
              <span>Somewhere in the World</span>
            </button>
          </div>
          <p>© 2023 SquareUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
