import React from "react";
import styles from "../HeroCard/styles.module.css";

interface GrowthStatProps {
	stat: { value: string; label: string; abbr: string };
	hero: any;
	position: "primary" | "secondary";
	labelType: "abbr" | "full";
}

const GrowthStat = ({ hero, stat, position, labelType }: GrowthStatProps) => {
	return (
		<div>
			<div className={styles.statName}>
				{stat.abbr === hero.statGenes.statBoost2 ? (
					<>
						<span className={styles.statBoost2}>
							{labelType === "full" ? stat.label : stat.abbr}
						</span>
						<span className={`${styles.tooltip} ${styles.statBoost2}`}>{`+${
							position === "primary" ? 2 : 4
						}%`}</span>
					</>
				) : labelType === "full" ? (
					stat.label
				) : (
					stat.abbr
				)}
			</div>
			<div className={styles.statPoint}>
				{hero.statGrowth[position][stat.value] / 100}%
			</div>
		</div>
	);
};

export default React.memo(GrowthStat);
