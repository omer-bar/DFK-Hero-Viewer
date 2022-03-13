import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";
/* FEMALE ARMS */
import femaleLeftarmbtmhighlight from "../../../assets/images/hero/female/LeftArmBtm-highlight.svg";
import femaleLeftarmbtmshadow from "../../../assets/images/hero/female/LeftArmBtm-shadow.svg";
// import femaleLeftarmbtm from '../../../assets/images/hero/female/LeftArmBtm.svg'
import femaleLeftarmtophighlight from "../../../assets/images/hero/female/LeftArmTop-highlight.svg";
import femaleLeftarmtopshadow from "../../../assets/images/hero/female/LeftArmTop-shadow.svg";
// import femaleLeftarmtop from '../../../assets/images/hero/female/LeftArmTop.svg'

import femaleRightarmbtmhighlight from "../../../assets/images/hero/female/RightArmBtm-highlight.svg";
import femaleRightarmbtmshadow from "../../../assets/images/hero/female/RightArmBtm-shadow.svg";
// import femaleRightarmbtm from '../../../assets/images/hero/female/RightArmBtm.svg'
import femaleRightarmtophighlight from "../../../assets/images/hero/female/RightArmTop-highlight.svg";
import femaleRightarmtopshadow from "../../../assets/images/hero/female/RightArmTop-shadow.svg";
// import femaleRightarmtop from '../../../assets/images/hero/female/RightArmTop.svg'

import archerLeftArmTop from "../../../assets/images/hero/female/clothes/archer-LeftArmTop.svg";
import archerLeftArmBottom from "../../../assets/images/hero/female/clothes/archer-LeftArmBtm.svg";

import archerRightArmTop from "../../../assets/images/hero/female/clothes/archer-RightArmTop.svg";
import archerRightArmBottom from "../../../assets/images/hero/female/clothes/archer-RightArmBtm.svg";

import knightLeftArmTop from "../../../assets/images/hero/female/clothes/knight-LeftArmTop.svg";
import knightLeftArmBottom from "../../../assets/images/hero/female/clothes/knight-LeftArmBtm.svg";

import knightRightArmTop from "../../../assets/images/hero/female/clothes/knight-RightArmTop.svg";
import knightRightArmBottom from "../../../assets/images/hero/female/clothes/knight-RightArmBtm.svg";

import monkLeftArmTop from "../../../assets/images/hero/female/clothes/monk-LeftArmTop.svg";
import monkLeftArmBottom from "../../../assets/images/hero/female/clothes/monk-LeftArmBtm.svg";

import monkRightArmTop from "../../../assets/images/hero/female/clothes/monk-RightArmTop.svg";
import monkRightArmBottom from "../../../assets/images/hero/female/clothes/monk-RightArmBtm.svg";

import pirateLeftArmTop from "../../../assets/images/hero/female/clothes/pirate-LeftArmTop.svg";
import pirateLeftArmBottom from "../../../assets/images/hero/female/clothes/pirate-LeftArmBtm.svg";

import pirateRightArmTop from "../../../assets/images/hero/female/clothes/pirate-RightArmTop.svg";
import pirateRightArmBottom from "../../../assets/images/hero/female/clothes/pirate-RightArmBtm.svg";

import priestLeftArmTop from "../../../assets/images/hero/female/clothes/priest-LeftArmTop.svg";
import priestLeftArmBottom from "../../../assets/images/hero/female/clothes/priest-LeftArmBtm.svg";

import priestRightArmTop from "../../../assets/images/hero/female/clothes/priest-RightArmTop.svg";
import priestRightArmBottom from "../../../assets/images/hero/female/clothes/priest-RightArmBtm.svg";

import thiefLeftArmTop from "../../../assets/images/hero/female/clothes/thief-LeftArmTop.svg";
import thiefLeftArmBottom from "../../../assets/images/hero/female/clothes/thief-LeftArmBtm.svg";

import thiefRightArmTop from "../../../assets/images/hero/female/clothes/thief-RightArmTop.svg";
import thiefRightArmBottom from "../../../assets/images/hero/female/clothes/thief-RightArmBtm.svg";

import warriorLeftArmTop from "../../../assets/images/hero/female/clothes/warrior-LeftArmTop.svg";
import warriorLeftArmBottom from "../../../assets/images/hero/female/clothes/warrior-LeftArmBtm.svg";

import warriorRightArmTop from "../../../assets/images/hero/female/clothes/warrior-RightArmTop.svg";
import warriorRightArmBottom from "../../../assets/images/hero/female/clothes/warrior-RightArmBtm.svg";

import wizardLeftArmTop from "../../../assets/images/hero/female/clothes/wizard-LeftArmTop.svg";
import wizardLeftArmBottom from "../../../assets/images/hero/female/clothes/wizard-LeftArmBtm.svg";

import wizardRightArmTop from "../../../assets/images/hero/female/clothes/wizard-RightArmTop.svg";
import wizardRightArmBottom from "../../../assets/images/hero/female/clothes/wizard-RightArmBtm.svg";

import archerWeapon from "../../../assets/images/hero/female/weapons/archer-weapon.svg";
import knightWeapon from "../../../assets/images/hero/female/weapons/knight-weapon.svg";
import monkWeapon from "../../../assets/images/hero/female/weapons/monk-weapon.svg";
import pirateWeapon from "../../../assets/images/hero/female/weapons/pirate-weapon.svg";
import priestWeapon from "../../../assets/images/hero/female/weapons/priest-weapon.svg";
import thiefWeapon from "../../../assets/images/hero/female/weapons/thief-weapon.svg";
import warriorWeapon from "../../../assets/images/hero/female/weapons/warrior-weapon.svg";
import wizardWeapon from "../../../assets/images/hero/female/weapons/wizard-weapon.svg";

/* ADVANCED HEROES */
import paladinLeftArmTop from "../../../assets/images/hero/female/clothes/advanced/paladin-LeftArmTop.svg";
import paladinLeftArmBottom from "../../../assets/images/hero/female/clothes/advanced/paladin-LeftArmBtm.svg";

import paladinRightArmTop from "../../../assets/images/hero/female/clothes/advanced/paladin-RightArmTop.svg";
import paladinRightArmBottom from "../../../assets/images/hero/female/clothes/advanced/paladin-RightArmBtm.svg";

import darkKnightLeftArmTop from "../../../assets/images/hero/female/clothes/advanced/darkKnight-LeftArmTop.svg";
import darkKnightLeftArmBottom from "../../../assets/images/hero/female/clothes/advanced/darkKnight-LeftArmBtm.svg";

import darkKnightRightArmTop from "../../../assets/images/hero/female/clothes/advanced/darkKnight-RightArmTop.svg";
import darkKnightRightArmBottom from "../../../assets/images/hero/female/clothes/advanced/darkKnight-RightArmBtm.svg";

import summonerLeftArmTop from "../../../assets/images/hero/female/clothes/advanced/summoner-LeftArmTop.svg";
import summonerLeftArmBottom from "../../../assets/images/hero/female/clothes/advanced/summoner-LeftArmBtm.svg";

import summonerRightArmTop from "../../../assets/images/hero/female/clothes/advanced/summoner-RightArmTop.svg";
import summonerRightArmBottom from "../../../assets/images/hero/female/clothes/advanced/summoner-RightArmBtm.svg";

import ninjaLeftArmTop from "../../../assets/images/hero/female/clothes/advanced/ninja-LeftArmTop.svg";
import ninjaLeftArmBottom from "../../../assets/images/hero/female/clothes/advanced/ninja-LeftArmBtm.svg";

import ninjaRightArmTop from "../../../assets/images/hero/female/clothes/advanced/ninja-RightArmTop.svg";
import ninjaRightArmBottom from "../../../assets/images/hero/female/clothes/advanced/ninja-RightArmBtm.svg";

/* ELITE HEROES */
import dragoonLeftArmTop from "../../../assets/images/hero/female/clothes/elite/dragoon-LeftArmTop.svg";
import dragoonLeftArmBottom from "../../../assets/images/hero/female/clothes/elite/dragoon-LeftArmBtm.svg";

import dragoonRightArmTop from "../../../assets/images/hero/female/clothes/elite/dragoon-RightArmTop.svg";
import dragoonRightArmBottom from "../../../assets/images/hero/female/clothes/elite/dragoon-RightArmBtm.svg";

import sageLeftArmTop from "../../../assets/images/hero/female/clothes/elite/sage-LeftArmTop.svg";
import sageLeftArmBottom from "../../../assets/images/hero/female/clothes/elite/sage-LeftArmBtm.svg";

import sageRightArmTop from "../../../assets/images/hero/female/clothes/elite/sage-RightArmTop.svg";
import sageRightArmBottom from "../../../assets/images/hero/female/clothes/elite/sage-RightArmBtm.svg";

/* LEGENDARY HEROES */
import dreadKnightLeftArmTop from "../../../assets/images/hero/female/clothes/legendary/dreadknight-LeftArmTop.svg";
import dreadKnightLeftArmBottom from "../../../assets/images/hero/female/clothes/legendary/dreadknight-LeftArmBtm.svg";

import dreadKnightRightArmTop from "../../../assets/images/hero/female/clothes/legendary/dreadknight-RightArmTop.svg";
import dreadKnightRightArmBottom from "../../../assets/images/hero/female/clothes/legendary/dreadknight-RightArmBtm.svg";

import paladinWeapon from "../../../assets/images/hero/female/weapons/paladin-weapon.svg";
import darkKnightWeapon from "../../../assets/images/hero/female/weapons/darkKnight-weapon.svg";
import summonerWeapon from "../../../assets/images/hero/female/weapons/summoner-weapon.svg";
import ninjaWeapon from "../../../assets/images/hero/female/weapons/ninja-weapon.svg";
import dragoonWeapon from "../../../assets/images/hero/female/weapons/dragoon-weapon.svg";
import sageWeapon from "../../../assets/images/hero/female/weapons/sage-weapon.svg";
import dreadKnightWeapon from "../../../assets/images/hero/female/weapons/dreadknight-weapon.svg";

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

const RightArmTopFemale = ({
	armTop,
	armTopHighlight,
	armTopShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armTop} className={styles.clothing} alt="" />
		<img src={armTopHighlight} className={styles.highlight} alt="" />
		<img src={armTopShadow} className={styles.shadow} alt="" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M12 21h2M11 22h3M10 23h4M10 24h4M10 25h3M9 26h4M9 27h4M10 28h2"
			/>
		</svg>
	</React.Fragment>
);

const RightArmBtmFemale = ({
	armBtm,
	armBtmHighlight,
	armBtmShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armBtm} className={styles.clothing} alt="" />
		<img src={armBtmHighlight} className={styles.highlight} alt="" />
		<img src={armBtmShadow} className={styles.shadow} alt="" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M9 26h3M9 27h3M8 28h4M8 29h4M7 30h4M6 31h5M6 32h4M7 33h2"
			/>
		</svg>
	</React.Fragment>
);

const LeftArmTopFemale = ({
	armTop,
	armTopHighlight,
	armTopShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armTop} className={styles.clothing} alt="" />
		<img src={armTopHighlight} className={styles.highlight} alt="" />
		<img src={armTopShadow} className={styles.shadow} alt="" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M18 21h2M18 22h3M18 23h4M18 24h4M19 25h4M19 26h4M19 27h4M19 28h4"
			/>
		</svg>
	</React.Fragment>
);

const LeftArmBtmFemale = ({
	armBtm,
	armBtmHighlight,
	armBtmShadow,
	stroke,
}: any) => (
	<React.Fragment>
		<img src={armBtm} className={styles.clothing} alt="" />
		<img src={armBtmHighlight} className={styles.highlight} alt="" />
		<img src={armBtmShadow} className={styles.shadow} alt="" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M19 28h4M19 29h4M19 30h4M18 31h5M18 32h5M18 33h4M18 34h3"
			/>
		</svg>
	</React.Fragment>
);

const FemaleArms = ({ mainClass, stroke }: any) => {
	const classInfo = getClassInfo(mainClass);
	return (
		<>
			<div className={`${styles.heroRightArm} ${styles.bodyPart}`}>
				<div className={`${styles.heroArmRightTop} ${styles.bodyPart}`}>
					<RightArmTopFemale
						armTop={classInfo.rightArmTop}
						armTopShadow={femaleRightarmtopshadow}
						armTopHighlight={femaleRightarmtophighlight}
						stroke={stroke}
					/>
				</div>
				<div className={`${styles.heroArmRightBtm} ${styles.bodyPart}`}>
					<RightArmBtmFemale
						armBtm={classInfo.rightArmBottom}
						armBtmShadow={femaleRightarmbtmshadow}
						armBtmHighlight={femaleRightarmbtmhighlight}
						stroke={stroke}
					/>
					{mainClass !== "monk" && (
						<div className={styles.heroWeapon}>
							<img
								src={classInfo.classWeapon}
								className={styles.clothing}
								alt=""
							/>
						</div>
					)}
				</div>
			</div>
			<div className={`${styles.heroLeftArm} ${styles.bodyPart}`}>
				<div className={`${styles.heroArmLeftTop} ${styles.bodyPart}`}>
					<LeftArmTopFemale
						armTop={classInfo.leftArmTop}
						armTopShadow={femaleLeftarmtopshadow}
						armTopHighlight={femaleLeftarmtophighlight}
						stroke={stroke}
					/>
				</div>
				<div className={`${styles.heroArmLeftBtm} ${styles.bodyPart}`}>
					<LeftArmBtmFemale
						armBtm={classInfo.leftArmBotttom}
						armBtmShadow={femaleLeftarmbtmshadow}
						armBtmHighlight={femaleLeftarmbtmhighlight}
						stroke={stroke}
					/>
					{mainClass === "monk" && (
						<div className={styles.heroWeapon}>
							<img
								src={classInfo.classWeapon}
								className={styles.clothing}
								alt=""
							/>
						</div>
					)}
				</div>
			</div>
			{/* <div className={`${styles.heroRightArm} ${styles.bodyPart}`}>
        <div className={`${styles.heroArmRightTop} ${styles.bodyPart}`}>

        </div>
        <div className={`${styles.heroArmRightBtm} ${styles.bodyPart}`}>

          {mainClass !== 'monk' && (
            <div className={styles.heroWeapon}>
              <img src={currentWeapon} className={styles.clothing} />
            </div>
          )}
        </div>
      </div> */}
			{/* <div className={`${styles.heroLeftArm} ${styles.bodyPart}`}>
        <div className={`${styles.heroArmLeftTop} ${styles.bodyPart}`}>
          <LeftArmTopFemale stroke={stroke} />
        </div>
        <div className={`${styles.heroArmLeftBtm} ${styles.bodyPart}`}>
          <LeftArmBtmFemale stroke={stroke} />
          {mainClass === 'monk' && (
            <div className={styles.heroWeapon}>
              <img src={currentWeapon} className={styles.clothing} />
            </div>
          )}
        </div>
      </div> */}
		</>
	);
};

export default FemaleArms;
