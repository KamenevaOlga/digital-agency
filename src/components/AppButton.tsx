"use client";

interface ButtonProps {
  label: string;
}

const AppButton = ({ label = "Button" }: ButtonProps) => {
  return <button>{label}</button>;
};

export default AppButton;
