// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     port: 3001,
//     watch: {
//       usePolling: true,
//     },
//   },
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ajouter le "resolve" ci dessous que si tu utilises un projet vite.js. En CRA, pas besoin.
  // Sans ça, il n'arrivera pas à importer les fichiers simples comme @theme/theme
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
