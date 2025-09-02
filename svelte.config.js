import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import dotenvJSON from 'dotenv-json';

// Load .env.json only if not in Vercel environment
if (!process.env.VERCEL) {
  dotenvJSON(); // Loads ./env.json by default
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $components: 'src/components',
    },
    adapter: adapter({
      runtime: 'nodejs20.x' // Explicitly set to bypass Node.js version check
    }),
  },
  preprocess: vitePreprocess(),
};

export default config;