import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import dotenvJSON from 'dotenv-json';

// Load env.json
dotenvJSON(); // Loads ./env.json by default, or specify { path: './path/to/env.json' }
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $components: "src/components",
    },
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

export default config;
