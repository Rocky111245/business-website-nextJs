// app/components/fonts.ts
import {
    Cinzel,
    Playfair_Display,
    Cormorant_Garamond,
    Bebas_Neue,
    Montserrat_Alternates,
    Oswald,
    DM_Serif_Display,
    Abril_Fatface,
} from "next/font/google";

// Each call must be assigned to a const at module scope
export const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"], display: "swap" });
export const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], display: "swap" });
export const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["700"], display: "swap" });
export const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"], display: "swap" }); // Bebas Neue only has 400
export const montAlt = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"], display: "swap" });
export const oswald = Oswald({ subsets: ["latin"], weight: ["700"], display: "swap" });
export const dmserif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], display: "swap" });
export const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"], display: "swap" }); // Abril Fatface is 400 only

// Optional convenience export
export const fonts = { cinzel, playfair, cormorant, bebas, montAlt, oswald, dmserif, abril };
