import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const NotFound: NextPageWithLayout = () => {
  return <div>NotFound</div>;
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default NotFound;
