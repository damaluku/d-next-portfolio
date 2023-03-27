import React from "react";

type Props = {
  children: React.ReactNode;
};

const ClearLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default ClearLayout;
