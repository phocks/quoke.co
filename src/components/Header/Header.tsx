import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.class1} onClick={() => console.log("hello")}>
      Hello!
    </div>
  );
};

export default Header;
