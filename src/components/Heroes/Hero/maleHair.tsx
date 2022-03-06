import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

/* MALE HAIR */
import { ReactComponent as maleHair0frontbase } from "../../../assets/images/hero/male/hair/hair0-front-base.svg";
import maleHair0fronthighlight from "../../../assets/images/hero/male/hair/hair0-front-highlight.svg";
import maleHair0frontshadow from "../../../assets/images/hero/male/hair/hair0-front-shadow.svg";

import { ReactComponent as maleHair1backbase } from "../../../assets/images/hero/male/hair/hair1-back-base.svg";
import maleHair1backhighlight from "../../../assets/images/hero/male/hair/hair1-back-highlight.svg";
import maleHair1backshadow from "../../../assets/images/hero/male/hair/hair1-back-shadow.svg";
import { ReactComponent as maleHair1frontbase } from "../../../assets/images/hero/male/hair/hair1-front-base.svg";
import maleHair1fronthighlight from "../../../assets/images/hero/male/hair/hair1-front-highlight.svg";
import maleHair1frontshadow from "../../../assets/images/hero/male/hair/hair1-front-shadow.svg";

import { ReactComponent as maleHair2backbase } from "../../../assets/images/hero/male/hair/hair2-back-base.svg";
import maleHair2backhighlight from "../../../assets/images/hero/male/hair/hair2-back-highlight.svg";
import maleHair2backshadow from "../../../assets/images/hero/male/hair/hair2-back-shadow.svg";
import { ReactComponent as maleHair2frontbase } from "../../../assets/images/hero/male/hair/hair2-front-base.svg";
import maleHair2fronthighlight from "../../../assets/images/hero/male/hair/hair2-front-highlight.svg";
import maleHair2frontshadow from "../../../assets/images/hero/male/hair/hair2-front-shadow.svg";

import { ReactComponent as maleHair3backbase } from "../../../assets/images/hero/male/hair/hair3-back-base.svg";
import maleHair3backhighlight from "../../../assets/images/hero/male/hair/hair3-back-highlight.svg";
import maleHair3backshadow from "../../../assets/images/hero/male/hair/hair3-back-shadow.svg";
import { ReactComponent as maleHair3frontbase } from "../../../assets/images/hero/male/hair/hair3-front-base.svg";
import maleHair3fronthighlight from "../../../assets/images/hero/male/hair/hair3-front-highlight.svg";
import maleHair3frontshadow from "../../../assets/images/hero/male/hair/hair3-front-shadow.svg";

import { ReactComponent as maleHair4frontbase } from "../../../assets/images/hero/male/hair/hair4-front-base.svg";
import maleHair4fronthighlight from "../../../assets/images/hero/male/hair/hair4-front-highlight.svg";
import maleHair4frontshadow from "../../../assets/images/hero/male/hair/hair4-front-shadow.svg";

import { ReactComponent as maleHair5frontbase } from "../../../assets/images/hero/male/hair/hair5-front-base.svg";
import maleHair5fronthighlight from "../../../assets/images/hero/male/hair/hair5-front-highlight.svg";
import maleHair5frontshadow from "../../../assets/images/hero/male/hair/hair5-front-shadow.svg";

import { ReactComponent as maleHair6frontbase } from "../../../assets/images/hero/male/hair/hair6-front-base.svg";
import maleHair6fronthighlight from "../../../assets/images/hero/male/hair/hair6-front-highlight.svg";
import maleHair6frontshadow from "../../../assets/images/hero/male/hair/hair6-front-shadow.svg";

import { ReactComponent as maleHair7frontbase } from "../../../assets/images/hero/male/hair/hair7-front-base.svg";
import maleHair7fronthighlight from "../../../assets/images/hero/male/hair/hair7-front-highlight.svg";
import maleHair7frontshadow from "../../../assets/images/hero/male/hair/hair7-front-shadow.svg";

import { ReactComponent as maleHair8frontbase } from "../../../assets/images/hero/male/hair/hair8-front-base.svg";
import maleHair8fronthighlight from "../../../assets/images/hero/male/hair/hair8-front-highlight.svg";
import maleHair8frontshadow from "../../../assets/images/hero/male/hair/hair8-front-shadow.svg";

import { ReactComponent as maleHair9frontbase } from "../../../assets/images/hero/male/hair/hair9-front-base.svg";
import maleHair9fronthighlight from "../../../assets/images/hero/male/hair/hair9-front-highlight.svg";
import maleHair9frontshadow from "../../../assets/images/hero/male/hair/hair9-front-shadow.svg";

import { ReactComponent as maleHair10frontbase } from "../../../assets/images/hero/male/hair/hair10-front-base.svg";
import maleHair10fronthighlight from "../../../assets/images/hero/male/hair/hair10-front-highlight.svg";
import maleHair10frontshadow from "../../../assets/images/hero/male/hair/hair10-front-shadow.svg";

import { ReactComponent as maleHair11frontbase } from "../../../assets/images/hero/male/hair/hair11-front-base.svg";
import maleHair11fronthighlight from "../../../assets/images/hero/male/hair/hair11-front-highlight.svg";
import maleHair11frontshadow from "../../../assets/images/hero/male/hair/hair11-front-shadow.svg";

import { ReactComponent as maleHair12frontbase } from "../../../assets/images/hero/male/hair/hair12-front-base.svg";
import maleHair12fronthighlight from "../../../assets/images/hero/male/hair/hair12-front-highlight.svg";
import maleHair12frontshadow from "../../../assets/images/hero/male/hair/hair12-front-shadow.svg";

import { ReactComponent as maleHair13backbase } from "../../../assets/images/hero/male/hair/hair13-back-base.svg";
import maleHair13backhighlight from "../../../assets/images/hero/male/hair/hair13-back-highlight.svg";
import maleHair13backshadow from "../../../assets/images/hero/male/hair/hair13-back-shadow.svg";
import { ReactComponent as maleHair13frontbase } from "../../../assets/images/hero/male/hair/hair13-front-base.svg";
import maleHair13fronthighlight from "../../../assets/images/hero/male/hair/hair13-front-highlight.svg";
import maleHair13frontshadow from "../../../assets/images/hero/male/hair/hair13-front-shadow.svg";

import { ReactComponent as maleHair14frontbase } from "../../../assets/images/hero/male/hair/hair14-front-base.svg";
import maleHair14fronthighlight from "../../../assets/images/hero/male/hair/hair14-front-highlight.svg";
import maleHair14frontshadow from "../../../assets/images/hero/male/hair/hair14-front-shadow.svg";

import { ReactComponent as maleHair15frontbase } from "../../../assets/images/hero/male/hair/hair15-front-base.svg";
import maleHair15fronthighlight from "../../../assets/images/hero/male/hair/hair15-front-highlight.svg";
import maleHair15frontshadow from "../../../assets/images/hero/male/hair/hair15-front-shadow.svg";

import { ReactComponent as maleHair16frontbase } from "../../../assets/images/hero/male/hair/hair16-front-base.svg";
import maleHair16fronthighlight from "../../../assets/images/hero/male/hair/hair16-front-highlight.svg";
import maleHair16frontshadow from "../../../assets/images/hero/male/hair/hair16-front-shadow.svg";

import { ReactComponent as maleHair17frontbase } from "../../../assets/images/hero/male/hair/hair17-front-base.svg";
import maleHair17fronthighlight from "../../../assets/images/hero/male/hair/hair17-front-highlight.svg";
import maleHair17frontshadow from "../../../assets/images/hero/male/hair/hair17-front-shadow.svg";

import { ReactComponent as maleHair18frontbase } from "../../../assets/images/hero/male/hair/hair18-front-base.svg";
import maleHair18fronthighlight from "../../../assets/images/hero/male/hair/hair18-front-highlight.svg";
import maleHair18frontshadow from "../../../assets/images/hero/male/hair/hair18-front-shadow.svg";

import { ReactComponent as maleHair19frontbase } from "../../../assets/images/hero/male/hair/hair19-front-base.svg";
import maleHair19fronthighlight from "../../../assets/images/hero/male/hair/hair19-front-highlight.svg";
import maleHair19frontshadow from "../../../assets/images/hero/male/hair/hair19-front-shadow.svg";

import { ReactComponent as maleHair20backbase } from "../../../assets/images/hero/male/hair/hair20-back-base.svg";
import maleHair20backhighlight from "../../../assets/images/hero/male/hair/hair20-back-highlight.svg";
import maleHair20backshadow from "../../../assets/images/hero/male/hair/hair20-back-shadow.svg";
import { ReactComponent as maleHair20frontbase } from "../../../assets/images/hero/male/hair/hair20-front-base.svg";
import maleHair20fronthighlight from "../../../assets/images/hero/male/hair/hair20-front-highlight.svg";
import maleHair20frontshadow from "../../../assets/images/hero/male/hair/hair20-front-shadow.svg";

import { ReactComponent as maleHair21backbase } from "../../../assets/images/hero/male/hair/hair21-back-base.svg";
import maleHair21backhighlight from "../../../assets/images/hero/male/hair/hair21-back-highlight.svg";
import maleHair21backshadow from "../../../assets/images/hero/male/hair/hair21-back-shadow.svg";
import { ReactComponent as maleHair21frontbase } from "../../../assets/images/hero/male/hair/hair21-front-base.svg";
import maleHair21fronthighlight from "../../../assets/images/hero/male/hair/hair21-front-highlight.svg";
import maleHair21frontshadow from "../../../assets/images/hero/male/hair/hair21-front-shadow.svg";

import { ReactComponent as maleHair22frontbase } from "../../../assets/images/hero/male/hair/hair22-front-base.svg";
import maleHair22fronthighlight from "../../../assets/images/hero/male/hair/hair22-front-highlight.svg";
import maleHair22frontshadow from "../../../assets/images/hero/male/hair/hair22-front-shadow.svg";

import { ReactComponent as maleHair23frontbase } from "../../../assets/images/hero/male/hair/hair23-front-base.svg";
import maleHair23fronthighlight from "../../../assets/images/hero/male/hair/hair23-front-highlight.svg";
import maleHair23frontshadow from "../../../assets/images/hero/male/hair/hair23-front-shadow.svg";

import { ReactComponent as maleHair24backbase } from "../../../assets/images/hero/male/hair/hair24-back-base.svg";
import maleHair24backhighlight from "../../../assets/images/hero/male/hair/hair24-back-highlight.svg";
import maleHair24backshadow from "../../../assets/images/hero/male/hair/hair24-back-shadow.svg";
import { ReactComponent as maleHair24frontbase } from "../../../assets/images/hero/male/hair/hair24-front-base.svg";
import maleHair24fronthighlight from "../../../assets/images/hero/male/hair/hair24-front-highlight.svg";
import maleHair24frontshadow from "../../../assets/images/hero/male/hair/hair24-front-shadow.svg";

import { ReactComponent as maleHair25frontbase } from "../../../assets/images/hero/male/hair/hair25-front-base.svg";
import maleHair25fronthighlight from "../../../assets/images/hero/male/hair/hair25-front-highlight.svg";
import maleHair25frontshadow from "../../../assets/images/hero/male/hair/hair25-front-shadow.svg";

import { ReactComponent as maleHair26frontbase } from "../../../assets/images/hero/male/hair/hair26-front-base.svg";
import maleHair26fronthighlight from "../../../assets/images/hero/male/hair/hair26-front-highlight.svg";
import maleHair26frontshadow from "../../../assets/images/hero/male/hair/hair26-front-shadow.svg";

import { ReactComponent as maleHair27frontbase } from "../../../assets/images/hero/male/hair/hair27-front-base.svg";
import maleHair27fronthighlight from "../../../assets/images/hero/male/hair/hair27-front-highlight.svg";
import maleHair27frontshadow from "../../../assets/images/hero/male/hair/hair27-front-shadow.svg";

import { ReactComponent as maleHair28frontbase } from "../../../assets/images/hero/male/hair/hair28-front-base.svg";
import maleHair28fronthighlight from "../../../assets/images/hero/male/hair/hair28-front-highlight.svg";
import maleHair28frontshadow from "../../../assets/images/hero/male/hair/hair28-front-shadow.svg";

import { ReactComponent as maleHair29frontbase } from "../../../assets/images/hero/male/hair/hair29-front-base.svg";
import maleHair29fronthighlight from "../../../assets/images/hero/male/hair/hair29-front-highlight.svg";
import maleHair29frontshadow from "../../../assets/images/hero/male/hair/hair29-front-shadow.svg";

import { ReactComponent as maleHair30frontbase } from "../../../assets/images/hero/male/hair/hair30-front-base.svg";
import maleHair30fronthighlight from "../../../assets/images/hero/male/hair/hair30-front-highlight.svg";
import maleHair30frontshadow from "../../../assets/images/hero/male/hair/hair30-front-shadow.svg";

import { ReactComponent as maleHair31frontbase } from "../../../assets/images/hero/male/hair/hair31-front-base.svg";
import maleHair31fronthighlight from "../../../assets/images/hero/male/hair/hair31-front-highlight.svg";
import maleHair31frontshadow from "../../../assets/images/hero/male/hair/hair31-front-shadow.svg";

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
				frontbase: maleHair0frontbase,
				fronthighlight: maleHair0fronthighlight,
				frontshadow: maleHair0frontshadow,
			};
		}
		case 1: {
			return {
				backbase: maleHair1backbase,
				backhighlight: maleHair1backhighlight,
				backshadow: maleHair1backshadow,
				frontbase: maleHair1frontbase,
				fronthighlight: maleHair1fronthighlight,
				frontshadow: maleHair1frontshadow,
			};
		}
		case 2: {
			return {
				backbase: maleHair2backbase,
				backhighlight: maleHair2backhighlight,
				backshadow: maleHair2backshadow,
				frontbase: maleHair2frontbase,
				fronthighlight: maleHair2fronthighlight,
				frontshadow: maleHair2frontshadow,
			};
		}
		case 3: {
			return {
				backbase: maleHair3backbase,
				backhighlight: maleHair3backhighlight,
				backshadow: maleHair3backshadow,
				frontbase: maleHair3frontbase,
				fronthighlight: maleHair3fronthighlight,
				frontshadow: maleHair3frontshadow,
			};
		}
		case 4: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair4frontbase,
				fronthighlight: maleHair4fronthighlight,
				frontshadow: maleHair4frontshadow,
			};
		}
		case 5: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair5frontbase,
				fronthighlight: maleHair5fronthighlight,
				frontshadow: maleHair5frontshadow,
			};
		}
		case 6: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair6frontbase,
				fronthighlight: maleHair6fronthighlight,
				frontshadow: maleHair6frontshadow,
			};
		}
		case 7: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair7frontbase,
				fronthighlight: maleHair7fronthighlight,
				frontshadow: maleHair7frontshadow,
			};
		}
		case 8: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair8frontbase,
				fronthighlight: maleHair8fronthighlight,
				frontshadow: maleHair8frontshadow,
			};
		}
		case 9: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair9frontbase,
				fronthighlight: maleHair9fronthighlight,
				frontshadow: maleHair9frontshadow,
			};
		}
		case 10: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair10frontbase,
				fronthighlight: maleHair10fronthighlight,
				frontshadow: maleHair10frontshadow,
			};
		}
		case 11: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair11frontbase,
				fronthighlight: maleHair11fronthighlight,
				frontshadow: maleHair11frontshadow,
			};
		}
		case 12: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair12frontbase,
				fronthighlight: maleHair12fronthighlight,
				frontshadow: maleHair12frontshadow,
			};
		}
		case 13: {
			return {
				backbase: maleHair13backbase,
				backhighlight: maleHair13backhighlight,
				backshadow: maleHair13backshadow,
				frontbase: maleHair13frontbase,
				fronthighlight: maleHair13fronthighlight,
				frontshadow: maleHair13frontshadow,
			};
		}
		case 14: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair14frontbase,
				fronthighlight: maleHair14fronthighlight,
				frontshadow: maleHair14frontshadow,
			};
		}
		case 15: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair15frontbase,
				fronthighlight: maleHair15fronthighlight,
				frontshadow: maleHair15frontshadow,
			};
		}
		case 16: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair16frontbase,
				fronthighlight: maleHair16fronthighlight,
				frontshadow: maleHair16frontshadow,
			};
		}
		case 17: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair17frontbase,
				fronthighlight: maleHair17fronthighlight,
				frontshadow: maleHair17frontshadow,
			};
		}
		case 18: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair18frontbase,
				fronthighlight: maleHair18fronthighlight,
				frontshadow: maleHair18frontshadow,
			};
		}
		case 19: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair19frontbase,
				fronthighlight: maleHair19fronthighlight,
				frontshadow: maleHair19frontshadow,
			};
		}
		case 20: {
			return {
				backbase: maleHair20backbase,
				backhighlight: maleHair20backhighlight,
				backshadow: maleHair20backshadow,
				frontbase: maleHair20frontbase,
				fronthighlight: maleHair20fronthighlight,
				frontshadow: maleHair20frontshadow,
			};
		}
		case 21: {
			return {
				backbase: maleHair21backbase,
				backhighlight: maleHair21backhighlight,
				backshadow: maleHair21backshadow,
				frontbase: maleHair21frontbase,
				fronthighlight: maleHair21fronthighlight,
				frontshadow: maleHair21frontshadow,
			};
		}
		case 22: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair22frontbase,
				fronthighlight: maleHair22fronthighlight,
				frontshadow: maleHair22frontshadow,
			};
		}
		case 23: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair23frontbase,
				fronthighlight: maleHair23fronthighlight,
				frontshadow: maleHair23frontshadow,
			};
		}
		case 24: {
			return {
				backbase: maleHair24backbase,
				backhighlight: maleHair24backhighlight,
				backshadow: maleHair24backshadow,
				frontbase: maleHair24frontbase,
				fronthighlight: maleHair24fronthighlight,
				frontshadow: maleHair24frontshadow,
			};
		}
		case 25: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair25frontbase,
				fronthighlight: maleHair25fronthighlight,
				frontshadow: maleHair25frontshadow,
			};
		}
		case 26: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair26frontbase,
				fronthighlight: maleHair26fronthighlight,
				frontshadow: maleHair26frontshadow,
			};
		}
		case 27: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair27frontbase,
				fronthighlight: maleHair27fronthighlight,
				frontshadow: maleHair27frontshadow,
			};
		}
		case 28: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair28frontbase,
				fronthighlight: maleHair28fronthighlight,
				frontshadow: maleHair28frontshadow,
			};
		}
		case 29: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair29frontbase,
				fronthighlight: maleHair29fronthighlight,
				frontshadow: maleHair29frontshadow,
			};
		}
		case 30: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair30frontbase,
				fronthighlight: maleHair30fronthighlight,
				frontshadow: maleHair30frontshadow,
			};
		}
		case 31: {
			return {
				backbase: undefined,
				backhighlight: undefined,
				backshadow: undefined,
				frontbase: maleHair31frontbase,
				fronthighlight: maleHair31fronthighlight,
				frontshadow: maleHair31frontshadow,
			};
		}
		default: {
			return {};
		}
	}
};

const MaleHair = ({ hairId, hairColor }: any) => {
	console.log(hairColor);
	const config = getHair(hairId);
	const BackBase = config.backbase;
	const FrontBase = config.frontbase;
	return (
		<>
			{config.backbase && (
				<div className={`${styles.heroHairBack} ${styles.hair}`}>
					<React.Fragment>
						<img src={config.backhighlight} className={styles.highlight} />
						<img src={config.backshadow} className={styles.shadow} />
						<BackBase className={styles.color} stroke={`#${hairColor}`} />
					</React.Fragment>
				</div>
			)}
			{config.frontbase && (
				<div className={`${styles.heroHairFront} ${styles.hair}`}>
					<React.Fragment>
						<img src={config.fronthighlight} className={styles.highlight} />
						<img src={config.frontshadow} className={styles.shadow} />
						<FrontBase className={styles.color} stroke={`#${hairColor}`} />
					</React.Fragment>
				</div>
			)}
		</>
	);
};

export default MaleHair;
