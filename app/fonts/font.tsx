import { Antonio } from "next/font/google";

import { Libre_Baskerville } from "next/font/google";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const sohneBold = localFont({
  src: "../fonts/sohne/test-soehne-buch.woff2",
  variable: "--font-sohneBold",
});

const migraLight = localFont({
  src: "../fonts/FontsFree-Net-Migra-Extralight.ttf",
  fallback: ["system-ui", "migraLight"],
  display: "fallback",
  variable: "--font-migraLight",
});

const antonio = Antonio({
  subsets: ["latin"],
  fallback: ["system-ui", "Antonio"],
  display: "fallback",
  variable: "--font-antonio",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  fallback: ["system-ui", "libre_baskerville"],
  variable: "--font-libre_baskerville",
});

export const fonts = {
  antonio,
  sohneBold,
  migraLight,
  libre_baskerville,
};
