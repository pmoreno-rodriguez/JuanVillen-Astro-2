// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_URL || "/",
  site: "https://juanvillen.es/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), icon()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Lato",
      cssVariable: "--font-lato",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/lato-regular-webfont.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/lato-italic-webfont.woff2"],
            weight: 400,
            style: "italic",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/lato-bold-webfont.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Raleway",
      cssVariable: "--font-raleway",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/raleway-regular-webfont.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/raleway-semibold-webfont.woff2"],
            weight: 600,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/raleway-bold-webfont.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
