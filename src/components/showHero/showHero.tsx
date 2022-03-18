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

	const fetchHero = async () => {
		const hero = await fetchHeroRaw(heroId);
		setHero(hero);
	};

	useEffect(() => {
		fetchHero();
	}, []);

	return (
		<>
			{hero && (
				<div className="container-2">
					<div className="front-card">
						<HeroCard hero={hero} isFlipped={false} isAnimated={false} />
					</div>
					<div className="back-card-1">
						<HeroCard
							hero={hero}
							isFlipped={true}
							isAnimated={false}
							isStatGrowth={0}
						/>
					</div>
					<div className="back-card-2">
						<HeroCard
							hero={hero}
							isFlipped={true}
							isAnimated={false}
							isStatGrowth={1}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default ShowHero;
