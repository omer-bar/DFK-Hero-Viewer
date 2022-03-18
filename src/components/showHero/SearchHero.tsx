import { useState, useEffect } from "react";
import fetchHeroRaw from "../../hooks/fetchHeroRaw";
import HeroCard from "../Heroes/HeroCard";

interface heroData {
	hero: any;
}

function SearchHero({ props }: any) {
	const [hero, setHero] = useState<heroData | any>(null);
	const [heroIdInput, setHeroIdInput] = useState();

	const onSubmit = async (evt: any) => {
		evt.preventDefault();
		const hero = await fetchHeroRaw(heroIdInput);
		setHero(hero);
	};

	useEffect(() => {}, [hero]);
	return (
		<>
			<div className="container-1">
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

				<div className="front-card-search">
					{hero && (
						<HeroCard
							hero={hero}
							isFlipped={false}
							isAnimated={true}
							isStatGrowth={2}
						/>
					)}
				</div>
				<div className="back-card-search">
					{hero && (
						<HeroCard
							hero={hero}
							isFlipped={true}
							isAnimated={true}
							isStatGrowth={2}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default SearchHero;
