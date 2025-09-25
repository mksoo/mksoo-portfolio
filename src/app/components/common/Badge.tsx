

import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-500 text-white text-sm rounded-full font-medium ${className ?? ""}`}
    >
      {children}
    </span>
  );
}