import React from "react";
import { MouseoverTooltip } from "../../Tooltip";
import { DateTime } from "luxon";
import { calculateRequiredXp } from "./utils/heroes";
import { calculateRemainingStamina } from "../utils/staminaCalculations";
import styles from "../HeroCard/styles.module.css";

interface HeroInfoProps {
	hero: any;
}

const HeroInfo = ({ hero }: HeroInfoProps) => {
	const remainingStamina = calculateRemainingStamina(hero);
	const staminaPercentage = (remainingStamina / hero.stats.stamina) * 100;
	const currentTime = DateTime.fromJSDate(new Date());
	const staminaFullAt =
		hero.staminaFullAt && DateTime.fromJSDate(new Date(hero.staminaFullAt));

	let staminaFullAtString = "Full " + staminaFullAt.toRelative();
	if (!staminaFullAt || staminaFullAt <= currentTime) {
		staminaFullAtString = "Full";
	}
	const tooltips: Record<string, string> = {
		staminaFullAtString: staminaFullAtString,
	};
	const summonPercentage =
		hero.generation == 0
			? 100
			: hero.maxSummons == 0
			? 0
			: ((hero.maxSummons - hero.summons) / hero.maxSummons) * 100;
	const xpNextLevel = calculateRequiredXp(hero.level);
	const xpPercentage = (hero.xp / xpNextLevel) * 100;

	return (
		<>
			<div className={styles.heroStats}>
				<div className={styles.heroFrame}>
					<div className={`${styles.statSummons} ${styles.row}`}>
						Summons
						<div className={styles.bar}>
							<div
								className={styles.summonsBar}
								style={{
									width:
										(summonPercentage <= 100 ? summonPercentage : 100) + "%",
								}}
							></div>
						</div>
						<div className={`${styles.summonsAmount} ${styles.amount}`}>
							{/* {hero.summons}/{hero.summons} */}
							{hero.generation === 0 ? (
								<div style={{ display: "flex", alignItems: "center" }}>
									<span style={{ fontSize: "8px" }}>{hero.summons + "/"}</span>
									<span style={{ fontSize: "16px" }}>&infin;</span>
								</div>
							) : (
								`${hero.maxSummons - hero.summons}/${hero.maxSummons}`
							)}
						</div>
					</div>
					<div className={`${styles.statStaminaWrapper}`}>
						<MouseoverTooltip text={tooltips.staminaFullAtString}>
							<div className={`${styles.statStamina} ${styles.row}`}>
								Stamina
								<div className={styles.bar}>
									<div
										className={styles.staminaBar}
										style={{
											width:
												(staminaPercentage <= 100 ? staminaPercentage : 100) +
												"%",
										}}
									>
										{staminaPercentage < 100 && (
											<div className={styles.staminaLoading} />
										)}
									</div>
								</div>
								<div className={`${styles.staminaAmount} ${styles.amount}`}>
									{remainingStamina}/{hero.stats.stamina}
								</div>
							</div>
						</MouseoverTooltip>
					</div>
					<div className={`${styles.statXp} ${styles.row}`}>
						XP
						<div className={styles.bar}>
							<div
								className={styles.xpBar}
								style={{
									width: xpPercentage <= 100 ? xpPercentage + "%" : 100 + "%",
								}}
							/>
						</div>
						<div className={`${styles.xpAmount} ${styles.amount}`}>
							{hero.xp}/{xpNextLevel}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(HeroInfo);
