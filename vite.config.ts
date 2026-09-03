import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On Cloudflare Pages (CF_PAGES is set) or root domains, base is '/'.
  // On GitHub Actions deploying to the project subpath, base is '/ariel-mines/'.
  base: process.env.CF_PAGES ? '/' : (process.env.GITHUB_ACTIONS === 'true' ? '/ariel-mines/' : '/'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
