"use client";

import { useState } from "react";

const itemHeight = 35;
const windowHeight = 500;
const overscan = 10;

export const VirtualizedList = ({ itemCount }: { itemCount: number }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    itemCount,
    Math.ceil((scrollTop + windowHeight) / itemHeight) + overscan
  );

  const generateRows = () => {
    const rows = [];
    for (let index = startIndex; index < endIndex; index++) {
      rows.push(listItem(index));
    }
    return rows;
  };

  return (
    <ul
      style={{ height: windowHeight, overflowY: "scroll" }}
      className="overflow-y-scroll w-full border-2 border-black relative"
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      {generateRows()}
    </ul>
  );
};

const listItem = (index: number) => {
  return (
    <li
      style={{
        height: `${itemHeight}px`,
        top: `${itemHeight * index}px`,
        backgroundColor: index & 1 ? "#0f0f0f" : "#1f1f1f",
      }}
      key={index}
      className="absolute"
    >
      List item {index}
    </li>
  );
};
