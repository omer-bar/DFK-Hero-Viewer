import React from "react";
import stats from "../utils/stats";
import GrowthStat from "../GrowthStat";
import styles from "../HeroCard/styles.module.css";

interface HeroStatsGrowthProps {
	hero?: any;
}

const HeroStatsGrowth = ({ hero }: HeroStatsGrowthProps) => {
	return (
		<div style={{ padding: "0 10px" }}>
			<div className={styles.col}>
				<h3 style={{ marginTop: ".5rem" }}>Primary Growth</h3>
				<div className={`${styles.statList}`}>
					{stats.map((stat) => {
						return (
							<GrowthStat
								key={stat.abbr}
								hero={hero}
								stat={stat}
								position={"primary"}
								labelType="abbr"
							/>
						);
					})}
				</div>
			</div>
			<div className={styles.col}>
				<h3 style={{ marginTop: ".75rem" }}>Secondary Growth</h3>
				<div className={`${styles.statList}`}>
					{stats.map((stat) => {
						return (
							<GrowthStat
								key={stat.abbr}
								hero={hero}
								stat={stat}
								position={"secondary"}
								labelType="abbr"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default React.memo(HeroStatsGrowth);
