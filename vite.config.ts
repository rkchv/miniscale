import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      formats: ['es'],
      name: 'Miniscale',
      fileName: 'miniscale',
    },
    copyPublicDir: false,
    // rollupOptions: {
    //   external: ['plyr'],
    // },
  },
  plugins: [],
});
