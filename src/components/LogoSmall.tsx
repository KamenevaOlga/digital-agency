"use client";
import Link from "next/link";

const LogoSmall = () => {
  return (
    <Link href={"/"}>
      <div className="logo-small">
        <img src="/cub.svg" alt="Cub logo" />
      </div>
    </Link>
  );
};

export default LogoSmall;
