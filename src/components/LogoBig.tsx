"use client";
import Link from "next/link";

const LogoBig = () => {
  return (
    <Link href={"/"} className="logo-big">
      <div className="logo-cub">
        <img src="/cub.svg" alt="Cub logo" />
      </div>
      <img className="logo-square-up" src="/squareUp.svg" alt="SquareUp logo" />
    </Link>
  );
};

export default LogoBig;
