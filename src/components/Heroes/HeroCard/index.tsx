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
}

/* exported component */
const HeroCard = ({ isFlipped, hero, isAnimated }: HeroCardProps) => {
	return (
		<>
			{hero && (
				<CardContainer key={hero.id}>
					<div
						className={`
          ${styles.heroCard}
          ${isAnimated && styles.animate}
          ${hero.visual.shiny ? styles.shiny : ""}
          ${hero.visual.shiny ? styles[`shiny${hero.visual.shinyStyle}`] : ""}
          ${styles[`${hero.element}`]}
          ${styles[`${hero.rarity}`]}
          ${isFlipped ? styles.flipped : ""}
          `}
					>
						<div className={styles.heroCardFront}>
							<div className={styles.heroID}>#{hero.id}</div>
							<div className={styles.heroHealth}>
								<img src={healthIcon} alt="" />
								{hero.stats.hp}
								<span className={styles.tooltip}>Health</span>
							</div>
							<div className={styles.heroMana}>
								<img src={manaIcon} alt="" />
								{hero.stats.mp}
								<span className={styles.tooltip}>Mana</span>
							</div>
							<div className={styles.heroCardFrame}>
								{hero.pjstatus === "SURVIVED" && (
									<img
										className={styles.perilousJourneyIcon}
										src={survivorIcon}
										alt=""
									/>
								)}
								<div className={`${styles.specials} ${styles.row}`}>
									<div className={styles.icon}>
										{hero.element === "fire" && <img src={fireIcon} alt="" />}
										{hero.element === "water" && <img src={waterIcon} alt="" />}
										{hero.element === "earth" && <img src={earthIcon} alt="" />}
										{hero.element === "wind" && <img src={windIcon} alt="" />}
										{hero.element === "lightning" && (
											<img src={lightningIcon} alt="" />
										)}
										{hero.element === "ice" && <img src={iceIcon} alt="" />}
										{hero.element === "light" && <img src={lightIcon} alt="" />}
										{hero.element === "dark" && <img src={darkIcon} alt="" />}
										<span className={styles.tooltip}>{hero.element}</span>
									</div>
									<div className={styles.icon}>
										{hero.visualGenes.background === "arctic" && (
											<img src={arcticIcon} alt="" />
										)}
										{hero.visualGenes.background === "city" && (
											<img src={cityIcon} alt="" />
										)}
										{hero.visualGenes.background === "desert" && (
											<img src={desertIcon} alt="" />
										)}
										{hero.visualGenes.background === "forest" && (
											<img src={forestIcon} alt="" />
										)}
										{hero.visualGenes.background === "island" && (
											<img src={islandIcon} alt="" />
										)}
										{hero.visualGenes.background === "mountains" && (
											<img src={mountainIcon} alt="" />
										)}
										{hero.visualGenes.background === "plains" && (
											<img src={plainsIcon} alt="" />
										)}
										{hero.visualGenes.background === "swamp" && (
											<img src={swampIcon} alt="" />
										)}
										<span className={styles.tooltip}>{hero.background}</span>
									</div>
									<div className={styles.icon}>
										<img
											src={hero.gender === "female" ? femaleIcon : maleIcon}
											alt=""
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
											{hero.rarity === "common" && (
												<img src={commonIcon} alt="" />
											)}
											{hero.rarity === "uncommon" && (
												<img src={uncommonIcon} alt="" />
											)}
											{hero.rarity === "rare" && <img src={rareIcon} alt="" />}
											{hero.rarity === "legendary" && (
												<img src={legendaryIcon} alt="" />
											)}
											{hero.rarity === "mythic" && (
												<img src={mythicIcon} alt="" />
											)}
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
										{hero.element === "fire" && <img src={fireIcon} alt="" />}
										{hero.element === "water" && <img src={waterIcon} alt="" />}
										{hero.element === "earth" && <img src={earthIcon} alt="" />}
										{hero.element === "wind" && <img src={windIcon} alt="" />}
										{hero.element === "lightning" && (
											<img src={lightningIcon} alt="" />
										)}
										{hero.element === "ice" && <img src={iceIcon} alt="" />}
										{hero.element === "light" && <img src={lightIcon} alt="" />}
										{hero.element === "dark" && <img src={darkIcon} alt="" />}
										<span className={styles.tooltip}>{hero.element}</span>
									</div>
									<div className={styles.icon}>
										{hero.visualGenes.background === "arctic" && (
											<img src={arcticIcon} alt="" />
										)}
										{hero.visualGenes.background === "city" && (
											<img src={cityIcon} alt="" />
										)}
										{hero.visualGenes.background === "desert" && (
											<img src={desertIcon} alt="" />
										)}
										{hero.visualGenes.background === "forest" && (
											<img src={forestIcon} alt="" />
										)}
										{hero.visualGenes.background === "island" && (
											<img src={islandIcon} alt="" />
										)}
										{hero.visualGenes.background === "mountains" && (
											<img src={mountainIcon} alt="" />
										)}
										{hero.visualGenes.background === "plains" && (
											<img src={plainsIcon} alt="" />
										)}
										{hero.visualGenes.background === "swamp" && (
											<img src={swampIcon} alt="" />
										)}
										<span className={styles.tooltip}>{hero.background}</span>
									</div>
									<div className={styles.icon}>
										<img
											src={hero.gender === "female" ? femaleIcon : maleIcon}
											alt=""
										/>
										<span className={styles.tooltip}>{hero.gender}</span>
									</div>
								</div>

								<div className={styles.heroStats}>
									<div className={styles.heroFrame}>
										<HeroStatsSkills hero={hero} />

										{hero && hero.ownerName ? (
											<div className={styles.heroOwner}>
												Owned by: {hero.ownerName}
											</div>
										) : null}
										{hero && hero.ownerHash ? (
											<div className={styles.heroHash}>{hero.ownerHash}</div>
										) : null}
									</div>
								</div>
							</div>
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
