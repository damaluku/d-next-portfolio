import React from "react";
import styles from "../styles/Loader.module.css";

const LoaderComp = () => {
  return (
    <div>
      <div className={styles.container} id={"globalLoader"}>
        <span className={styles.loader}>Loading Site...</span>
      </div>
    </div>
  );
};

export default LoaderComp;
