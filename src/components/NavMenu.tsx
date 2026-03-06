"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    id: 0,
    label: "Home",
    url: "/",
  },
  {
    id: 1,
    label: "Services",
    url: "/services",
  },
  {
    id: 2,
    label: "Work",
    url: "/work",
  },
  {
    id: 3,
    label: "Process",
    url: "/process",
  },
  {
    id: 4,
    label: "About",
    url: "/about",
  },
  {
    id: 5,
    label: "Careers",
    url: "/careers",
  },
];

interface menuItemsProps {
  id: number;
  label: string;
  url: string;
}

const NavMenu = () => {
  const pathName = usePathname();
  const isActive = (url: string) => url === pathName;

  return (
    <nav className="nav">
      {menuItems.map((link) => (
        <Link
          key={link.label}
          href={link.url}
          className={isActive(link.url) ? "active" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
