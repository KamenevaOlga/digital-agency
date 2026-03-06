"use client";
import LogoBig from "./LogoBig";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import NavMenu from "./NavMenu";
import AppButton from "./AppButton";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import Link from "next/link";

const Header = () => {
  const screenSize = useScreenSize();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [classes, setClasses] = useState<string>("close");
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (
      (screenSize !== "xs" && screenSize !== "sm") ||
      ((screenSize == "xs" || screenSize == "sm") && !showMenu)
    ) {
      setClasses("close");
    } else {
      setClasses("opened");
    }
  }, [screenSize, showMenu]);

  return (
    <header className="header">
      <div className="container">
        <LogoBig />
        <div className="nav-container">
          <NavMenu />
        </div>
        <div className="nav-container">
          <Link href={"/contact"} className="btn-lg btn-green">
            <AppButton label="Contact Us" />
          </Link>
        </div>
        <button className="burger" onClick={toggleShowMenu}>
          <Bars3BottomRightIcon />
        </button>
      </div>
      <div className={`nav-overlay ${classes}`}>
        <div className="shadow" onClick={toggleShowMenu}></div>
        <div className="nav-container">
          <NavMenu />
          <Link href={"/contact"} className="btn-lg btn-green">
            <AppButton label="Contact Us" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
