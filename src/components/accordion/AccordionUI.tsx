"use client";
import Link from "next/link";

interface AccordionUIProps {
  title: string;
  children: string;
  number: string;
  isOpen: boolean;
  onClick: (index: number) => void;
  itemIndex: number;
}

const AccordionUI = ({
  title,
  children,
  number,
  isOpen,
  onClick,
  itemIndex,
}: AccordionUIProps) => {
  return (
    <>
      <div className="item ">
        <Link
          href={"#"}
          onClick={() => onClick(itemIndex)}
          className={` ${isOpen ? "active" : ""}`}
        >
          <div className="gradient number">{number}</div>
          <span>{title}</span>
          {!isOpen ? (
            <i className="icon-plus" />
          ) : (
            <i className="icon-x-mark" />
          )}
        </Link>

        {isOpen && (
          <div className="panel">
            <p>{children}</p>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default AccordionUI;
