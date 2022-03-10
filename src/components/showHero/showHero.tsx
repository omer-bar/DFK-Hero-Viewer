import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import fetchHeroRaw from "../../hooks/fetchHeroRaw";
import HeroCard from "../Heroes/HeroCard";

interface heroData {
	hero: any;
}

function ShowHero() {
	let [searchParams, setSearchParams] = useSearchParams();
	const [hero, setHero] = useState<heroData | any>(null);

	let heroId = searchParams.get("hero_id");

	// const checkParams = (heroId: string | null) => {
	// 	if (typeof heroId !== "string") {
	// 		return false;
	// 	}
	// 	const heroIdNum = Number(heroId);

	// 	if (Number.isInteger(heroIdNum) && heroIdNum > 0) {
	// 		const heroFetch = async () => await fetchHeroRaw(heroId);
	// 		setHero(heroFetch);
	// 	}

	// 	return false;
	// };

	const fetchHero = async () => {
		const hero = await fetchHeroRaw(heroId);
		setHero(hero);
	};

	useEffect(() => {
		fetchHero();
		console.log("hero rendered");
	}, [HeroCard]);

	return (
		<>
			<div className="container-2">
				<div className="front-card">
					{hero && (
						<HeroCard hero={hero} isFlipped={false} isAnimated={false} />
					)}
				</div>
				<div className="back-card">
					{hero && <HeroCard hero={hero} isFlipped={true} isAnimated={false} />}
				</div>
			</div>
		</>
	);
}

export default ShowHero;
