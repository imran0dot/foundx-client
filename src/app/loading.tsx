import React from "react";

const loading = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <div className="absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4">
        <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600 " />
      </div>
    </div>
  );
};

export default loading;
