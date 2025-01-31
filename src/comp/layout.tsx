import React, { ReactNode } from "react";

interface LayoutProps {
  left: ReactNode;
  right: ReactNode;
  bottom: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ left, right, bottom }) => {
  return (
      <div className="layout">
        <div className="top">
          <div className="left">{left}</div>
          <div className="right">{right}</div>
        </div>
        <div className="bottom">{bottom}</div>
      </div>
  );
};

export default Layout;
