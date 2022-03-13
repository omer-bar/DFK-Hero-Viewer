import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

/* FEMALE HAIR */
import { ReactComponent as femaleHair0frontbase } from "../../../assets/images/hero/female/hair/hair0-front-base.svg";
import femaleHair0fronthighlight from "../../../assets/images/hero/female/hair/hair0-front-highlight.svg";
import femaleHair0frontshadow from "../../../assets/images/hero/female/hair/hair0-front-shadow.svg";

import { ReactComponent as femaleHair1backbase } from "../../../assets/images/hero/female/hair/hair1-back-base.svg";
import femaleHair1backhighlight from "../../../assets/images/hero/female/hair/hair1-back-highlight.svg";
import femaleHair1backshadow from "../../../assets/images/hero/female/hair/hair1-back-shadow.svg";
import { ReactComponent as femaleHair1frontbase } from "../../../assets/images/hero/female/hair/hair1-front-base.svg";
import femaleHair1fronthighlight from "../../../assets/images/hero/female/hair/hair1-front-highlight.svg";
import femaleHair1frontshadow from "../../../assets/images/hero/female/hair/hair1-front-shadow.svg";

import { ReactComponent as femaleHair2backbase } from "../../../assets/images/hero/female/hair/hair2-back-base.svg";
import femaleHair2backhighlight from "../../../assets/images/hero/female/hair/hair2-back-highlight.svg";
import femaleHair2backshadow from "../../../assets/images/hero/female/hair/hair2-back-shadow.svg";
import { ReactComponent as femaleHair2frontbase } from "../../../assets/images/hero/female/hair/hair2-front-base.svg";
import femaleHair2fronthighlight from "../../../assets/images/hero/female/hair/hair2-front-highlight.svg";
import femaleHair2frontshadow from "../../../assets/images/hero/female/hair/hair2-front-shadow.svg";

import { ReactComponent as femaleHair3frontbase } from "../../../assets/images/hero/female/hair/hair3-front-base.svg";
import femaleHair3fronthighlight from "../../../assets/images/hero/female/hair/hair3-front-highlight.svg";
import femaleHair3frontshadow from "../../../assets/images/hero/female/hair/hair3-front-shadow.svg";

import { ReactComponent as femaleHair4frontbase } from "../../../assets/images/hero/female/hair/hair4-front-base.svg";
import femaleHair4fronthighlight from "../../../assets/images/hero/female/hair/hair4-front-highlight.svg";
import femaleHair4frontshadow from "../../../assets/images/hero/female/hair/hair4-front-shadow.svg";

import { ReactComponent as femaleHair5frontbase } from "../../../assets/images/hero/female/hair/hair5-front-base.svg";
import femaleHair5fronthighlight from "../../../assets/images/hero/female/hair/hair5-front-highlight.svg";
import femaleHair5frontshadow from "../../../assets/images/hero/female/hair/hair5-front-shadow.svg";

import { ReactComponent as femaleHair6backbase } from "../../../assets/images/hero/female/hair/hair6-back-base.svg";
import femaleHair6backhighlight from "../../../assets/images/hero/female/hair/hair6-back-highlight.svg";
import femaleHair6backshadow from "../../../assets/images/hero/female/hair/hair6-back-shadow.svg";
import { ReactComponent as femaleHair6frontbase } from "../../../assets/images/hero/female/hair/hair6-front-base.svg";
import femaleHair6fronthighlight from "../../../assets/images/hero/female/hair/hair6-front-highlight.svg";
import femaleHair6frontshadow from "../../../assets/images/hero/female/hair/hair6-front-shadow.svg";

import { ReactComponent as femaleHair7frontbase } from "../../../assets/images/hero/female/hair/hair7-front-base.svg";
import femaleHair7fronthighlight from "../../../assets/images/hero/female/hair/hair7-front-highlight.svg";
import femaleHair7frontshadow from "../../../assets/images/hero/female/hair/hair7-front-shadow.svg";

import { ReactComponent as femaleHair8frontbase } from "../../../assets/images/hero/female/hair/hair8-front-base.svg";
import femaleHair8fronthighlight from "../../../assets/images/hero/female/hair/hair8-front-highlight.svg";
import femaleHair8frontshadow from "../../../assets/images/hero/female/hair/hair8-front-shadow.svg";

// Hairstyle 9 is breaking the hero generator -- says hair9-back-base.svg is not a valid name.
// import femaleHair9backbase from '../../../assets/images/hero/female/hair/hair9-back-base.svg'
import femaleHair9backshadow from "../../../assets/images/hero/female/hair/hair9-back-shadow.svg";
import { ReactComponent as femaleHair9frontbase } from "../../../assets/images/hero/female/hair/hair9-front-base.svg";
import femaleHair9fronthighlight from "../../../assets/images/hero/female/hair/hair9-front-highlight.svg";
import femaleHair9frontshadow from "../../../assets/images/hero/female/hair/hair9-front-shadow.svg";

import { ReactComponent as femaleHair10frontbase } from "../../../assets/images/hero/female/hair/hair10-front-base.svg";
import femaleHair10fronthighlight from "../../../assets/images/hero/female/hair/hair10-front-highlight.svg";
import femaleHair10frontshadow from "../../../assets/images/hero/female/hair/hair10-front-shadow.svg";

import { ReactComponent as femaleHair11backbase } from "../../../assets/images/hero/female/hair/hair11-back-base.svg";
import femaleHair11backhighlight from "../../../assets/images/hero/female/hair/hair11-back-highlight.svg";
import femaleHair11backshadow from "../../../assets/images/hero/female/hair/hair11-back-shadow.svg";
import { ReactComponent as femaleHair11frontbase } from "../../../assets/images/hero/female/hair/hair11-front-base.svg";
import femaleHair11fronthighlight from "../../../assets/images/hero/female/hair/hair11-front-highlight.svg";
import femaleHair11frontshadow from "../../../assets/images/hero/female/hair/hair11-front-shadow.svg";

import { ReactComponent as femaleHair12backbase } from "../../../assets/images/hero/female/hair/hair12-back-base.svg";
import femaleHair12backhighlight from "../../../assets/images/hero/female/hair/hair12-back-highlight.svg";
import femaleHair12backshadow from "../../../assets/images/hero/female/hair/hair12-back-shadow.svg";
import { ReactComponent as femaleHair12frontbase } from "../../../assets/images/hero/female/hair/hair12-front-base.svg";
import femaleHair12fronthighlight from "../../../assets/images/hero/female/hair/hair12-front-highlight.svg";
import femaleHair12frontshadow from "../../../assets/images/hero/female/hair/hair12-front-shadow.svg";

import { ReactComponent as femaleHair13frontbase } from "../../../assets/images/hero/female/hair/hair13-front-base.svg";
import femaleHair13fronthighlight from "../../../assets/images/hero/female/hair/hair13-front-highlight.svg";
import femaleHair13frontshadow from "../../../assets/images/hero/female/hair/hair13-front-shadow.svg";

import { ReactComponent as femaleHair14backbase } from "../../../assets/images/hero/female/hair/hair14-back-base.svg";
import femaleHair14backhighlight from "../../../assets/images/hero/female/hair/hair14-back-highlight.svg";
import femaleHair14backshadow from "../../../assets/images/hero/female/hair/hair14-back-shadow.svg";
import { ReactComponent as femaleHair14frontbase } from "../../../assets/images/hero/female/hair/hair14-front-base.svg";
import femaleHair14fronthighlight from "../../../assets/images/hero/female/hair/hair14-front-highlight.svg";
import femaleHair14frontshadow from "../../../assets/images/hero/female/hair/hair14-front-shadow.svg";

import { ReactComponent as femaleHair15frontbase } from "../../../assets/images/hero/female/hair/hair15-front-base.svg";
import femaleHair15fronthighlight from "../../../assets/images/hero/female/hair/hair15-front-highlight.svg";
import femaleHair15frontshadow from "../../../assets/images/hero/female/hair/hair15-front-shadow.svg";

import { ReactComponent as femaleHair16frontbase } from "../../../assets/images/hero/female/hair/hair16-front-base.svg";
import femaleHair16fronthighlight from "../../../assets/images/hero/female/hair/hair16-front-highlight.svg";
import femaleHair16frontshadow from "../../../assets/images/hero/female/hair/hair16-front-shadow.svg";

import { ReactComponent as femaleHair17backbase } from "../../../assets/images/hero/female/hair/hair17-back-base.svg";
import femaleHair17backhighlight from "../../../assets/images/hero/female/hair/hair17-back-highlight.svg";
import femaleHair17backshadow from "../../../assets/images/hero/female/hair/hair17-back-shadow.svg";
import { ReactComponent as femaleHair17frontbase } from "../../../assets/images/hero/female/hair/hair17-front-base.svg";
import femaleHair17fronthighlight from "../../../assets/images/hero/female/hair/hair17-front-highlight.svg";
import femaleHair17frontshadow from "../../../assets/images/hero/female/hair/hair17-front-shadow.svg";

import { ReactComponent as femaleHair18backbase } from "../../../assets/images/hero/female/hair/hair18-back-base.svg";
import femaleHair18backhighlight from "../../../assets/images/hero/female/hair/hair18-back-highlight.svg";
import femaleHair18backshadow from "../../../assets/images/hero/female/hair/hair18-back-shadow.svg";
import { ReactComponent as femaleHair18frontbase } from "../../../assets/images/hero/female/hair/hair18-front-base.svg";
import femaleHair18fronthighlight from "../../../assets/images/hero/female/hair/hair18-front-highlight.svg";
import femaleHair18frontshadow from "../../../assets/images/hero/female/hair/hair18-front-shadow.svg";

import { ReactComponent as femaleHair19frontbase } from "../../../assets/images/hero/female/hair/hair19-front-base.svg";
import femaleHair19fronthighlight from "../../../assets/images/hero/female/hair/hair19-front-highlight.svg";
import femaleHair19frontshadow from "../../../assets/images/hero/female/hair/hair19-front-shadow.svg";

import { ReactComponent as femaleHair20frontbase } from "../../../assets/images/hero/female/hair/hair20-front-base.svg";
import femaleHair20fronthighlight from "../../../assets/images/hero/female/hair/hair20-front-highlight.svg";
import femaleHair20frontshadow from "../../../assets/images/hero/female/hair/hair20-front-shadow.svg";

import { ReactComponent as femaleHair21frontbase } from "../../../assets/images/hero/female/hair/hair21-front-base.svg";
import femaleHair21fronthighlight from "../../../assets/images/hero/female/hair/hair21-front-highlight.svg";
import femaleHair21frontshadow from "../../../assets/images/hero/female/hair/hair21-front-shadow.svg";

import { ReactComponent as femaleHair22frontbase } from "../../../assets/images/hero/female/hair/hair22-front-base.svg";
import femaleHair22fronthighlight from "../../../assets/images/hero/female/hair/hair22-front-highlight.svg";
import femaleHair22frontshadow from "../../../assets/images/hero/female/hair/hair22-front-shadow.svg";

import { ReactComponent as femaleHair23frontbase } from "../../../assets/images/hero/female/hair/hair23-front-base.svg";
import femaleHair23fronthighlight from "../../../assets/images/hero/female/hair/hair23-front-highlight.svg";
import femaleHair23frontshadow from "../../../assets/images/hero/female/hair/hair23-front-shadow.svg";

import { ReactComponent as femaleHair24backbase } from "../../../assets/images/hero/female/hair/hair24-back-base.svg";
import femaleHair24backhighlight from "../../../assets/images/hero/female/hair/hair24-back-highlight.svg";
import femaleHair24backshadow from "../../../assets/images/hero/female/hair/hair24-back-shadow.svg";
import { ReactComponent as femaleHair24frontbase } from "../../../assets/images/hero/female/hair/hair24-front-base.svg";
import femaleHair24fronthighlight from "../../../assets/images/hero/female/hair/hair24-front-highlight.svg";
import femaleHair24frontshadow from "../../../assets/images/hero/female/hair/hair24-front-shadow.svg";

import { ReactComponent as femaleHair25frontbase } from "../../../assets/images/hero/female/hair/hair25-front-base.svg";
import femaleHair25fronthighlight from "../../../assets/images/hero/female/hair/hair25-front-highlight.svg";
import femaleHair25frontshadow from "../../../assets/images/hero/female/hair/hair25-front-shadow.svg";

import { ReactComponent as femaleHair26frontbase } from "../../../assets/images/hero/female/hair/hair26-front-base.svg";
import femaleHair26fronthighlight from "../../../assets/images/hero/female/hair/hair26-front-highlight.svg";
import femaleHair26frontshadow from "../../../assets/images/hero/female/hair/hair26-front-shadow.svg";

import { ReactComponent as femaleHair27frontbase } from "../../../assets/images/hero/female/hair/hair27-front-base.svg";
import femaleHair27fronthighlight from "../../../assets/images/hero/female/hair/hair27-front-highlight.svg";
import femaleHair27frontshadow from "../../../assets/images/hero/female/hair/hair27-front-shadow.svg";

import { ReactComponent as femaleHair28frontbase } from "../../../assets/images/hero/female/hair/hair28-front-base.svg";
import femaleHair28fronthighlight from "../../../assets/images/hero/female/hair/hair28-front-highlight.svg";
import femaleHair28frontshadow from "../../../assets/images/hero/female/hair/hair28-front-shadow.svg";

import { ReactComponent as femaleHair29frontbase } from "../../../assets/images/hero/female/hair/hair29-front-base.svg";
import femaleHair29fronthighlight from "../../../assets/images/hero/female/hair/hair29-front-highlight.svg";
import femaleHair29frontshadow from "../../../assets/images/hero/female/hair/hair29-front-shadow.svg";

import { ReactComponent as femaleHair30frontbase } from "../../../assets/images/hero/female/hair/hair30-front-base.svg";
import femaleHair30fronthighlight from "../../../assets/images/hero/female/hair/hair30-front-highlight.svg";
import femaleHair30frontshadow from "../../../assets/images/hero/female/hair/hair30-front-shadow.svg";

interface GetHairProps {
	backbase?: any;
	backhighlight?: string | undefined;
	backshadow?: string | undefined;
	frontbase?: any;
	fronthighlight?: string | undefined;
	frontshadow?: string | undefined;
}
// write a getter functions that uses a switch statement tto use every import
const getHair = (id: any): GetHairProps => {
	switch (id) {
		case 0: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair0frontbase,
				fronthighlight: femaleHair0fronthighlight,
				frontshadow: femaleHair0frontshadow,
			};
		}
		case 1: {
			return {
				backbase: femaleHair1backbase,
				backhighlight: femaleHair1backhighlight,
				backshadow: femaleHair1backshadow,
				frontbase: femaleHair1frontbase,
				fronthighlight: femaleHair1fronthighlight,
				frontshadow: femaleHair1frontshadow,
			};
		}
		case 2: {
			return {
				backbase: femaleHair2backbase,
				backhighlight: femaleHair2backhighlight,
				backshadow: femaleHair2backshadow,
				frontbase: femaleHair2frontbase,
				fronthighlight: femaleHair2fronthighlight,
				frontshadow: femaleHair2frontshadow,
			};
		}
		case 3: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair3frontbase,
				fronthighlight: femaleHair3fronthighlight,
				frontshadow: femaleHair3frontshadow,
			};
		}
		case 4: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair4frontbase,
				fronthighlight: femaleHair4fronthighlight,
				frontshadow: femaleHair4frontshadow,
			};
		}
		case 5: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair5frontbase,
				fronthighlight: femaleHair5fronthighlight,
				frontshadow: femaleHair5frontshadow,
			};
		}
		case 6: {
			return {
				backbase: femaleHair6backbase,
				backhighlight: femaleHair6backhighlight,
				backshadow: femaleHair6backshadow,
				frontbase: femaleHair6frontbase,
				fronthighlight: femaleHair6fronthighlight,
				frontshadow: femaleHair6frontshadow,
			};
		}
		case 7: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair7frontbase,
				fronthighlight: femaleHair7fronthighlight,
				frontshadow: femaleHair7frontshadow,
			};
		}
		case 8: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair8frontbase,
				fronthighlight: femaleHair8fronthighlight,
				frontshadow: femaleHair8frontshadow,
			};
		}
		case 9: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: femaleHair9backshadow,
				frontbase: femaleHair9frontbase,
				fronthighlight: femaleHair9fronthighlight,
				frontshadow: femaleHair9frontshadow,
			};
		}
		case 10: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair10frontbase,
				fronthighlight: femaleHair10fronthighlight,
				frontshadow: femaleHair10frontshadow,
			};
		}
		case 11: {
			return {
				backbase: femaleHair11backbase,
				backhighlight: femaleHair11backhighlight,
				backshadow: femaleHair11backshadow,
				frontbase: femaleHair11frontbase,
				fronthighlight: femaleHair11fronthighlight,
				frontshadow: femaleHair11frontshadow,
			};
		}
		case 12: {
			return {
				backbase: femaleHair12backbase,
				backhighlight: femaleHair12backhighlight,
				backshadow: femaleHair12backshadow,
				frontbase: femaleHair12frontbase,
				fronthighlight: femaleHair12fronthighlight,
				frontshadow: femaleHair12frontshadow,
			};
		}
		case 13: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair13frontbase,
				fronthighlight: femaleHair13fronthighlight,
				frontshadow: femaleHair13frontshadow,
			};
		}
		case 14: {
			return {
				backbase: femaleHair14backbase,
				backhighlight: femaleHair14backhighlight,
				backshadow: femaleHair14backshadow,
				frontbase: femaleHair14frontbase,
				fronthighlight: femaleHair14fronthighlight,
				frontshadow: femaleHair14frontshadow,
			};
		}
		case 15: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair15frontbase,
				fronthighlight: femaleHair15fronthighlight,
				frontshadow: femaleHair15frontshadow,
			};
		}
		case 16: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair16frontbase,
				fronthighlight: femaleHair16fronthighlight,
				frontshadow: femaleHair16frontshadow,
			};
		}
		case 17: {
			return {
				backbase: femaleHair17backbase,
				backhighlight: femaleHair17backhighlight,
				backshadow: femaleHair17backshadow,
				frontbase: femaleHair17frontbase,
				fronthighlight: femaleHair17fronthighlight,
				frontshadow: femaleHair17frontshadow,
			};
		}
		case 18: {
			return {
				backbase: femaleHair18backbase,
				backhighlight: femaleHair18backhighlight,
				backshadow: femaleHair18backshadow,
				frontbase: femaleHair18frontbase,
				fronthighlight: femaleHair18fronthighlight,
				frontshadow: femaleHair18frontshadow,
			};
		}
		case 19: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair19frontbase,
				fronthighlight: femaleHair19fronthighlight,
				frontshadow: femaleHair19frontshadow,
			};
		}
		case 20: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair20frontbase,
				fronthighlight: femaleHair20fronthighlight,
				frontshadow: femaleHair20frontshadow,
			};
		}
		case 21: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair21frontbase,
				fronthighlight: femaleHair21fronthighlight,
				frontshadow: femaleHair21frontshadow,
			};
		}
		case 22: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair22frontbase,
				fronthighlight: femaleHair22fronthighlight,
				frontshadow: femaleHair22frontshadow,
			};
		}
		case 23: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair23frontbase,
				fronthighlight: femaleHair23fronthighlight,
				frontshadow: femaleHair23frontshadow,
			};
		}
		case 24: {
			return {
				backbase: femaleHair24backbase,
				backhighlight: femaleHair24backhighlight,
				backshadow: femaleHair24backshadow,
				frontbase: femaleHair24frontbase,
				fronthighlight: femaleHair24fronthighlight,
				frontshadow: femaleHair24frontshadow,
			};
		}
		case 25: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair25frontbase,
				fronthighlight: femaleHair25fronthighlight,
				frontshadow: femaleHair25frontshadow,
			};
		}
		case 26: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair26frontbase,
				fronthighlight: femaleHair26fronthighlight,
				frontshadow: femaleHair26frontshadow,
			};
		}
		case 27: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair27frontbase,
				fronthighlight: femaleHair27fronthighlight,
				frontshadow: femaleHair27frontshadow,
			};
		}
		case 28: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair28frontbase,
				fronthighlight: femaleHair28fronthighlight,
				frontshadow: femaleHair28frontshadow,
			};
		}
		case 29: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair29frontbase,
				fronthighlight: femaleHair29fronthighlight,
				frontshadow: femaleHair29frontshadow,
			};
		}
		case 30: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: femaleHair30frontbase,
				fronthighlight: femaleHair30fronthighlight,
				frontshadow: femaleHair30frontshadow,
			};
		}
		default: {
			return {};
		}
	}
};

const FemaleHair = ({ hairId, hairColor }: any) => {
	const config = getHair(hairId);
	const BackBase = config.backbase;
	const FrontBase = config.frontbase;
	return (
		<>
			{config.backbase && (
				<div className={`${styles.heroHairBack} ${styles.hair}`}>
					<React.Fragment>
						<img
							src={config.backhighlight}
							className={styles.highlight}
							alt=""
						/>
						<img src={config.backshadow} className={styles.shadow} alt="" />
						<BackBase className={styles.color} stroke={`#${hairColor}`} />
					</React.Fragment>
				</div>
			)}
			{config.frontbase && (
				<div className={`${styles.heroHairFront} ${styles.hair}`}>
					<React.Fragment>
						<img
							src={config.fronthighlight}
							className={styles.highlight}
							alt=""
						/>
						<img src={config.frontshadow} className={styles.shadow} alt="" />
						<FrontBase className={styles.color} stroke={`#${hairColor}`} />
					</React.Fragment>
				</div>
			)}
		</>
	);
};

export default FemaleHair;
