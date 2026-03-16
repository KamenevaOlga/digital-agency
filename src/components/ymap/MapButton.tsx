"use client";
import React from "react";

interface MapButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
}

const MapButton = ({
  onClick,
  label = "Get Location",
  icon = <i className="icon-map-pin"></i>,
}: MapButtonProps) => {
  return (
    <button onClick={onClick} type="button">
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default MapButton;
