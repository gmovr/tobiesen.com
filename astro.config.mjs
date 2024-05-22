import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), preact(), sitemap()],
  output: "server",
  site: "https://tobiesen.com",
  adapter: netlify(),
});
