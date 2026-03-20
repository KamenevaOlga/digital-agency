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
    <label className="form-element-item">
      <input
        type="checkbox"
        name="selectedElements"
        value={id}
        checked={completed}
        onChange={() => toggleCheck(id)}
        className="form-checkbox visually-hidden"
      />
      <div className="check-box">
        <div className={`check ${completed ? "checked" : ""}`}>
          {completed && <i className="icon-check"></i>}
        </div>
        {title}
      </div>
    </label>
  );
};

export default FormElementItem;
