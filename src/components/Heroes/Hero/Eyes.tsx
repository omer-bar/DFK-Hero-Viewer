import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

/* EYES */
import EyesHighlight from "../../../assets/images/hero/eyes-highlight.svg";
import EyesShadow from "../../../assets/images/hero/eyes-shadow.svg";

const HeroEyes = ({ eyeColor }: any) => {
  return (
    <>
      <img src={EyesHighlight} className={styles.highlight} alt="" />
      <img src={EyesShadow} className={styles.shadow} alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 5 3"
        className={styles.color}
        shapeRendering="crispEdges"
      >
        <path stroke={`#${eyeColor}`} d="M0 1h1M3 1h1M0 2h1M3 2h1" />
      </svg>
    </>
  );
};

export default HeroEyes;
