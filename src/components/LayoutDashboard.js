import React from "react";
import { Navbar } from "./Navbar";

export const LayoutDashboard = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-4 px-4 pb-4">{children}</div>
    </>
  );
};
