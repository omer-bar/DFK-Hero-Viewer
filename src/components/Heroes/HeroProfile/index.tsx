import React from "react";
import cx from "classnames";
import Hero from "../Hero";
import styles from "./index.module.scss";

interface HeroProfile {
	hero: any | null;
	placeholderComponent?: JSX.Element;
	profileChoice?: boolean;
	profileSmall?: boolean;
}

const HeroProfile = ({
	hero,
	placeholderComponent,
	profileChoice,
	profileSmall,
}: HeroProfile) => {
	return (
		<button
			className={cx(styles.heroProfileSquare, {
				[styles.profileChoice]: profileChoice,
				[styles.profileSmall]: profileSmall,
			})}
			title={
				hero &&
				hero.name &&
				hero.name.replace(/(^\w{1})|(\s{1}\w{1})/g, (s: string) =>
					s.toUpperCase()
				)
			}
		>
			<div className={styles.heroFrame}>
				<div className={styles.heroContainer}>
					{hero && <Hero hero={hero} />}
				</div>
				{!hero && placeholderComponent}
			</div>
		</button>
	);
};

export default React.memo(HeroProfile);
