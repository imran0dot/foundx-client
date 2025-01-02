import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>This is the side bar</p>
      {children}
    </div>
  );
};

export default layout;
