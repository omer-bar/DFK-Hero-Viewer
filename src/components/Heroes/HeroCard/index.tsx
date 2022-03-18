import React, { useState } from "react"; // useState
import styled from "styled-components";
import styles from "./styles.module.css";

// ------------ new features ----------------------
import { ChevronLeft, ChevronRight } from "react-feather";
// import { useDispatch, useSelector } from "features/hooks";
// import {
// 	setSelectedStatBoostHero,
// 	setShowSurvivorStatBoostModal,
// } from "features/journey/state";
// ------------ end of new features ---------------

import Hero from "../Hero";
import HeroInfo from "../HeroInfo";
import HeroStatsSkills from "../HeroStatsSkills";
import HeroStatsGrowth from "../HeroStatsGrowth";

import femaleIcon from "../../../assets/images/hero/icons/icon-female.png";
import maleIcon from "../../../assets/images/hero/icons/icon-male.png";

import fireIcon from "../../../assets/images/hero/icons/element-fire.png";
import waterIcon from "../../../assets/images/hero/icons/element-water.png";
import earthIcon from "../../../assets/images/hero/icons/element-earth.png";
import windIcon from "../../../assets/images/hero/icons/element-wind.png";
import lightningIcon from "../../../assets/images/hero/icons/element-lightning.png";
import iceIcon from "../../../assets/images/hero/icons/element-ice.png";
import lightIcon from "../../../assets/images/hero/icons/element-light.png";
import darkIcon from "../../../assets/images/hero/icons/element-dark.png";

import arcticIcon from "../../../assets/images/hero/icons/icon-arctic.png";
import cityIcon from "../../../assets/images/hero/icons/icon-city.png";
import desertIcon from "../../../assets/images/hero/icons/icon-desert.png";
import forestIcon from "../../../assets/images/hero/icons/icon-forest.png";
import islandIcon from "../../../assets/images/hero/icons/icon-island.png";
import mountainIcon from "../../../assets/images/hero/icons/icon-mountains.png";
import plainsIcon from "../../../assets/images/hero/icons/icon-plains.png";
import swampIcon from "../../../assets/images/hero/icons/icon-swamp.png";

import commonIcon from "../../../assets/images/hero/icons/rarity-common.png";
import uncommonIcon from "../../../assets/images/hero/icons/rarity-uncommon.png";
import rareIcon from "../../../assets/images/hero/icons/rarity-rare.png";
import legendaryIcon from "../../../assets/images/hero/icons/rarity-legendary.png";
import mythicIcon from "../../../assets/images/hero/icons/rarity-mythic.png";

import healthIcon from "../../../assets/images/hero/icons/icon-health.png";
import manaIcon from "../../../assets/images/hero/icons/icon-mana.png";

// new imports
import statsIcon from "../../../assets/images/hero/icons/stats-icon.png";
import growthIcon from "../../../assets/images/hero/icons/growth-icon.png";
import boostIcon from "../../../assets/images/gui/boost_reward_2x.png";
import survivorIcon from "../../../assets/images/gui/survivor_badge_2x.png";

interface HeroCardProps {
	isFlipped: boolean;
	hero: any;
	isAnimated?: boolean;
	isStatGrowth?: number;
}

/* exported component */
const HeroCard = ({
	isFlipped,
	hero,
	isAnimated,
	isStatGrowth,
}: HeroCardProps) => {
	const [dataPageIndex, setDataPageIndex] = useState(0);
	const [SelectedStatBoostHero, setSelectedStatBoostHero] = useState();
	const [ShowSurvivorStatBoostModal, setShowSurvivorStatBoostModal] = useState(
		false
	);

	const redirectToStatBoost = () => {
		setSelectedStatBoostHero(hero);
		setShowSurvivorStatBoostModal(true);
	};

	// Stats shown for newly summoned heroes that don't have all data available.
	let dataPages = [
		{
			label: "stats",
			icon: statsIcon,
			content: (
				<>
					<HeroStatsSkills hero={hero} />
					{hero && hero.owner.name && (
						<div className={styles.heroOwner}>Owned by: {hero.owner.name}</div>
					)}
					{hero && hero.owner.owner && (
						<div className={styles.heroHash}>{hero.owner.owner}</div>
					)}
				</>
			),
		},
	];

	let statSliders;

	// Stats shown for heroes when all data is available.
	if (hero.statGrowth && hero.statGrowth.primary) {
		dataPages = [
			{
				label: "stats",
				icon: statsIcon,
				content: (
					<>
						<HeroStatsSkills hero={hero} />
						{hero && hero.owner.name ? (
							<div className={styles.heroOwner}>
								Owned by: {hero.owner.name}
							</div>
						) : null}
						{hero && hero.owner.owner ? (
							<div className={styles.heroHash}>{hero.owner.owner}</div>
						) : null}
					</>
				),
			},
			{
				label: "growth",
				icon: growthIcon,
				content: <HeroStatsGrowth hero={hero} />,
			},
		];

		statSliders = (
			<>
				<div
					className={`${styles.sliderToggle} ${styles.sliderLeft}`}
					onClick={() => handleStatsSlide("left")}
				>
					<ChevronLeft />
				</div>

				<div
					className={`${styles.sliderToggle} ${styles.sliderRight}`}
					onClick={() => handleStatsSlide("right")}
				>
					<ChevronRight />
				</div>

				<div className={styles.statsToggle}>
					{dataPages.map((page, index) => {
						return (
							<div
								key={page.label}
								className={`${styles.statsToggleButton}`}
								onClick={() => setDataPageIndex(index)}
							>
								<div
									className={`${styles.statsToggleButtonImage} ${
										dataPages[dataPageIndex].label === page.label
											? styles.statsToggleButtonImageActive
											: "inactive"
									}`}
									style={{
										backgroundImage: `url(${page.icon})`,
									}}
								>
									&nbsp;
								</div>
								<span className={styles.tooltip}>{page.label}</span>
							</div>
						);
					})}
				</div>
			</>
		);
	}

	const handleStatsSlide = (stat: string) => {
		const pagesLength = dataPages.length;
		if (stat === "left") {
			if (dataPageIndex === 0) {
				setDataPageIndex(pagesLength - 1);
			} else {
				setDataPageIndex(dataPageIndex - 1);
			}
		}
		if (stat === "right") {
			if (dataPageIndex === pagesLength - 1) {
				setDataPageIndex(0);
			} else {
				setDataPageIndex(dataPageIndex + 1);
			}
		}
	};

	let toggle;

	if (isStatGrowth === 0) {
		toggle = dataPages[0].content;
	} else if (isStatGrowth === 1) {
		toggle = dataPages[1].content;
	} else {
		toggle = dataPages[dataPageIndex].content;
	}

	return (
		<>
			{hero && (
				<CardContainer key={hero.id}>
					<div
						className={`
          ${styles.heroCard}
          ${isAnimated && styles.animate}
          ${hero.shiny ? styles.shiny : ""}
          ${hero.shiny ? styles[`shiny${hero.shinyStyle}`] : ""}
          ${styles[`${hero.element}`]}
          ${styles[`${hero.rarity}`]}
          ${isFlipped ? styles.flipped : ""}
          `}
					>
						<div className={styles.heroCardFront}>
							{hero.pjstatus === "SURVIVED" && (
								<img
									className={styles.perilousJourneyIcon}
									src={survivorIcon}
									alt=""
								/>
							)}
							<div className={styles.heroID}>#{hero.id}</div>
							<div className={styles.heroHealth}>
								<img src={healthIcon} />
								{hero.stats.hp}
								<span className={styles.tooltip}>Health</span>
							</div>
							<div className={styles.heroMana}>
								<img src={manaIcon} />
								{hero.stats.mp}
								<span className={styles.tooltip}>Mana</span>
							</div>
							<div className={styles.heroCardFrame}>
								<div className={`${styles.specials} ${styles.row}`}>
									<div className={styles.icon}>
										{hero.element == "fire" && <img src={fireIcon} />}
										{hero.element == "water" && <img src={waterIcon} />}
										{hero.element == "earth" && <img src={earthIcon} />}
										{hero.element == "wind" && <img src={windIcon} />}
										{hero.element == "lightning" && <img src={lightningIcon} />}
										{hero.element == "ice" && <img src={iceIcon} />}
										{hero.element == "light" && <img src={lightIcon} />}
										{hero.element == "dark" && <img src={darkIcon} />}
										<span className={styles.tooltip}>{hero.element}</span>
									</div>
									<div className={styles.icon}>
										{hero.visualGenes.background == "arctic" && (
											<img src={arcticIcon} />
										)}
										{hero.visualGenes.background == "city" && (
											<img src={cityIcon} />
										)}
										{hero.visualGenes.background == "desert" && (
											<img src={desertIcon} />
										)}
										{hero.visualGenes.background == "forest" && (
											<img src={forestIcon} />
										)}
										{hero.visualGenes.background == "island" && (
											<img src={islandIcon} />
										)}
										{hero.visualGenes.background == "mountains" && (
											<img src={mountainIcon} />
										)}
										{hero.visualGenes.background == "plains" && (
											<img src={plainsIcon} />
										)}
										{hero.visualGenes.background == "swamp" && (
											<img src={swampIcon} />
										)}
										<span className={styles.tooltip}>{hero.background}</span>
									</div>
									<div className={styles.icon}>
										<img
											src={hero.gender == "female" ? femaleIcon : maleIcon}
										/>
										<span className={styles.tooltip}>{hero.gender}</span>
									</div>
								</div>

								<div className={styles.heroName}>
									<span>{hero.name}</span>
								</div>

								<div className={styles.heroPreview}>
									<div className={styles.heroGlow} />
									<Hero hero={hero} />
								</div>

								<div className={styles.heroInfo}>
									<div className={styles.class}>
										{hero.class}
										<span className={styles.subClass}>{hero.subClass}</span>
									</div>
									<div className={styles.cardRarity}>
										<div className={styles.icon}>
											{hero.rarity == "common" && <img src={commonIcon} />}
											{hero.rarity == "uncommon" && <img src={uncommonIcon} />}
											{hero.rarity == "rare" && <img src={rareIcon} />}
											{hero.rarity == "legendary" && (
												<img src={legendaryIcon} />
											)}
											{hero.rarity == "mythic" && <img src={mythicIcon} />}
											<span className={styles.tooltip}>{hero.rarity}</span>
										</div>
									</div>
									<div className={styles.level}>
										Level {hero.level}
										<span className={styles.subClass}>
											Gen {hero.generation}
										</span>
									</div>
								</div>

								<HeroInfo hero={hero} />
							</div>
						</div>
						<div className={styles.heroCardBack}>
							<div className={styles.heroCardFrame}>
								<div className={`${styles.specials} ${styles.row}`}>
									<div className={styles.icon}>
										{hero.element == "fire" && <img src={fireIcon} />}
										{hero.element == "water" && <img src={waterIcon} />}
										{hero.element == "earth" && <img src={earthIcon} />}
										{hero.element == "wind" && <img src={windIcon} />}
										{hero.element == "lightning" && <img src={lightningIcon} />}
										{hero.element == "ice" && <img src={iceIcon} />}
										{hero.element == "light" && <img src={lightIcon} />}
										{hero.element == "dark" && <img src={darkIcon} />}
										<span className={styles.tooltip}>{hero.element}</span>
									</div>
									<div className={styles.icon}>
										{hero.visualGenes.background == "arctic" && (
											<img src={arcticIcon} />
										)}
										{hero.visualGenes.background == "city" && (
											<img src={cityIcon} />
										)}
										{hero.visualGenes.background == "desert" && (
											<img src={desertIcon} />
										)}
										{hero.visualGenes.background == "forest" && (
											<img src={forestIcon} />
										)}
										{hero.visualGenes.background == "island" && (
											<img src={islandIcon} />
										)}
										{hero.visualGenes.background == "mountains" && (
											<img src={mountainIcon} />
										)}
										{hero.visualGenes.background == "plains" && (
											<img src={plainsIcon} />
										)}
										{hero.visualGenes.background == "swamp" && (
											<img src={swampIcon} />
										)}
										<span className={styles.tooltip}>{hero.background}</span>
									</div>
									<div className={styles.icon}>
										<img
											src={hero.gender == "female" ? femaleIcon : maleIcon}
										/>
										<span className={styles.tooltip}>{hero.gender}</span>
									</div>
								</div>

								<div className={styles.heroStats}>
									<div className={styles.heroFrame}>{toggle}</div>
								</div>
							</div>
							{statSliders}
						</div>
					</div>
				</CardContainer>
			)}
		</>
	);
};

export default React.memo(HeroCard);

// Styled Components
const CardContainer = styled.div.attrs((props) => ({
	className: "cardContainer",
}))`
	perspective: 1000px;
	width: 300px;
	height: 430px;
	margin: 0 auto;
`;
