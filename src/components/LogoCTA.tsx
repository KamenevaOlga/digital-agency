"use client";
import Link from "next/link";
import React from "react";

const LogoCTA = () => {
  return (
    <Link href={"/"}>
      <div className="logo-cta">
        <img src="/cub.svg" alt="Cub logo" />
      </div>
    </Link>
  );
};

export default LogoCTA;
