import React from "react";

type Props = {
  children: React.ReactNode;
};

const PlainLayout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default PlainLayout;
