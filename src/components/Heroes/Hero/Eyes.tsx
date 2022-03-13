import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

/* EYES */
import EyesHighlight from "../../../assets/images/hero/eyes-highlight.svg";
import EyesShadow from "../../../assets/images/hero/eyes-shadow.svg";
import { ReactComponent as EyesBase } from "../../../assets/images/hero/eyes-color.svg";

const HeroEyes = ({ eyeColor }: any) => {
	return (
		<>
			<img src={EyesHighlight} className={styles.highlight} alt="" />
			<img src={EyesShadow} className={styles.shadow} alt="" />
			<EyesBase stroke={`#${eyeColor}`} className={styles.color} />
		</>
	);
};

export default HeroEyes;
