import React from "react"; // useState
import styled from "styled-components";
import styles from "./styles.module.css";

import Hero from "../Hero";
import HeroInfo from "../HeroInfo/index";
import HeroStatsSkills from "../HeroStatsSkills/index";

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

interface HeroCardProps {
	isFlipped: boolean;
	hero: any;
	isAnimated?: boolean;
}

// Styled Components
const CardContainer = styled.div.attrs((props) => ({
	className: "cardContainer",
}))`
	perspective: 1000px;
	width: 300px;
	height: 430px;
	margin: 0 auto;
`;

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
