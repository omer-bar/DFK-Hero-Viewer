import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import fetchHeroRaw from "../../hooks/fetchHeroRaw";
import HeroCard from "../Heroes/HeroCard";

interface heroData {
	hero: any;
}

function ShowHero() {
	let [searchParams] = useSearchParams();
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

	// const printCard = () => {
	// 	console.log("printing card now");
	// 	return;
	// };

	useEffect(() => {
		fetchHero();

		// const waitForElementToDisplay = async (
		// 	selector: string,
		// 	callback: any,
		// 	checkFrequencyInMs: number,
		// 	timeoutInMs: number
		// ) => {
		// 	let startTimeInMs = Date.now();
		// 	const loopSearch = () => {
		// 		if (document.querySelector(selector) !== null) {
		// 			callback();
		// 			return;
		// 		} else {
		// 			setTimeout(() => {
		// 				if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) return;
		// 				loopSearch();
		// 			}, checkFrequencyInMs);
		// 		}
		// 	};
		// };
		// waitForElementToDisplay(".container-2", printCard(), 1000, 9000);
	}, []);

	return (
		<>
			{hero && (
				<div className="container-2">
					<div className="front-card">
						<HeroCard hero={hero} isFlipped={false} isAnimated={false} />
					</div>
					<div className="back-card">
						<HeroCard hero={hero} isFlipped={true} isAnimated={false} />
					</div>
				</div>
			)}
		</>
	);
}

export default ShowHero;
