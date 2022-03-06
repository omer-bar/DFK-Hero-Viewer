import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

/* MALE ARMS */
import maleLeftarmbtmhighlight from "../../../assets/images/hero/male/LeftArmBtm-highlight.svg";
import maleLeftarmbtmshadow from "../../../assets/images/hero/male/LeftArmBtm-shadow.svg";
// import maleLeftarmbtm from '../../../assets/images/hero/male/LeftArmBtm.svg'
import maleLeftarmtophighlight from "../../../assets/images/hero/male/LeftArmTop-highlight.svg";
import maleLeftarmtopshadow from "../../../assets/images/hero/male/LeftArmTop-shadow.svg";
// import maleLeftarmtop from '../../../assets/images/hero/male/LeftArmTop.svg'

import maleRightarmbtmhighlight from "../../../assets/images/hero/male/RightArmBtm-highlight.svg";
import maleRightarmbtmshadow from "../../../assets/images/hero/male/RightArmBtm-shadow.svg";
// import maleRightarmbtm from '../../../assets/images/hero/male/RightArmBtm.svg'
import maleRightarmtophighlight from "../../../assets/images/hero/male/RightArmTop-highlight.svg";
import maleRightarmtopshadow from "../../../assets/images/hero/male/RightArmTop-shadow.svg";
// import maleRightarmtop from '../../../assets/images/hero/male/RightArmTop.svg'

import archerLeftArmTop from "../../../assets/images/hero/male/clothes/archer-LeftArmTop.svg";
import archerLeftArmBottom from "../../../assets/images/hero/male/clothes/archer-LeftArmBtm.svg";

import archerRightArmTop from "../../../assets/images/hero/male/clothes/archer-RightArmTop.svg";
import archerRightArmBottom from "../../../assets/images/hero/male/clothes/archer-RightArmBtm.svg";

import knightLeftArmTop from "../../../assets/images/hero/male/clothes/knight-LeftArmTop.svg";
import knightLeftArmBottom from "../../../assets/images/hero/male/clothes/knight-LeftArmBtm.svg";

import knightRightArmTop from "../../../assets/images/hero/male/clothes/knight-RightArmTop.svg";
import knightRightArmBottom from "../../../assets/images/hero/male/clothes/knight-RightArmBtm.svg";

import monkLeftArmTop from "../../../assets/images/hero/male/clothes/monk-LeftArmTop.svg";
import monkLeftArmBottom from "../../../assets/images/hero/male/clothes/monk-LeftArmBtm.svg";

import monkRightArmTop from "../../../assets/images/hero/male/clothes/monk-RightArmTop.svg";
import monkRightArmBottom from "../../../assets/images/hero/male/clothes/monk-RightArmBtm.svg";

import pirateLeftArmTop from "../../../assets/images/hero/male/clothes/pirate-LeftArmTop.svg";
import pirateLeftArmBottom from "../../../assets/images/hero/male/clothes/pirate-LeftArmBtm.svg";

import pirateRightArmTop from "../../../assets/images/hero/male/clothes/pirate-RightArmTop.svg";
import pirateRightArmBottom from "../../../assets/images/hero/male/clothes/pirate-RightArmBtm.svg";

import priestLeftArmTop from "../../../assets/images/hero/male/clothes/priest-LeftArmTop.svg";
import priestLeftArmBottom from "../../../assets/images/hero/male/clothes/priest-LeftArmBtm.svg";

import priestRightArmTop from "../../../assets/images/hero/male/clothes/priest-RightArmTop.svg";
import priestRightArmBottom from "../../../assets/images/hero/male/clothes/priest-RightArmBtm.svg";

import thiefLeftArmTop from "../../../assets/images/hero/male/clothes/thief-LeftArmTop.svg";
import thiefLeftArmBottom from "../../../assets/images/hero/male/clothes/thief-LeftArmBtm.svg";

import thiefRightArmTop from "../../../assets/images/hero/male/clothes/thief-RightArmTop.svg";
import thiefRightArmBottom from "../../../assets/images/hero/male/clothes/thief-RightArmBtm.svg";

import warriorLeftArmTop from "../../../assets/images/hero/male/clothes/warrior-LeftArmTop.svg";
import warriorLeftArmBottom from "../../../assets/images/hero/male/clothes/warrior-LeftArmBtm.svg";

import warriorRightArmTop from "../../../assets/images/hero/male/clothes/warrior-RightArmTop.svg";
import warriorRightArmBottom from "../../../assets/images/hero/male/clothes/warrior-RightArmBtm.svg";

import wizardLeftArmTop from "../../../assets/images/hero/male/clothes/wizard-LeftArmTop.svg";
import wizardLeftArmBottom from "../../../assets/images/hero/male/clothes/wizard-LeftArmBtm.svg";

import wizardRightArmTop from "../../../assets/images/hero/male/clothes/wizard-RightArmTop.svg";
import wizardRightArmBottom from "../../../assets/images/hero/male/clothes/wizard-RightArmBtm.svg";

import archerWeapon from "../../../assets/images/hero/male/weapons/archer-weapon.svg";
import knightWeapon from "../../../assets/images/hero/male/weapons/knight-weapon.svg";
import monkWeapon from "../../../assets/images/hero/male/weapons/monk-weapon.svg";
import pirateWeapon from "../../../assets/images/hero/male/weapons/pirate-weapon.svg";
import priestWeapon from "../../../assets/images/hero/male/weapons/priest-weapon.svg";
import thiefWeapon from "../../../assets/images/hero/male/weapons/thief-weapon.svg";
import warriorWeapon from "../../../assets/images/hero/male/weapons/warrior-weapon.svg";
import wizardWeapon from "../../../assets/images/hero/male/weapons/wizard-weapon.svg";

/* ADVANCED HEROES */
import paladinLeftArmTop from "../../../assets/images/hero/male/clothes/advanced/paladin-LeftArmTop.svg";
import paladinLeftArmBottom from "../../../assets/images/hero/male/clothes/advanced/paladin-LeftArmBtm.svg";

import paladinRightArmTop from "../../../assets/images/hero/male/clothes/advanced/paladin-RightArmTop.svg";
import paladinRightArmBottom from "../../../assets/images/hero/male/clothes/advanced/paladin-RightArmBtm.svg";

import darkKnightLeftArmTop from "../../../assets/images/hero/male/clothes/advanced/darkKnight-LeftArmTop.svg";
import darkKnightLeftArmBottom from "../../../assets/images/hero/male/clothes/advanced/darkKnight-LeftArmBtm.svg";

import darkKnightRightArmTop from "../../../assets/images/hero/male/clothes/advanced/darkKnight-RightArmTop.svg";
import darkKnightRightArmBottom from "../../../assets/images/hero/male/clothes/advanced/darkKnight-RightArmBtm.svg";

import summonerLeftArmTop from "../../../assets/images/hero/male/clothes/advanced/summoner-LeftArmTop.svg";
import summonerLeftArmBottom from "../../../assets/images/hero/male/clothes/advanced/summoner-LeftArmBtm.svg";

import summonerRightArmTop from "../../../assets/images/hero/male/clothes/advanced/summoner-RightArmTop.svg";
import summonerRightArmBottom from "../../../assets/images/hero/male/clothes/advanced/summoner-RightArmBtm.svg";

import ninjaLeftArmTop from "../../../assets/images/hero/male/clothes/advanced/ninja-LeftArmTop.svg";
import ninjaLeftArmBottom from "../../../assets/images/hero/male/clothes/advanced/ninja-LeftArmBtm.svg";

import ninjaRightArmTop from "../../../assets/images/hero/male/clothes/advanced/ninja-RightArmTop.svg";
import ninjaRightArmBottom from "../../../assets/images/hero/male/clothes/advanced/ninja-RightArmBtm.svg";

/* ELITE HEROES */
import dragoonLeftArmTop from "../../../assets/images/hero/male/clothes/elite/dragoon-LeftArmTop.svg";
import dragoonLeftArmBottom from "../../../assets/images/hero/male/clothes/elite/dragoon-LeftArmBtm.svg";

import dragoonRightArmTop from "../../../assets/images/hero/male/clothes/elite/dragoon-RightArmTop.svg";
import dragoonRightArmBottom from "../../../assets/images/hero/male/clothes/elite/dragoon-RightArmBtm.svg";

import sageLeftArmTop from "../../../assets/images/hero/male/clothes/elite/sage-LeftArmTop.svg";
import sageLeftArmBottom from "../../../assets/images/hero/male/clothes/elite/sage-LeftArmBtm.svg";

import sageRightArmTop from "../../../assets/images/hero/male/clothes/elite/sage-RightArmTop.svg";
import sageRightArmBottom from "../../../assets/images/hero/male/clothes/elite/sage-RightArmBtm.svg";

/* LEGENDARY HEROES */
import dreadKnightLeftArmTop from "../../../assets/images/hero/male/clothes/legendary/dreadknight-LeftArmTop.svg";
import dreadKnightLeftArmBottom from "../../../assets/images/hero/male/clothes/legendary/dreadknight-LeftArmBtm.svg";

import dreadKnightRightArmTop from "../../../assets/images/hero/male/clothes/legendary/dreadknight-RightArmTop.svg";
import dreadKnightRightArmBottom from "../../../assets/images/hero/male/clothes/legendary/dreadknight-RightArmBtm.svg";

import paladinWeapon from "../../../assets/images/hero/male/weapons/paladin-weapon.svg";
import darkKnightWeapon from "../../../assets/images/hero/male/weapons/darkKnight-weapon.svg";
import summonerWeapon from "../../../assets/images/hero/male/weapons/summoner-weapon.svg";
import ninjaWeapon from "../../../assets/images/hero/male/weapons/ninja-weapon.svg";
import dragoonWeapon from "../../../assets/images/hero/male/weapons/dragoon-weapon.svg";
import sageWeapon from "../../../assets/images/hero/male/weapons/sage-weapon.svg";
import dreadKnightWeapon from "../../../assets/images/hero/male/weapons/dreadknight-weapon.svg";

interface GetClassInfoProps {
	classWeapon?: any;
	rightArmTop?: any;
	rightArmBottom?: any;
	leftArmTop?: any;
	leftArmBotttom?: any;
}

const getClassInfo = (mainClass: any): GetClassInfoProps => {
	switch (mainClass) {
		case "archer": {
			return {
				classWeapon: archerWeapon,
				rightArmTop: archerRightArmTop,
				rightArmBottom: archerRightArmBottom,
				leftArmTop: archerLeftArmTop,
				leftArmBotttom: archerLeftArmBottom,
			};
		}
		case "knight": {
			return {
				classWeapon: knightWeapon,
				rightArmTop: knightRightArmTop,
				rightArmBottom: knightRightArmBottom,
				leftArmTop: knightLeftArmTop,
				leftArmBotttom: knightLeftArmBottom,
			};
		}
		case "monk": {
			return {
				classWeapon: monkWeapon,
				rightArmTop: monkRightArmTop,
				rightArmBottom: monkRightArmBottom,
				leftArmTop: monkLeftArmTop,
				leftArmBotttom: monkLeftArmBottom,
			};
		}
		case "pirate": {
			return {
				classWeapon: pirateWeapon,
				rightArmTop: pirateRightArmTop,
				rightArmBottom: pirateRightArmBottom,
				leftArmTop: pirateLeftArmTop,
				leftArmBotttom: pirateLeftArmBottom,
			};
		}
		case "priest": {
			return {
				classWeapon: priestWeapon,
				rightArmTop: priestRightArmTop,
				rightArmBottom: priestRightArmBottom,
				leftArmTop: priestLeftArmTop,
				leftArmBotttom: priestLeftArmBottom,
			};
		}
		case "thief": {
			return {
				classWeapon: thiefWeapon,
				rightArmTop: thiefRightArmTop,
				rightArmBottom: thiefRightArmBottom,
				leftArmTop: thiefLeftArmTop,
				leftArmBotttom: thiefLeftArmBottom,
			};
		}
		case "warrior": {
			return {
				classWeapon: warriorWeapon,
				rightArmTop: warriorRightArmTop,
				rightArmBottom: warriorRightArmBottom,
				leftArmTop: warriorLeftArmTop,
				leftArmBotttom: warriorLeftArmBottom,
			};
		}
		case "wizard": {
			return {
				classWeapon: wizardWeapon,
				rightArmTop: wizardRightArmTop,
				rightArmBottom: wizardRightArmBottom,
				leftArmTop: wizardLeftArmTop,
				leftArmBotttom: wizardLeftArmBottom,
			};
		}
		case "paladin": {
			return {
				classWeapon: paladinWeapon,
				rightArmTop: paladinRightArmTop,
				rightArmBottom: paladinRightArmBottom,
				leftArmTop: paladinLeftArmTop,
				leftArmBotttom: paladinLeftArmBottom,
			};
		}
		case "darkKnight": {
			return {
				classWeapon: darkKnightWeapon,
				rightArmTop: darkKnightRightArmTop,
				rightArmBottom: darkKnightRightArmBottom,
				leftArmTop: darkKnightLeftArmTop,
				leftArmBotttom: darkKnightLeftArmBottom,
			};
		}
		case "summoner": {
			return {
				classWeapon: summonerWeapon,
				rightArmTop: summonerRightArmTop,
				rightArmBottom: summonerRightArmBottom,
				leftArmTop: summonerLeftArmTop,
				leftArmBotttom: summonerLeftArmBottom,
			};
		}
		case "ninja": {
			return {
				classWeapon: ninjaWeapon,
				rightArmTop: ninjaRightArmTop,
				rightArmBottom: ninjaRightArmBottom,
				leftArmTop: ninjaLeftArmTop,
				leftArmBotttom: ninjaLeftArmBottom,
			};
		}
		case "dragoon": {
			return {
				classWeapon: dragoonWeapon,
				rightArmTop: dragoonRightArmTop,
				rightArmBottom: dragoonRightArmBottom,
				leftArmTop: dragoonLeftArmTop,
				leftArmBotttom: dragoonLeftArmBottom,
			};
		}
		case "sage": {
			return {
				classWeapon: sageWeapon,
				rightArmTop: sageRightArmTop,
				rightArmBottom: sageRightArmBottom,
				leftArmTop: sageLeftArmTop,
				leftArmBotttom: sageLeftArmBottom,
			};
		}
		case "dreadKnight": {
			return {
				classWeapon: dreadKnightWeapon,
				rightArmTop: dreadKnightRightArmTop,
				rightArmBottom: dreadKnightRightArmBottom,
				leftArmTop: dreadKnightLeftArmTop,
				leftArmBotttom: dreadKnightLeftArmBottom,
			};
		}
		default: {
			return {};
		}
	}
};

const RightArmTopMale = ({
	armTop,
	armTopHighlight,
	armTopShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armTop} className={styles.clothing} />
		<img src={armTopHighlight} className={styles.highlight} />
		<img src={armTopShadow} className={styles.shadow} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M11 19h2M10 20h3M10 21h3M10 22h3M10 23h3M10 24h3M10 25h3M10 26h3M10 27h3M11 28h1"
			/>
		</svg>
	</React.Fragment>
);

const RightArmBtmMale = ({
	armBtm,
	armBtmHighlight,
	armBtmShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armBtm} className={styles.clothing} />
		<img src={armBtmHighlight} className={styles.highlight} />
		<img src={armBtmShadow} className={styles.shadow} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M10 26h2M9 27h3M8 28h4M7 29h5M7 30h4M7 31h4M8 32h2"
			/>
		</svg>
	</React.Fragment>
);

const LeftArmTopMale = ({
	armTop,
	armTopHighlight,
	armTopShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armTop} className={styles.clothing} />
		<img src={armTopHighlight} className={styles.highlight} />
		<img src={armTopShadow} className={styles.shadow} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M18 19h2M18 20h3M18 21h4M19 22h3M19 23h4M19 24h4M19 25h4M19 26h4M19 27h4"
			/>
		</svg>
	</React.Fragment>
);

const LeftArmBtmMale = ({
	armBtm,
	armBtmHighlight,
	armBtmShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armBtm} className={styles.clothing} />
		<img src={armBtmHighlight} className={styles.highlight} />
		<img src={armBtmShadow} className={styles.shadow} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M21 26h3M19 27h5M19 28h6M19 29h6M19 30h6M19 31h6M20 32h4M20 33h2"
			/>
		</svg>
	</React.Fragment>
);

const MaleArms = ({ mainClass, stroke }: any) => {
	const classInfo = getClassInfo(mainClass);
	return (
		<>
			<div className={`${styles.heroRightArm} ${styles.bodyPart}`}>
				<div className={`${styles.heroArmRightTop} ${styles.bodyPart}`}>
					<RightArmTopMale
						armTop={classInfo.rightArmTop}
						armTopShadow={maleRightarmtopshadow}
						armTopHighlight={maleRightarmtophighlight}
						stroke={stroke}
					/>
				</div>
				<div className={`${styles.heroArmRightBtm} ${styles.bodyPart}`}>
					<RightArmBtmMale
						armBtm={classInfo.rightArmBottom}
						armBtmShadow={maleRightarmbtmshadow}
						armBtmHighlight={maleRightarmbtmhighlight}
						stroke={stroke}
					/>
					{mainClass != "monk" && (
						<div className={styles.heroWeapon}>
							<img src={classInfo.classWeapon} className={styles.clothing} />
						</div>
					)}
				</div>
			</div>
			<div className={`${styles.heroLeftArm} ${styles.bodyPart}`}>
				<div className={`${styles.heroArmLeftTop} ${styles.bodyPart}`}>
					<LeftArmTopMale
						armTop={classInfo.leftArmTop}
						armTopShadow={maleLeftarmtopshadow}
						armTopHighlight={maleLeftarmtophighlight}
						stroke={stroke}
					/>
				</div>
				<div className={`${styles.heroArmLeftBtm} ${styles.bodyPart}`}>
					<LeftArmBtmMale
						armBtm={classInfo.leftArmBotttom}
						armBtmShadow={maleLeftarmbtmshadow}
						armBtmHighlight={maleLeftarmbtmhighlight}
						stroke={stroke}
					/>
					{mainClass == "monk" && (
						<div className={styles.heroWeapon}>
							<img src={classInfo.classWeapon} className={styles.clothing} />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default MaleArms;
