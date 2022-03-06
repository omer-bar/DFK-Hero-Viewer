import React, { useCallback } from "react";
import styles from "../HeroCard/styles.module.css";
import styled from "styled-components";
import FemaleHair from "./femaleHair";
import MaleHair from "./maleHair";
import FemaleBody from "./femaleBody";
import MaleBody from "./maleBody";
import FemaleArms from "./femaleArms";
import MaleArms from "./maleArms";
import FemaleLegs from "./femaleLegs";
import MaleLegs from "./maleLegs";
import FemaleFeet from "./femaleFeet";
import MaleFeet from "./maleFeet";
import { HeadAppendage } from "./headAppendage";
import { BackAppendage } from "./backAppendage";
import HeroEyes from "./Eyes";

import FemaleHeadHighlight from "../../../assets/images/hero/female/Head-highlight.svg";
import FemaleHeadShadow from "../../../assets/images/hero/female/Head-shadow.svg";
import MaleHeadHighlight from "../../../assets/images/hero/male/Head-highlight.svg";
import MaleHeadShadow from "../../../assets/images/hero/male/Head-shadow.svg";
interface Props {
	stroke?: any;
	backId?: any;
	eyeColor?: any;
}
interface HeroProps {
	hero: any;
	noCard?: any;
	noGlow?: boolean;
	onClick?: Function;
}

const HeadFemale = ({ stroke }: Props) => (
	<React.Fragment>
		<img src={FemaleHeadHighlight} className={styles.highlight} />
		<img src={FemaleHeadShadow} className={styles.shadow} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className={styles.color}
		>
			<path
				stroke={stroke}
				d="M13 11h4M12 12h6M11 13h8M11 14h8M11 15h8M11 16h8M11 17h8M11 18h7M12 19h6M13 20h4"
			/>
		</svg>
	</React.Fragment>
);

const HeadMale = ({ stroke }: Props) => (
	<React.Fragment>
		<img src={MaleHeadHighlight} className={styles.highlight} />
		<img src={MaleHeadShadow} className={styles.shadow} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 30 45"
			shapeRendering="crispEdges"
			className="current"
		>
			<path
				stroke={stroke}
				d="M13 10h5M12 11h7M11 12h9M11 13h9M11 14h9M11 15h9M11 16h9M11 17h8M12 18h6M13 19h4"
			/>
		</svg>
	</React.Fragment>
);

interface HeroWrapperProps {
	hover?: boolean;
}
const HeroWrapper = styled.div`
	${({ hover }: HeroWrapperProps) =>
		hover
			? `
&:hover {
  cursor: pointer;
}
`
			: ""}
`;

/* exported component */
const Hero = ({ hero, noCard, onClick }: HeroProps) => {
	const onHeroClick = useCallback(() => {
		onClick && onClick(hero);
	}, [onClick, hero]);
	return (
		<>
			<HeroWrapper
				onClick={onHeroClick}
				hover={!!onClick}
				className={`${noCard ? "" : styles.heroFrame} ${
					noCard ? "" : styles[`${hero.background}`]
				} ${styles[`${hero.class}`]} ${styles[`${hero.gender}`]}`}
			>
				<div className={styles.heroContainer}>
					<div className={styles.heroHeadContainer}>
						{hero.gender == "female" && (
							<FemaleHair
								hairId={hero.visualGenes.hairStyle}
								hairColor={hero.visualGenes.hairColor}
							/>
						)}

						{hero.gender === "male" && (
							<MaleHair
								hairId={hero.visualGenes.hairStyle}
								hairColor={hero.visualGenes.hairColor}
							/>
						)}

						<div className={styles.heroEyes}>
							<HeroEyes eyeColor={hero.visualGenes.eyeColor} />
						</div>
						<div className={`${styles.heroHead} ${styles.bodyPart}`}>
							{hero.gender === "female" && (
								<HeadFemale stroke={`#${hero.visualGenes.skinColor}`} />
							)}
							{hero.gender === "male" && (
								<HeadMale stroke={`#${hero.visualGenes.skinColor}`} />
							)}
						</div>
						<HeadAppendage
							headId={hero.visualGenes.headAppendage}
							stroke={`#${hero.visualGenes.appendageColor}`}
						/>
					</div>

					{hero.gender === "female" && (
						<FemaleBody
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}
					{hero.gender === "male" && (
						<MaleBody
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}

					{hero.gender === "female" && (
						<FemaleArms
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}
					{hero.gender === "male" && (
						<MaleArms
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}

					{hero.gender === "female" && (
						<FemaleLegs
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}
					{hero.gender === "male" && (
						<MaleLegs
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}

					{hero.gender === "female" && (
						<FemaleFeet
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}
					{hero.gender === "male" && (
						<MaleFeet
							stroke={`#${hero.visualGenes.skinColor}`}
							mainClass={hero.class}
						/>
					)}

					<BackAppendage
						backId={hero.visualGenes.backAppendage}
						stroke={`#${hero.visualGenes.backAppendageColor}`}
					/>
				</div>
			</HeroWrapper>
		</>
	);
};

export default React.memo(Hero);
