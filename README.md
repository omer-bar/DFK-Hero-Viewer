# DFK Hero Viewer

DFK Hero Viewer is a React implementation for showing hero cards(NFTs) from the succesful blockchain game DefiKingdom.
<p align="center">
  <img src="https://i.imgur.com/X5eUbv8.jpg">
</p>

## Prerequisites
- Node.js V16.14.x
- React V17.x

## Install
You can either clone this repository or use the [npm package](https://www.npmjs.com/package/dfk-hero-viewer)
```Shell
npm i dfk-hero-viewer
```

## Usage
The main component that is used to render the hero card is HeroCard
```js
import {HeroCard} from "dfk-hero-viewer";

<HeroCard hero={hero} isAnimated={true} isFlipped={false} />
```
the component needs to be passed 2 properties with 1 optional property
|		Property name		|		Value			|		Required		|		Default			|	Accepted Values		|
|		:----------:		|		:------:		|		:-------:		|		:-------:		|		:-------:		|
|		hero				|		Object			|			√			|		required		|		Hero Object		|
|		isFlipped			|		Boolean			|			√			|		required		|true=Stats side, false=sprite side|
|		isAnimated			|		Boolean			|			x			|		false			|true=animate sprite, false=dont animate sprite|

To get the hero object needed to rendered the card correctly there is a function included called fetchHero
```js
import {fetchHero} from "dfk-hero-viewer";
```
#### exapmles
##### 1. render the hero on page load and a button* to flip the card -
```js
import { useState, useEffect } from "react";
import { fetchHero, HeroCard } from "dfk-hero-viewer";

function App() {
	const [hero, setHero] = useState<any>(null);
	const [flipped, setFlipped] = useState(false);

	useEffect(() => {
		const getHero = async () => {
			let heroData = await fetchHero(34147);
			setHero(heroData);
		};
		getHero();
	}, []);

	return (
		<>
			{hero && (
				<>
					<HeroCard hero={hero} isFlipped={flipped} isAnimated={true} />
					<button onClick={() => setFlipped(!flipped)}>Flip card</button>
				</>
			)}
		</>
	);
}

export default App;
```

##### 2. a form to fetch the hero and render the card
```js
import { useState } from "react";
import { fetchHero, HeroCard } from "dfk-hero-viewer";

interface heroData {
	hero: any;
}

function SearchHero() {
	const [hero, setHero] = useState<heroData | any>(null);
	const [heroIdInput, setHeroIdInput] = useState();

	const onSubmit = async (evt: any) => {
		evt.preventDefault();
		const hero = await fetchHero(heroIdInput);
		setHero(hero);
	};

	return (
		<>
			<div>
				<div>
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

				<div>
					{hero && (
						<>
							<HeroCard
								hero={hero}
								isFlipped={false}
								isAnimated={true}
							/>
							<HeroCard
								hero={hero}
								isFlipped={true}
								isAnimated={true}
							/>
						</>
					)}
				</div>
			</div>
		</>
	);
}
```

\* note - do not use onClick on the card or container since there are things in the card like statGrowth you want to click to activate and placing onClick on the container will flip the card AND switch to statGrowth instead of just switching to statGrowth.

## Credit
Thanks to [Kingdom studios](https://kingdomstudios.io/) the creators of [DefiKingdoms](https://defikingdoms.com/) for allowing me to use the art assets and the hero component source code that was used to make this project happen.
## License
Copyright © [Omer Bar](https://github.com/EryX666) and Authors, [Licensed under ISC](/LICENSE.md).

---------------
#### Tip Jar
if you like to support me in my endeavors of making more tools and applications in the DFK space you can tip me on this address:
metamask - 0x9ef08D3F22A9ad87f10eD3a6582f4a70Ea05aA34
