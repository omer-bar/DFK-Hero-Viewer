import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

import FemaleLeftFootHighlight from "../../../assets/images/hero/female/LeftFoot-highlight.svg";
import FemaleLeftFootShadow from "../../../assets/images/hero/female/LeftFoot-shadow.svg";
import FemaleRightFootHighlight from "../../../assets/images/hero/female/RightFoot-highlight.svg";
import FemaleRightFootShadow from "../../../assets/images/hero/female/RightFoot-shadow.svg";

import archerLeftFoot from "../../../assets/images/hero/female/clothes/archer-LeftFoot.svg";
import archerRightFoot from "../../../assets/images/hero/female/clothes/archer-RightFoot.svg";

import knightLeftFoot from "../../../assets/images/hero/female/clothes/knight-LeftFoot.svg";
import knightRightFoot from "../../../assets/images/hero/female/clothes/knight-RightFoot.svg";

import monkLeftFoot from "../../../assets/images/hero/female/clothes/monk-LeftFoot.svg";
import monkRightFoot from "../../../assets/images/hero/female/clothes/monk-RightFoot.svg";

import pirateLeftFoot from "../../../assets/images/hero/female/clothes/pirate-LeftFoot.svg";
import pirateRightFoot from "../../../assets/images/hero/female/clothes/pirate-RightFoot.svg";

import priestLeftFoot from "../../../assets/images/hero/female/clothes/priest-LeftFoot.svg";
import priestRightFoot from "../../../assets/images/hero/female/clothes/priest-RightFoot.svg";

import thiefLeftFoot from "../../../assets/images/hero/female/clothes/thief-LeftFoot.svg";
import thiefRightFoot from "../../../assets/images/hero/female/clothes/thief-RightFoot.svg";

import warriorLeftFoot from "../../../assets/images/hero/female/clothes/warrior-LeftFoot.svg";
import warriorRightFoot from "../../../assets/images/hero/female/clothes/warrior-RightFoot.svg";

import wizardLeftFoot from "../../../assets/images/hero/female/clothes/wizard-LeftFoot.svg";
import wizardRightFoot from "../../../assets/images/hero/female/clothes/wizard-RightFoot.svg";

/* ADVANCED HEROES */
import paladinLeftFoot from "../../../assets/images/hero/female/clothes/advanced/paladin-LeftFoot.svg";
import paladinRightFoot from "../../../assets/images/hero/female/clothes/advanced/paladin-RightFoot.svg";
import darkKnightLeftFoot from "../../../assets/images/hero/female/clothes/advanced/darkKnight-LeftFoot.svg";
import darkKnightRightFoot from "../../../assets/images/hero/female/clothes/advanced/darkKnight-RightFoot.svg";
import summonerLeftFoot from "../../../assets/images/hero/female/clothes/advanced/summoner-LeftFoot.svg";
import summonerRightFoot from "../../../assets/images/hero/female/clothes/advanced/summoner-RightFoot.svg";
import ninjaLeftFoot from "../../../assets/images/hero/female/clothes/advanced/ninja-LeftFoot.svg";
import ninjaRightFoot from "../../../assets/images/hero/female/clothes/advanced/ninja-RightFoot.svg";

/* ELITE HEROES */
import dragoonLeftFoot from "../../../assets/images/hero/female/clothes/elite/dragoon-LeftFoot.svg";
import dragoonRightFoot from "../../../assets/images/hero/female/clothes/elite/dragoon-RightFoot.svg";
import sageLeftFoot from "../../../assets/images/hero/female/clothes/elite/sage-LeftFoot.svg";
import sageRightFoot from "../../../assets/images/hero/female/clothes/elite/sage-RightFoot.svg";

/* LEGENDARY HEROES */
import dreadKnightLeftFoot from "../../../assets/images/hero/female/clothes/legendary/dreadknight-LeftFoot.svg";
import dreadKnightRightFoot from "../../../assets/images/hero/female/clothes/legendary/dreadknight-RightFoot.svg";

interface GetClassInfoProps {
	leftFoot?: any;
	rightFoot?: any;
}

const getClassInfo = (mainClass: any): GetClassInfoProps => {
	switch (mainClass) {
		case "archer": {
			return {
				leftFoot: archerLeftFoot,
				rightFoot: archerRightFoot,
			};
		}
		case "knight": {
			return {
				leftFoot: knightLeftFoot,
				rightFoot: knightRightFoot,
			};
		}
		case "monk": {
			return {
				leftFoot: monkLeftFoot,
				rightFoot: monkRightFoot,
			};
		}
		case "pirate": {
			return {
				leftFoot: pirateLeftFoot,
				rightFoot: pirateRightFoot,
			};
		}
		case "priest": {
			return {
				leftFoot: priestLeftFoot,
				rightFoot: priestRightFoot,
			};
		}
		case "thief": {
			return {
				leftFoot: thiefLeftFoot,
				rightFoot: thiefRightFoot,
			};
		}
		case "warrior": {
			return {
				leftFoot: warriorLeftFoot,
				rightFoot: warriorRightFoot,
			};
		}
		case "wizard": {
			return {
				leftFoot: wizardLeftFoot,
				rightFoot: wizardRightFoot,
			};
		}
		case "paladin": {
			return {
				leftFoot: paladinLeftFoot,
				rightFoot: paladinRightFoot,
			};
		}
		case "darkKnight": {
			return {
				leftFoot: darkKnightLeftFoot,
				rightFoot: darkKnightRightFoot,
			};
		}
		case "summoner": {
			return {
				leftFoot: summonerLeftFoot,
				rightFoot: summonerRightFoot,
			};
		}
		case "ninja": {
			return {
				leftFoot: ninjaLeftFoot,
				rightFoot: ninjaRightFoot,
			};
		}
		case "dragoon": {
			return {
				leftFoot: dragoonLeftFoot,
				rightFoot: dragoonRightFoot,
			};
		}
		case "sage": {
			return {
				leftFoot: sageLeftFoot,
				rightFoot: sageRightFoot,
			};
		}
		case "dreadKnight": {
			return {
				leftFoot: dreadKnightLeftFoot,
				rightFoot: dreadKnightRightFoot,
			};
		}
		default: {
			return {};
		}
	}
};

const LeftFootFemale = ({ leftFoot, stroke }: any) => (
	<React.Fragment>
		<img src={leftFoot} className={styles.clothing} alt="" />
		<img src={FemaleLeftFootHighlight} className={styles.highlight} alt="" />
		<img src={FemaleLeftFootShadow} className={styles.shadow} alt="" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path stroke={stroke} d="M19 43h4M19 44h5" />
		</svg>
	</React.Fragment>
);

const RightFootFemale = ({ rightFoot, stroke }: any) => (
	<React.Fragment>
		<img src={rightFoot} className={styles.clothing} alt="" />
		<img src={FemaleRightFootHighlight} className={styles.highlight} alt="" />
		<img src={FemaleRightFootShadow} className={styles.shadow} alt="" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path stroke={stroke} d="M11 43h4M10 44h5" />
		</svg>
	</React.Fragment>
);

const FemaleFeet = ({ mainClass, stroke }: any) => {
	const classInfo = getClassInfo(mainClass);
	return (
		<>
			<div className={`${styles.heroFootRight} ${styles.bodyPart}`}>
				<RightFootFemale rightFoot={classInfo.rightFoot} stroke={stroke} />
			</div>
			<div className={`${styles.heroFootLeft} ${styles.bodyPart}`}>
				<LeftFootFemale leftFoot={classInfo.leftFoot} stroke={stroke} />
			</div>
		</>
	);
};

export default FemaleFeet;
