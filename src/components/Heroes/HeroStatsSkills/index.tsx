import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";
import stats from "../utils/stats";

interface HeroStatsSkillsProps {
	hero?: any;
}

/* exported component */
const HeroStatsSkills = ({ hero }: HeroStatsSkillsProps) => {
	return (
		<>
			<div style={{ padding: "0 10px" }}>
				<div className={styles.col}>
					<h3 style={{ marginTop: ".5rem" }}>Stats</h3>
					<div className={styles.statList}>
						{stats.map((stat: any) => {
							return (
								<div key={stat.value}>
									<div className={styles.statName}>
										{stat.abbr === hero.statGenes.statBoost1 &&
										stat.abbr === hero.statGenes.statBoost2 ? (
											<>
												<span className={styles.statBoostDouble}>
													{stat.abbr}
												</span>
												<span className={styles.tooltip}>
													{stat.label}
													<span className={styles.statBoost}> +2</span>
													<br />
													<span className={styles.statBoost2}>
														+2 P%, +4 S%
													</span>
												</span>
											</>
										) : stat.abbr === hero.statGenes.statBoost1 ? (
											<>
												<span className={styles.statBoost}>{stat.abbr}</span>
												<span className={styles.tooltip}>
													{stat.label}
													<span className={styles.statBoost}> +2</span>
												</span>
											</>
										) : stat.abbr === hero.statGenes.statBoost2 ? (
											<>
												<span className={styles.statBoost2}>{stat.abbr}</span>
												<span className={styles.tooltip}>
													{stat.label}
													<br />
													<span className={styles.statBoost2}>
														+2 P%, +4 S%
													</span>
												</span>
											</>
										) : (
											<>
												{stat.abbr}
												<span className={styles.tooltip}>{stat.label}</span>
											</>
										)}
									</div>
									<div className={styles.statPoint}>
										{hero.stats[stat.value]}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.col}>
					<h3 style={{ marginTop: ".75rem" }}>Professions</h3>
					<div className={styles.skillList}>
						<div
							className={`${styles.skillName} ${
								hero.statGenes.profession === "mining" ? styles.chosen : ""
							}`}
						>
							Mining
							<span className={styles.tooltip}>Main</span>
						</div>
						<div className={styles.skillLevel}>
							{hero.skills.mining.toFixed(1)}
						</div>
						<div
							className={`${styles.skillName} ${
								hero.statGenes.profession === "gardening" ? styles.chosen : ""
							}`}
						>
							Gardening
							<span className={styles.tooltip}>Main</span>
						</div>
						<div className={styles.skillLevel}>
							{hero.skills.gardening.toFixed(1)}
						</div>
						<div
							className={`${styles.skillName} ${
								hero.statGenes.profession === "fishing" ? styles.chosen : ""
							}`}
						>
							Fishing
							<span className={styles.tooltip}>Main</span>
						</div>
						<div className={styles.skillLevel}>
							{hero.skills.fishing.toFixed(1)}
						</div>
						<div
							className={`${styles.skillName} ${
								hero.statGenes.profession === "foraging" ? styles.chosen : ""
							}`}
						>
							Foraging
							<span className={styles.tooltip}>Main</span>
						</div>
						<div className={styles.skillLevel}>
							{hero.skills.foraging.toFixed(1)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroStatsSkills;
