"use client";

import { useState } from "react";

const itemHeight = 35;
const windowHeight = 500;

export const VirtualizedList = ({
  itemCount,
} : { 
  itemCount: number,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.floor((scrollTop + windowHeight) / itemHeight);

  const listItems = Array.from({ length: itemCount }, (_, index) => listItem(index));

  return (
    <ul style={{ height: windowHeight, overflowY: 'scroll' }} className="overflow-y-scroll w-full border-2 border-black relative">
      {listItems}
    </ul>
  )
}

const listItem = (index: number) => {
  return (
    <li style={{ height: itemHeight }} key={index}>
      List item {index}
    </li>
  )
}