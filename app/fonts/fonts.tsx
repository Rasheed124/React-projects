

import localFont from "next/font/local";



const calibreBold = localFont({
  src: "../fonts/calibre/CalibreBold.otf",
  fallback: ["system-ui", "calibre-bold"],
  display: "fallback",
  variable: "--font-calibre-bold",
});

const calibreMedium = localFont({
  src:  "../fonts/calibre/CalibreMedium.otf",
  fallback: ["system-ui", "calibre-medium"],
  display: "fallback",
  variable: "--font-calibre-medium",
});




export const fonts = {

  calibreBold,
  calibreMedium,

};
