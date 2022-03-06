import React, { useState, useEffect, createContext } from "react";
import fetchHeroRaw from "../../hooks/fetchHeroRaw";
import HeroCard from "../Heroes/HeroCard";

// onSubmit request the heroRaw data from the blockchain
// receive the HeroRaw data from the blockchain in showHero.tsx
// pass the HeroRaw data to HeroCard component
// render it

interface heroData {
	hero: any;
}

function ShowHero() {
	const [hero, setHero] = useState<heroData | any>(null);
	const [heroIdInput, setHeroIdInput] = useState();

	const onSubmit = async (evt: any) => {
		evt.preventDefault();
		const hero = await fetchHeroRaw(heroIdInput);
		setHero(hero);
	};

	useEffect(() => {
		if (hero) {
			console.log("Hero component mounted");
		}
	}, [hero]);
	return (
		<>
			<div className="container">
				<div className="heroForm">
					<form onSubmit={onSubmit}>
						<input
							defaultValue={heroIdInput}
							onChange={(e: any) => setHeroIdInput(e.target.value)}
							type="text"
							placeholder="Enter Hero Id"
						></input>
						<button type="submit">Fetch hero card</button>
					</form>
				</div>

				<div className="front-card">
					{hero && <HeroCard hero={hero} isFlipped={false} isAnimated={true} />}
				</div>
				<div className="back-card">
					{hero && <HeroCard hero={hero} isFlipped={true} isAnimated={true} />}
				</div>
			</div>
		</>
	);
}

export default ShowHero;
