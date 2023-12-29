import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://sea.rockyno.de',
  
  integrations: [tailwind(), alpinejs(), partytown(), sentry(), spotlightjs(), robotsTxt()]
});