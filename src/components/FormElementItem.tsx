"use client";
import React from "react";

interface elementItemsProps {
  id: number;
  title: string;
  completed: boolean;
  toggleCheck: (id: number) => void;
}

const FormElementItem = ({
  id,
  title,
  completed,
  toggleCheck,
}: elementItemsProps) => {
  return (
    <div className="check-box">
      <button className="check" onClick={() => toggleCheck(id)}>
        {completed ? <i className="icon-check"></i> : ""}
      </button>
      {title}
    </div>
  );
};

export default FormElementItem;
