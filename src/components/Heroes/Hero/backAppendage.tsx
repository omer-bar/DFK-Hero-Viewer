import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

import { ReactComponent as base0 } from "../../../assets/images/hero/back-appendage/back-appendage-base0.svg";
import { ReactComponent as base1 } from "../../../assets/images/hero/back-appendage/back-appendage-base1.svg";
import { ReactComponent as base2 } from "../../../assets/images/hero/back-appendage/back-appendage-base2.svg";
import { ReactComponent as base3 } from "../../../assets/images/hero/back-appendage/back-appendage-base3.svg";
import { ReactComponent as base4 } from "../../../assets/images/hero/back-appendage/back-appendage-base4.svg";
import { ReactComponent as base5 } from "../../../assets/images/hero/back-appendage/back-appendage-base5.svg";
import { ReactComponent as base6 } from "../../../assets/images/hero/back-appendage/back-appendage-base6.svg";
import { ReactComponent as base7 } from "../../../assets/images/hero/back-appendage/back-appendage-base7.svg";
import { ReactComponent as base16 } from "../../../assets/images/hero/back-appendage/back-appendage-base16.svg";
import { ReactComponent as base17 } from "../../../assets/images/hero/back-appendage/back-appendage-base17.svg";
import { ReactComponent as base18 } from "../../../assets/images/hero/back-appendage/back-appendage-base18.svg";
import { ReactComponent as base19 } from "../../../assets/images/hero/back-appendage/back-appendage-base19.svg";
import { ReactComponent as base24 } from "../../../assets/images/hero/back-appendage/back-appendage-base24.svg";
import { ReactComponent as base25 } from "../../../assets/images/hero/back-appendage/back-appendage-base25.svg";
import { ReactComponent as base28 } from "../../../assets/images/hero/back-appendage/back-appendage-base28.svg";

import overlay0 from "../../../assets/images/hero/back-appendage/back-appendage-overlay0.svg";
import overlay1 from "../../../assets/images/hero/back-appendage/back-appendage-overlay1.svg";
import overlay2 from "../../../assets/images/hero/back-appendage/back-appendage-overlay2.svg";
import overlay3 from "../../../assets/images/hero/back-appendage/back-appendage-overlay3.svg";
import overlay4 from "../../../assets/images/hero/back-appendage/back-appendage-overlay4.svg";
import overlay5 from "../../../assets/images/hero/back-appendage/back-appendage-overlay5.svg";
import overlay6 from "../../../assets/images/hero/back-appendage/back-appendage-overlay6.svg";
import overlay7 from "../../../assets/images/hero/back-appendage/back-appendage-overlay7.svg";
import overlay16 from "../../../assets/images/hero/back-appendage/back-appendage-overlay16.svg";
import overlay17 from "../../../assets/images/hero/back-appendage/back-appendage-overlay17.svg";
import overlay18 from "../../../assets/images/hero/back-appendage/back-appendage-overlay18.svg";
import overlay19 from "../../../assets/images/hero/back-appendage/back-appendage-overlay19.svg";
import overlay24 from "../../../assets/images/hero/back-appendage/back-appendage-overlay24.svg";
import overlay25 from "../../../assets/images/hero/back-appendage/back-appendage-overlay25.svg";
import overlay28 from "../../../assets/images/hero/back-appendage/back-appendage-overlay28.svg";

interface GetInfoProps {
	base?: any;
	baseString?: any;
	overlay?: any;
}
const getInfo = (mainClass: any): GetInfoProps => {
	switch (mainClass) {
		case 0: {
			return {
				base: base0,
				baseString: "",
				overlay: overlay0,
			};
		}
		case 1: {
			return {
				base: base1,
				baseString:
					"M36 19h2M35 20h3M35 21h2M35 22h2M35 23h2M35 24h2M35 25h2M35 26h2M35 27h2M26 28h1M34 28h3M27 29h2M34 29h2M29 30h2M33 30h3M31 31h4M32 32h2",
				overlay: overlay1,
			};
		}
		case 2: {
			return {
				base: base2,
				baseString:
					"M28 27h4M26 28h8M25 29h10M25 30h3M31 30h5M25 31h1M33 31h3M33 32h4M34 33h3M34 34h3M35 35h3M35 36h3M35 37h3M36 38h3M36 39h4M41 39h2M37 40h6M38 41h5M39 42h3",
				overlay: overlay2,
			};
		}
		case 3: {
			return {
				base: base3,
				baseString:
					"M22 30h5M35 30h4M24 31h5M36 31h3M26 32h4M35 32h4M28 33h4M34 33h3M38 33h1M29 34h7M31 35h4",
				overlay: overlay3,
			};
		}
		case 4: {
			return {
				base: base4,
				baseString:
					"M38 19h1M37 20h1M36 21h3M36 22h3M35 23h5M35 24h5M35 25h5M36 26h3M38 27h2M39 28h2M39 29h2M24 30h2M39 30h2M24 31h3M38 31h3M25 32h3M37 32h3M26 33h6M35 33h4M27 34h11M30 35h6",
				overlay: overlay4,
			};
		}
		case 5: {
			return {
				base: base5,
				baseString:
					"M15 16h1M35 16h1M14 17h3M34 17h3M15 18h3M33 18h3M16 19h4M31 19h4M17 20h3M31 20h3M17 21h4M30 21h4M19 22h3M29 22h3M20 23h3M28 23h3M21 24h3M27 24h3M22 25h3M26 25h3M23 26h5M24 27h3M23 28h5M22 29h3M26 29h3M21 30h3M27 30h3M20 31h3M28 31h3M19 32h3M29 32h3M18 33h3M30 33h3M17 34h3M31 34h3",
				overlay: overlay5,
			};
		}
		case 6: {
			return {
				base: base6,
				baseString:
					"M35 10h5M33 11h8M32 12h10M32 13h11M31 14h13M31 15h10M30 16h10M30 17h10M30 18h9M30 19h9M30 20h9M31 21h8M31 22h9M31 23h9M32 24h8M31 25h9M30 26h9M28 27h11M27 28h11M26 29h11M26 30h9M25 31h8",
				overlay: overlay6,
			};
		}
		case 7: {
			return {
				base: base7,
				baseString:
					"M39 11h2M38 12h3M37 13h3M36 14h3M31 15h1M35 15h3M31 16h2M34 16h3M31 17h5M30 18h5M29 19h7M28 20h9M27 21h7M26 22h7M25 23h7M24 24h7M23 25h7M22 26h7M21 27h7M20 28h7M19 29h7M18 30h7M17 31h7M16 32h7M15 33h7M14 34h7M13 35h7M13 36h6M13 37h5M13 38h4",
				overlay: overlay7,
			};
		}
		case 16: {
			return {
				base: base16,
				baseString:
					"M8 4h1M40 4h1M7 5h3M39 5h3M7 6h4M38 6h4M8 7h4M37 7h4M9 8h4M36 8h4M9 9h5M35 9h6M8 10h7M34 10h8M8 11h8M33 11h9M9 12h8M32 12h9M10 13h7M31 13h9M10 14h7M31 14h9M11 15h6M31 15h8M11 16h7M30 16h9M10 17h8M30 17h9M10 18h9M29 18h10M11 19h8M29 19h9M11 20h9M27 20h11M11 21h10M26 21h12M11 22h11M24 22h14M11 23h11M24 23h14M11 24h11M24 24h14M11 25h11M24 25h14M12 26h10M24 26h13M12 27h10M24 27h13M13 28h9M25 28h11M14 29h7M26 29h9M15 30h5M27 30h7M15 31h5M27 31h6M18 32h1M28 32h2",
				overlay: overlay16,
			};
		}
		case 17: {
			return {
				base: base17,
				baseString:
					"M14 7h2M34 7h2M14 8h1M35 8h2M13 9h2M35 9h3M13 10h3M34 10h4M13 11h3M34 11h5M13 12h3M33 12h6M12 13h4M33 13h7M12 14h5M32 14h8M12 15h5M32 15h8M11 16h7M31 16h10M11 17h7M31 17h10M11 18h7M30 18h11M11 19h8M29 19h13M11 20h8M28 20h14M11 21h9M27 21h15M10 22h11M26 22h17M10 23h12M24 23h19M10 24h12M23 24h20M10 25h12M23 25h21M10 26h12M23 26h21M10 27h4M15 27h4M28 27h7M36 27h8M10 28h4M16 28h2M30 28h4M38 28h6M10 29h3M16 29h2M31 29h2M39 29h5M10 30h2M16 30h1M32 30h2M40 30h4M10 31h2M40 31h4M10 32h1M41 32h3M10 33h1M41 33h3M10 34h1M41 34h2M10 35h1M41 35h2M10 36h1M42 36h1",
				overlay: overlay17,
			};
		}
		case 18: {
			return {
				base: base18,
				baseString:
					"M7 16h9M35 16h11M6 17h13M31 17h17M5 18h15M29 18h20M5 19h16M28 19h21M5 20h17M27 20h22M6 21h16M26 21h22M7 22h15M26 22h20M7 23h16M25 23h21M8 24h15M25 24h20M9 25h14M25 25h19M10 26h13M25 26h18M10 27h13M25 27h17M11 28h12M25 28h16M11 29h12M25 29h16M11 30h11M26 30h15M11 31h11M26 31h15M12 32h10M26 32h14M12 33h10M27 33h13M13 34h8M28 34h11M14 35h6M29 35h9M15 36h4M31 36h5",
				overlay: overlay18,
			};
		}
		case 19: {
			return {
				base: base19,
				baseString:
					"M58 2h1M58 3h1M0 4h1M57 4h1M0 5h2M54 5h1M56 5h2M1 6h2M54 6h3M1 7h2M54 7h3M0 8h4M53 8h5M0 9h1M2 9h4M50 9h1M52 9h4M57 9h1M1 10h5M50 10h7M2 11h5M49 11h7M3 12h6M46 12h1M48 12h7M2 13h8M45 13h9M55 13h1M2 14h1M4 14h7M40 14h1M43 14h10M54 14h2M2 15h13M17 15h1M34 15h1M38 15h2M41 15h15M3 16h13M18 16h1M32 16h2M36 16h19M3 17h18M30 17h24M4 18h49M3 19h1M5 19h47M53 19h1M3 20h48M52 20h2M4 21h49M5 22h47M4 23h49M4 24h49M5 25h47M5 26h46M6 27h44M7 28h42M10 29h35M8 30h40M9 31h34M44 31h2M11 32h2M15 32h23M41 32h2M14 33h3M18 33h3M26 33h8M35 33h4M18 34h1M32 34h1",
				overlay: overlay19,
			};
		}
		case 24: {
			return {
				base: base24,
				baseString:
					"M21 9h8M19 10h12M18 11h14M17 12h16M16 13h18M15 14h20M15 15h20M14 16h22M14 17h22M14 18h22M14 19h22M14 20h22M14 21h22M14 22h22M14 23h22M14 24h22M14 25h22M14 26h22M14 27h22M14 28h22M14 29h22M14 30h22M14 31h22M14 32h22M14 33h22M14 34h22M14 35h22M14 36h22M14 37h22M15 38h20M15 39h20M16 40h18M17 41h16M18 42h14M19 43h12M21 44h8",
				overlay: overlay24,
			};
		}
		case 25: {
			return {
				base: base25,
				baseString:
					"M19 3h3M17 4h7M16 5h9M15 6h11M14 7h13M14 8h13M13 9h15M13 10h15M13 11h15M14 12h13M14 13h13M15 14h11M16 15h9M17 16h7M19 17h3M34 17h4M33 18h6M9 19h4M32 19h8M8 20h6M31 20h10M7 21h8M31 21h10M6 22h10M31 22h10M5 23h12M31 23h10M5 24h12M32 24h8M5 25h12M33 25h6M5 26h12M34 26h4M6 27h10M7 28h8M28 28h3M8 29h6M26 29h7M9 30h4M25 30h9M24 31h11M23 32h13M12 33h4M23 33h13M11 34h6M22 34h15M10 35h8M22 35h15M9 36h10M22 36h15M9 37h10M23 37h13M9 38h10M23 38h13M9 39h10M24 39h11M10 40h8M25 40h9M11 41h6M26 41h7M12 42h4M28 42h3",
				overlay: overlay25,
			};
		}
		case 28: {
			return {
				base: base28,
				baseString:
					"M9 2h9M30 2h2M9 3h11M30 3h4M12 4h9M31 4h4M16 5h6M31 5h5M16 6h7M32 6h5M17 7h6M32 7h5M18 8h5M32 8h6M45 8h1M9 9h2M18 9h6M32 9h6M44 9h3M7 10h2M18 10h6M31 10h7M44 10h4M6 11h2M19 11h5M31 11h7M44 11h5M5 12h2M19 12h5M30 12h7M45 12h5M4 13h3M19 13h6M29 13h7M45 13h5M4 14h3M19 14h6M26 14h9M45 14h5M4 15h3M20 15h14M45 15h5M4 16h3M21 16h11M45 16h5M4 17h3M21 17h12M44 17h6M4 18h4M14 18h6M22 18h12M43 18h6M4 19h5M13 19h8M22 19h14M41 19h8M5 20h5M12 20h37M5 21h43M6 22h41M7 23h39M8 24h11M20 24h11M35 24h10M1 25h1M10 25h5M21 25h8M39 25h5M0 26h3M21 26h12M0 27h3M21 27h13M0 28h4M15 28h5M21 28h14M0 29h5M14 29h22M44 29h1M0 30h7M13 30h23M43 30h3M1 31h7M11 31h25M43 31h4M2 32h35M43 32h4M3 33h35M43 33h4M4 34h13M19 34h11M31 34h8M42 34h5M5 35h10M18 35h13M32 35h14M6 36h7M17 36h15M33 36h13M7 37h5M16 37h6M26 37h7M34 37h11M15 38h6M27 38h7M35 38h9M13 39h7M28 39h7M36 39h7M44 39h2M5 40h14M29 40h7M38 40h4M43 40h3M6 41h12M30 41h16M8 42h8M31 42h14M10 43h4M33 43h11M34 44h9",
				overlay: overlay28,
			};
		}
		default: {
			return {};
		}
	}
};

const Appendage = ({ overlay, stroke, baseString, backId }: any) => {
	// const Base = props.base

	return (
		<React.Fragment>
			<img src={overlay} className={styles.overlay} />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 -0.5 59 45"
				shapeRendering="crispEdges"
				className={styles.color}
			>
				<path stroke={stroke} d={baseString} />
				{backId == 11 && <path stroke={stroke} d="M16 31h1M32 31h1" />}
			</svg>
		</React.Fragment>
	);
};

export const BackAppendage = ({ backId, stroke }: any) => {
	const info = getInfo(backId);
	return (
		<>
			<div className={styles.backAppendage}>
				<Appendage
					backId={backId}
					base={info.base}
					baseString={info.baseString}
					overlay={info.overlay}
					stroke={stroke}
				/>
			</div>
		</>
	);
};
