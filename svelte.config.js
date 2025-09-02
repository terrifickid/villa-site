import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import dotenvJSON from 'dotenv-json';

// Load .env.json only if not in Vercel environment
if (!process.env.VERCEL) {
  dotenvJSON(); // Loads ./env.json by default
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $components: "src/components",
    },
    // adaptertest-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

export default config;
