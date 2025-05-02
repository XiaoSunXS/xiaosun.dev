"use client";
import { useState } from "react";
import { LuChevronRight, LuChevronUp } from "react-icons/lu";

export const CollapsableList = ({
  items,
  label,
  showOnDefault = 3,
}: {
  items: React.ReactNode[];
  label: string;
  showOnDefault?: number;
}) => {
  const shouldCollapse = items.length > showOnDefault;
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (!shouldCollapse) {
    <ul className="list-disc ml-5">
      {items.slice(0).map((item, index) => (
        <li key={`collapsable-item-${index}`}>{item}</li>
      ))}
    </ul>;
  }

  if (isCollapsed) {
    return (
      <div>
        <ul className="list-disc ml-5">
          {items.slice(0, showOnDefault).map((item, index) => (
            <li key={`collapsable-item-${index}`}>{item}</li>
          ))}
        </ul>
        <a
          className="cursor-pointer flex"
          onClick={() => setIsCollapsed(false)}
        >
          <LuChevronRight className="mt-1 ml-0" />
          Show all {label}
        </a>
      </div>
    );
  }

  if (!isCollapsed) {
    return (
      <div>
        <ul className="list-disc ml-5">
          {items.slice(0).map((item, index) => (
            <li key={`collapsable-item-${index}`}>{item}</li>
          ))}
        </ul>
        <a className="cursor-pointer flex" onClick={() => setIsCollapsed(true)}>
          <LuChevronUp className="m-1" />
          Hide
        </a>
      </div>
    );
  }

  return null;
};
