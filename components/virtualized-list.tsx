"use client";

import { useState } from "react";

const itemHeight = 35;
const windowHeight = 500;
const overscan = 10;

export const VirtualizedList = ({ itemCount }: { itemCount: number }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const renderedNodesCount = Math.min(
    itemCount - startIndex,
    Math.ceil(windowHeight / itemHeight) + overscan * 2
  );

  const generateRows = () => {
    const rows = [];
    for (let index = 0; index < renderedNodesCount; index++) {
      const i = startIndex + index;
      rows.push(listItem(i));
    }
    return rows;
  };

  return (
    <ul
      style={{ height: windowHeight, overflowY: "scroll" }}
      className="overflow-y-scroll w-full border-2 border-black"
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: itemCount * itemHeight }}>
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
          }}
        >
          {generateRows()}
        </div>
      </div>
    </ul>
  );
};

const listItem = (index: number) => {
  return (
    <li
      style={{
        height: `${itemHeight}px`,
        backgroundColor: index & 1 ? "#0f0f0f" : "#1f1f1f",
      }}
      key={index}
    >
      List item {index}
    </li>
  );
};
