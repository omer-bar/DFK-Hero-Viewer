import React from "react"; // useState
import styles from "../HeroCard/styles.module.css";

/* FEMALE HAIR */
import femaleHair0fronthighlight from "../../../assets/images/hero/female/hair/hair0-front-highlight.svg";
import femaleHair0frontshadow from "../../../assets/images/hero/female/hair/hair0-front-shadow.svg";

import femaleHair1backhighlight from "../../../assets/images/hero/female/hair/hair1-back-highlight.svg";
import femaleHair1backshadow from "../../../assets/images/hero/female/hair/hair1-back-shadow.svg";
import femaleHair1fronthighlight from "../../../assets/images/hero/female/hair/hair1-front-highlight.svg";
import femaleHair1frontshadow from "../../../assets/images/hero/female/hair/hair1-front-shadow.svg";

import femaleHair2backhighlight from "../../../assets/images/hero/female/hair/hair2-back-highlight.svg";
import femaleHair2backshadow from "../../../assets/images/hero/female/hair/hair2-back-shadow.svg";
import femaleHair2fronthighlight from "../../../assets/images/hero/female/hair/hair2-front-highlight.svg";
import femaleHair2frontshadow from "../../../assets/images/hero/female/hair/hair2-front-shadow.svg";

import femaleHair3fronthighlight from "../../../assets/images/hero/female/hair/hair3-front-highlight.svg";
import femaleHair3frontshadow from "../../../assets/images/hero/female/hair/hair3-front-shadow.svg";

import femaleHair4fronthighlight from "../../../assets/images/hero/female/hair/hair4-front-highlight.svg";
import femaleHair4frontshadow from "../../../assets/images/hero/female/hair/hair4-front-shadow.svg";

import femaleHair5fronthighlight from "../../../assets/images/hero/female/hair/hair5-front-highlight.svg";
import femaleHair5frontshadow from "../../../assets/images/hero/female/hair/hair5-front-shadow.svg";

import femaleHair6backhighlight from "../../../assets/images/hero/female/hair/hair6-back-highlight.svg";
import femaleHair6backshadow from "../../../assets/images/hero/female/hair/hair6-back-shadow.svg";
import femaleHair6fronthighlight from "../../../assets/images/hero/female/hair/hair6-front-highlight.svg";
import femaleHair6frontshadow from "../../../assets/images/hero/female/hair/hair6-front-shadow.svg";

import femaleHair7fronthighlight from "../../../assets/images/hero/female/hair/hair7-front-highlight.svg";
import femaleHair7frontshadow from "../../../assets/images/hero/female/hair/hair7-front-shadow.svg";

import femaleHair8fronthighlight from "../../../assets/images/hero/female/hair/hair8-front-highlight.svg";
import femaleHair8frontshadow from "../../../assets/images/hero/female/hair/hair8-front-shadow.svg";

// Hairstyle 9 is breaking the hero generator -- says hair9-back-base.svg is not a valid name.
// import femaleHair9backbase from '../../../assets/images/hero/female/hair/hair9-back-base.svg'
import femaleHair9backshadow from "../../../assets/images/hero/female/hair/hair9-back-shadow.svg";
import femaleHair9fronthighlight from "../../../assets/images/hero/female/hair/hair9-front-highlight.svg";
import femaleHair9frontshadow from "../../../assets/images/hero/female/hair/hair9-front-shadow.svg";

import femaleHair10fronthighlight from "../../../assets/images/hero/female/hair/hair10-front-highlight.svg";
import femaleHair10frontshadow from "../../../assets/images/hero/female/hair/hair10-front-shadow.svg";

import femaleHair11backhighlight from "../../../assets/images/hero/female/hair/hair11-back-highlight.svg";
import femaleHair11backshadow from "../../../assets/images/hero/female/hair/hair11-back-shadow.svg";
import femaleHair11fronthighlight from "../../../assets/images/hero/female/hair/hair11-front-highlight.svg";
import femaleHair11frontshadow from "../../../assets/images/hero/female/hair/hair11-front-shadow.svg";

import femaleHair12backhighlight from "../../../assets/images/hero/female/hair/hair12-back-highlight.svg";
import femaleHair12backshadow from "../../../assets/images/hero/female/hair/hair12-back-shadow.svg";
import femaleHair12fronthighlight from "../../../assets/images/hero/female/hair/hair12-front-highlight.svg";
import femaleHair12frontshadow from "../../../assets/images/hero/female/hair/hair12-front-shadow.svg";

import femaleHair13fronthighlight from "../../../assets/images/hero/female/hair/hair13-front-highlight.svg";
import femaleHair13frontshadow from "../../../assets/images/hero/female/hair/hair13-front-shadow.svg";

import femaleHair14backhighlight from "../../../assets/images/hero/female/hair/hair14-back-highlight.svg";
import femaleHair14backshadow from "../../../assets/images/hero/female/hair/hair14-back-shadow.svg";
import femaleHair14fronthighlight from "../../../assets/images/hero/female/hair/hair14-front-highlight.svg";
import femaleHair14frontshadow from "../../../assets/images/hero/female/hair/hair14-front-shadow.svg";

import femaleHair15fronthighlight from "../../../assets/images/hero/female/hair/hair15-front-highlight.svg";
import femaleHair15frontshadow from "../../../assets/images/hero/female/hair/hair15-front-shadow.svg";

import femaleHair16fronthighlight from "../../../assets/images/hero/female/hair/hair16-front-highlight.svg";
import femaleHair16frontshadow from "../../../assets/images/hero/female/hair/hair16-front-shadow.svg";

import femaleHair17backhighlight from "../../../assets/images/hero/female/hair/hair17-back-highlight.svg";
import femaleHair17backshadow from "../../../assets/images/hero/female/hair/hair17-back-shadow.svg";
import femaleHair17fronthighlight from "../../../assets/images/hero/female/hair/hair17-front-highlight.svg";
import femaleHair17frontshadow from "../../../assets/images/hero/female/hair/hair17-front-shadow.svg";

import femaleHair18backhighlight from "../../../assets/images/hero/female/hair/hair18-back-highlight.svg";
import femaleHair18backshadow from "../../../assets/images/hero/female/hair/hair18-back-shadow.svg";
import femaleHair18fronthighlight from "../../../assets/images/hero/female/hair/hair18-front-highlight.svg";
import femaleHair18frontshadow from "../../../assets/images/hero/female/hair/hair18-front-shadow.svg";

import femaleHair19fronthighlight from "../../../assets/images/hero/female/hair/hair19-front-highlight.svg";
import femaleHair19frontshadow from "../../../assets/images/hero/female/hair/hair19-front-shadow.svg";

import femaleHair20fronthighlight from "../../../assets/images/hero/female/hair/hair20-front-highlight.svg";
import femaleHair20frontshadow from "../../../assets/images/hero/female/hair/hair20-front-shadow.svg";

import femaleHair21fronthighlight from "../../../assets/images/hero/female/hair/hair21-front-highlight.svg";
import femaleHair21frontshadow from "../../../assets/images/hero/female/hair/hair21-front-shadow.svg";

import femaleHair22fronthighlight from "../../../assets/images/hero/female/hair/hair22-front-highlight.svg";
import femaleHair22frontshadow from "../../../assets/images/hero/female/hair/hair22-front-shadow.svg";

import femaleHair23fronthighlight from "../../../assets/images/hero/female/hair/hair23-front-highlight.svg";
import femaleHair23frontshadow from "../../../assets/images/hero/female/hair/hair23-front-shadow.svg";

import femaleHair24backhighlight from "../../../assets/images/hero/female/hair/hair24-back-highlight.svg";
import femaleHair24backshadow from "../../../assets/images/hero/female/hair/hair24-back-shadow.svg";
import femaleHair24fronthighlight from "../../../assets/images/hero/female/hair/hair24-front-highlight.svg";
import femaleHair24frontshadow from "../../../assets/images/hero/female/hair/hair24-front-shadow.svg";

import femaleHair25fronthighlight from "../../../assets/images/hero/female/hair/hair25-front-highlight.svg";
import femaleHair25frontshadow from "../../../assets/images/hero/female/hair/hair25-front-shadow.svg";

import femaleHair26fronthighlight from "../../../assets/images/hero/female/hair/hair26-front-highlight.svg";
import femaleHair26frontshadow from "../../../assets/images/hero/female/hair/hair26-front-shadow.svg";

import femaleHair27fronthighlight from "../../../assets/images/hero/female/hair/hair27-front-highlight.svg";
import femaleHair27frontshadow from "../../../assets/images/hero/female/hair/hair27-front-shadow.svg";

import femaleHair28fronthighlight from "../../../assets/images/hero/female/hair/hair28-front-highlight.svg";
import femaleHair28frontshadow from "../../../assets/images/hero/female/hair/hair28-front-shadow.svg";

import femaleHair29fronthighlight from "../../../assets/images/hero/female/hair/hair29-front-highlight.svg";
import femaleHair29frontshadow from "../../../assets/images/hero/female/hair/hair29-front-shadow.svg";

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
        frontbase:
          "M13 8h4M12 9h6M9 10h1M11 10h8M20 10h1M10 11h10M8 12h14M9 13h12M7 14h5M15 14h7M8 15h4M16 15h5M9 16h2M17 16h4M9 17h2M17 17h4M9 18h2M17 18h4M10 19h2M17 19h4M11 20h2M17 20h5M10 21h2M16 21h3M20 21h3M9 22h2M16 22h2",
        fronthighlight: femaleHair0fronthighlight,
        frontshadow: femaleHair0frontshadow,
      };
    }
    case 1: {
      return {
        backbase:
          "M20 16h2M20 17h2M20 18h2M20 19h2M19 20h3M19 21h3M18 22h4M18 23h4M18 24h4M18 25h4M17 26h5M17 27h5M17 28h4",
        backhighlight: femaleHair1backhighlight,
        backshadow: femaleHair1backshadow,
        frontbase:
          "M11 9h8M10 10h10M10 11h11M10 12h11M9 13h13M8 14h15M9 15h13M8 16h4M16 16h4M9 17h3M17 17h3M9 18h3M17 18h3M9 19h3M17 19h3M10 20h3M16 20h3M10 21h3M16 21h3M11 22h1M17 22h1",
        fronthighlight: femaleHair1fronthighlight,
        frontshadow: femaleHair1frontshadow,
      };
    }
    case 2: {
      return {
        backbase:
          "M20 16h2M20 17h2M20 18h2M20 19h3M19 20h5M19 21h4M18 22h5M18 23h6M18 24h6M18 25h6M17 26h8M17 27h9M17 28h8M17 29h9M17 30h9M17 31h8M17 32h7",
        backhighlight: femaleHair2backhighlight,
        backshadow: femaleHair2backshadow,
        frontbase:
          "M11 9h8M10 10h10M10 11h11M10 12h11M9 13h13M8 14h15M9 15h13M8 16h4M16 16h4M9 17h3M17 17h3M9 18h3M17 18h3M9 19h3M17 19h3M10 20h3M16 20h3M10 21h3M16 21h3M10 22h3M16 22h3M9 23h3M15 23h3M9 24h2M14 24h3",
        fronthighlight: femaleHair2fronthighlight,
        frontshadow: femaleHair2frontshadow,
      };
    }
    case 3: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M18 3h1M17 4h3M16 5h5M16 6h6M15 7h3M15 8h2M13 9h6M12 10h8M11 11h10M10 12h11M10 13h11M10 14h11M10 15h3M14 15h1M16 15h5M17 16h4M17 17h4M18 18h2M18 19h2",
        fronthighlight: femaleHair3fronthighlight,
        frontshadow: femaleHair3frontshadow,
      };
    }
    case 4: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M14 8h4M13 9h6M12 10h8M11 11h10M10 12h11M10 13h12M10 14h12M10 15h3M14 15h8M10 16h1M16 16h6M17 17h4M18 18h2M18 19h1",
        fronthighlight: femaleHair4fronthighlight,
        frontshadow: femaleHair4frontshadow,
      };
    }
    case 5: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M14 8h4M13 9h6M12 10h8M11 11h10M10 12h11M10 13h12M10 14h12M10 15h3M14 15h8M10 16h1M16 16h6M17 17h5M18 18h4M18 19h4M17 20h5M17 21h4M16 22h4M15 23h4M15 24h3M15 25h3",
        fronthighlight: femaleHair5fronthighlight,
        frontshadow: femaleHair5frontshadow,
      };
    }
    case 6: {
      return {
        backbase:
          "M20 15h3M20 16h3M20 17h3M20 18h3M19 19h5M12 20h1M19 20h5M19 21h5M18 22h6M17 23h7M17 24h7M16 25h8M16 26h8M16 27h8M16 28h8M15 29h9M16 30h8",
        backhighlight: femaleHair6backhighlight,
        backshadow: femaleHair6backshadow,
        frontbase:
          "M12 10h7M11 11h9M10 12h11M9 13h13M9 14h13M9 15h13M9 16h3M17 16h3M9 17h3M17 17h3M9 18h3M17 18h3M9 19h3M17 19h3M9 20h3M18 20h2M9 21h4M17 21h3M9 22h3M17 22h3M9 23h3M17 23h3M9 24h3M17 24h3M10 25h1M18 25h1",
        fronthighlight: femaleHair6fronthighlight,
        frontshadow: femaleHair6frontshadow,
      };
    }
    case 7: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 8h5M12 9h7M11 10h9M10 11h11M9 12h13M8 13h14M8 14h14M8 15h14M8 16h4M16 16h6M8 17h3M17 17h5M8 18h3M17 18h4M8 19h4M17 19h5M8 20h5M16 20h6M8 21h4M16 21h6M9 22h2M17 22h3",
        fronthighlight: femaleHair7fronthighlight,
        frontshadow: femaleHair7frontshadow,
      };
    }
    case 8: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 10h5M11 11h9M11 12h9M9 13h12M9 14h13M9 15h4M14 15h8M9 16h2M17 16h1M19 16h3M9 17h2M19 17h3M9 18h2M18 18h3M11 19h1M18 19h3M12 20h1M18 20h1",
        fronthighlight: femaleHair8fronthighlight,
        frontshadow: femaleHair8frontshadow,
      };
    }
    case 9: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: femaleHair9backshadow,
        frontbase:
          "M18 3h1M17 4h3M16 5h5M16 6h6M15 7h3M15 8h2M13 9h6M12 10h8M11 11h10M10 12h11M10 13h12M10 14h12M10 15h3M14 15h1M16 15h6M17 16h6M17 17h6M18 18h5M11 19h1M18 19h6M10 20h3M18 20h6M10 21h2M20 21h3",
        fronthighlight: femaleHair9fronthighlight,
        frontshadow: femaleHair9frontshadow,
      };
    }
    case 10: {
      return {
        backbase:
          "M21 19h1M21 20h1M19 21h3M19 22h3M18 23h4M17 24h5M17 25h5M15 26h7M15 27h7M15 28h6",
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 8h4M12 9h7M11 10h9M10 11h11M9 12h13M8 13h14M8 14h14M8 15h14M8 16h4M16 16h6M8 17h3M17 17h5M8 18h3M17 18h5M8 19h4M17 19h4M8 20h1M10 20h3M17 20h4M8 21h1M11 21h1M17 21h1M20 21h1M8 22h1M11 22h1M17 22h1M20 22h1M8 23h1M11 23h1M17 23h1M20 23h1M8 24h4M17 24h4",
        fronthighlight: femaleHair10fronthighlight,
        frontshadow: femaleHair10frontshadow,
      };
    }
    case 11: {
      return {
        backbase:
          "M21 15h1M21 16h1M20 17h2M20 18h2M20 19h2M19 20h3M19 21h3M18 22h4M18 23h4M17 24h5M16 25h6M16 26h6M16 27h6M16 28h6",
        backhighlight: femaleHair11backhighlight,
        backshadow: femaleHair11backshadow,
        frontbase:
          "M12 8h7M11 9h9M10 10h11M9 11h12M8 12h14M8 13h14M8 14h14M8 15h5M14 15h7M9 16h3M17 16h4M9 17h3M17 17h3M9 18h3M17 18h3M9 19h3M17 19h3M9 20h3M16 20h3M9 21h3M16 21h3M8 22h3M15 22h3M8 23h3M15 23h3M9 24h1M16 24h1",
        fronthighlight: femaleHair11fronthighlight,
        frontshadow: femaleHair11frontshadow,
      };
    }
    case 12: {
      return {
        backbase:
          "M20 15h3M20 16h3M20 17h3M20 18h3M19 19h5M19 20h5M19 21h5M18 22h6M17 23h7M17 24h7M16 25h8M16 26h8M16 27h8M16 28h8M15 29h9M16 30h8",
        backhighlight: femaleHair12backhighlight,
        backshadow: femaleHair12backshadow,
        frontbase:
          "M12 8h7M11 9h9M10 10h11M9 11h12M8 12h14M8 13h14M8 14h14M8 15h4M15 15h5M9 16h2M17 16h3M9 17h2M17 17h3M9 18h2M17 18h3M9 19h3M18 19h2M9 20h4M17 20h2M9 21h3M17 21h2M9 22h2M17 22h2M9 23h2M17 23h2M10 24h1M18 24h1",
        fronthighlight: femaleHair12fronthighlight,
        frontshadow: femaleHair12frontshadow,
      };
    }
    case 13: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M15 6h4M14 7h6M14 8h6M12 9h9M11 10h10M10 11h11M9 12h12M9 13h12M9 14h12M9 15h5M15 15h6M9 16h3M13 16h1M16 16h5M9 17h3M14 17h1M17 17h4M10 18h2M17 18h4M11 19h2M16 19h5M12 20h1M16 20h1M18 20h2",
        fronthighlight: femaleHair13fronthighlight,
        frontshadow: femaleHair13frontshadow,
      };
    }
    case 14: {
      return {
        backbase:
          "M21 15h1M21 16h1M21 17h1M21 18h1M10 19h1M21 19h1M11 20h1M17 20h1M20 20h3M11 21h1M16 21h7M16 22h7M16 23h7M16 24h7M16 25h7M16 26h7M16 27h7M16 28h7",
        backhighlight: femaleHair14backhighlight,
        backshadow: femaleHair14backshadow,
        frontbase:
          "M12 9h6M11 10h8M10 11h10M9 12h12M9 13h12M9 14h12M9 15h5M15 15h6M9 16h3M13 16h1M16 16h5M9 17h3M14 17h1M17 17h4M10 18h2M17 18h4M11 19h2M16 19h5M12 20h1M16 20h1M18 20h2",
        fronthighlight: femaleHair14fronthighlight,
        frontshadow: femaleHair14frontshadow,
      };
    }
    case 15: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M10 7h1M9 8h1M11 8h8M11 9h9M10 10h11M9 11h12M8 12h14M8 13h14M8 14h14M8 15h5M14 15h8M8 16h3M17 16h5M9 17h2M17 17h5M10 18h1M18 18h3M11 19h1M18 19h3M18 20h2",
        fronthighlight: femaleHair15fronthighlight,
        frontshadow: femaleHair15frontshadow,
      };
    }
    case 16: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 9h5M12 10h7M12 11h8M11 12h10M11 13h11M10 14h11M10 15h2M16 15h5M10 16h2M17 16h4M10 17h2M18 17h3M10 18h2M18 18h4M9 19h3M17 19h5M9 20h4M17 20h4",
        fronthighlight: femaleHair16fronthighlight,
        frontshadow: femaleHair16frontshadow,
      };
    }
    case 17: {
      return {
        backbase:
          "M21 19h1M21 20h1M19 21h3M19 22h3M18 23h4M17 24h5M17 25h5M15 26h7M15 27h7M15 28h6",
        backhighlight: femaleHair17backhighlight,
        backshadow: femaleHair17backshadow,
        frontbase:
          "M13 8h4M12 9h7M11 10h9M10 11h11M9 12h13M8 13h14M8 14h14M8 15h14M8 16h4M16 16h6M8 17h3M17 17h5M8 18h3M17 18h5M8 19h4M17 19h4M8 20h1M10 20h3M17 20h4M8 21h1M11 21h1M17 21h1M20 21h1M8 22h1M11 22h1M17 22h1M20 22h1M8 23h1M11 23h1M17 23h1M20 23h1M8 24h4M17 24h4",
        fronthighlight: femaleHair17fronthighlight,
        frontshadow: femaleHair17frontshadow,
      };
    }
    case 18: {
      return {
        backbase:
          "M10 19h12M10 20h12M10 21h12M10 22h12M10 23h12M10 24h12M10 25h12M11 26h10M11 27h10M11 28h9M12 29h8M13 30h6M14 31h4M15 32h2",
        backhighlight: femaleHair18backhighlight,
        backshadow: femaleHair18backshadow,
        frontbase:
          "M12 8h6M11 9h9M10 10h11M9 11h13M9 12h13M8 13h14M8 14h8M17 14h6M8 15h7M17 15h5M8 16h6M17 16h6M8 17h6M17 17h7M8 18h5M17 18h6M8 19h5M17 19h4M9 20h4M17 20h4M9 21h4M17 21h4M9 22h3M17 22h4M9 23h3M17 23h3M10 24h2M17 24h2",
        fronthighlight: femaleHair18fronthighlight,
        frontshadow: femaleHair18frontshadow,
      };
    }
    case 19: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M9 9h3M14 9h5M20 9h3M8 10h16M7 11h18M7 12h18M7 13h18M8 14h16M9 15h14M9 16h3M17 16h5M9 17h3M17 17h5M9 18h3M17 18h5M9 19h3M17 19h4M9 20h3M17 20h3M9 21h4M16 21h4M10 22h3M16 22h3M10 23h3M16 23h3M11 24h1M17 24h1",
        fronthighlight: femaleHair19fronthighlight,
        frontshadow: femaleHair19frontshadow,
      };
    }
    case 20: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 9h5M12 10h7M11 11h9M11 12h10M11 13h11M10 14h11M10 15h2M16 15h5M9 16h3M17 16h5M9 17h3M17 17h5M9 18h4M18 18h3M11 19h1M18 19h2",
        fronthighlight: femaleHair20fronthighlight,
        frontshadow: femaleHair20frontshadow,
      };
    }
    case 21: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 8h4M12 9h7M11 10h9M10 11h11M9 12h13M8 13h14M8 14h14M8 15h14M8 16h4M16 16h6M8 17h3M17 17h5M18 18h3M10 19h2M18 19h4M11 20h2M18 20h3",
        fronthighlight: femaleHair21fronthighlight,
        frontshadow: femaleHair21frontshadow,
      };
    }
    case 22: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 9h5M12 10h7M11 11h9M10 12h11M10 13h12M9 14h13M9 15h3M16 15h5M10 16h2M17 16h5M9 17h3M18 17h4M9 18h3M17 18h5M9 19h3M16 19h6M9 20h4M16 20h5",
        fronthighlight: femaleHair22fronthighlight,
        frontshadow: femaleHair22frontshadow,
      };
    }
    case 23: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M17 4h4M16 5h6M15 6h8M10 7h1M14 7h9M9 8h1M11 8h13M11 9h13M10 10h15M9 11h16M8 12h17M8 13h17M8 14h17M8 15h5M14 15h10M8 16h3M17 16h5M9 17h2M17 17h5M10 18h1M18 18h3M18 19h3M18 20h2",
        fronthighlight: femaleHair23fronthighlight,
        frontshadow: femaleHair23frontshadow,
      };
    }
    case 24: {
      return {
        backbase:
          "M21 20h2M18 21h4M23 21h1M18 22h6M18 23h7M18 24h7M18 25h7M17 26h9M16 27h10M17 28h10M20 29h4M25 29h2",
        backhighlight: femaleHair24backhighlight,
        backshadow: femaleHair24backshadow,
        frontbase:
          "M13 9h6M12 10h8M11 11h10M10 12h11M10 13h12M10 14h12M10 15h3M14 15h1M16 15h6M17 16h6M17 17h6M18 18h5M11 19h1M18 19h6M11 20h2M18 20h3M23 20h1M11 21h1M22 21h1",
        fronthighlight: femaleHair24fronthighlight,
        frontshadow: femaleHair24frontshadow,
      };
    }
    case 25: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M17 3h4M16 4h6M15 5h8M15 6h9M15 7h10M12 8h13M11 9h14M10 10h16M9 11h17M9 12h17M8 13h18M8 14h8M17 14h9M8 15h7M17 15h9M8 16h6M17 16h9M8 17h6M18 17h8M8 18h5M18 18h7M9 19h4M18 19h7M10 20h3M18 20h1M20 20h4M11 21h2M20 21h3M19 22h3M19 23h2",
        fronthighlight: femaleHair25fronthighlight,
        frontshadow: femaleHair25frontshadow,
      };
    }
    case 26: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M12 4h1M14 4h1M17 4h1M19 4h1M11 5h10M10 6h12M11 7h12M10 8h14M11 9h12M12 10h10M11 11h10M10 12h11M10 13h12M10 14h12M10 15h3M14 15h8M10 16h1M16 16h6M17 17h4M18 18h2M18 19h1",
        fronthighlight: femaleHair26fronthighlight,
        frontshadow: femaleHair26frontshadow,
      };
    }
    case 27: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M17 8h1M19 8h1M12 9h8M21 9h1M11 10h10M10 11h13M9 12h13M9 13h14M8 14h14M8 15h15M9 16h2M17 16h1M19 16h3M10 17h1M18 17h3M22 17h1M9 18h2M18 18h4M9 19h3M17 19h4M10 20h3M16 20h3",
        fronthighlight: femaleHair27fronthighlight,
        frontshadow: femaleHair27frontshadow,
      };
    }
    case 28: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M10 7h3M18 7h3M9 8h5M17 8h5M8 9h15M8 10h15M8 11h15M9 12h13M8 13h15M7 14h18M6 15h6M14 15h12M7 16h5M16 16h9M6 17h6M17 17h8M5 18h7M17 18h9M4 19h8M17 19h3M21 19h6M4 20h8M17 20h10M5 21h6M18 21h1M20 21h6M6 22h4M21 22h4M5 23h6M20 23h6M4 24h8M19 24h8M3 25h3M7 25h4M20 25h4M25 25h3M3 26h7M21 26h7M4 27h5M22 27h5M6 28h3M22 28h3M7 29h3M21 29h3M7 30h3M21 30h3M6 31h3M22 31h3",
        fronthighlight: femaleHair28fronthighlight,
        frontshadow: femaleHair28frontshadow,
      };
    }
    case 29: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M14 9h3M13 10h5M12 11h7M12 12h5M18 12h2M12 13h4M17 13h1M19 13h1M11 14h1M13 14h1M16 14h1M18 14h2M17 15h1M19 15h1M19 16h2M19 17h2M18 18h3M18 19h2",
        fronthighlight: femaleHair29fronthighlight,
        frontshadow: femaleHair29frontshadow,
      };
    }
    case 30: {
      return {
        backbase: undefined,
        backhighlight: undefined,
        backshadow: undefined,
        frontbase:
          "M13 8h4M12 9h6M11 10h8M10 11h9M11 12h4M17 12h3M12 13h2M16 13h1M19 13h1M11 14h1M15 14h1M18 14h2M17 15h1M19 15h1M19 16h1M18 18h1",
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 30 45"
              shapeRendering="crispEdges"
              className={styles.color}
            >
              <path stroke={`#${hairColor}`} d={BackBase} />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 30 45"
              shapeRendering="crispEdges"
              className={styles.color}
            >
              <path stroke={`#${hairColor}`} d={FrontBase} />
            </svg>
          </React.Fragment>
        </div>
      )}
    </>
  );
};

export default FemaleHair;
