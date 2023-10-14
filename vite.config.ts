import { resolve } from "node:path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"
import EsLint from "vite-plugin-linter"
import tsconfigPaths from "vite-tsconfig-paths"

import * as packageJson from "./package.json"

const { EsLinter, linterPlugin } = EsLint

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsconfigPaths(),
    linterPlugin({
      include: ["./NepaliDatePicker/**/*.{ts,tsx}"],
      linters: [new EsLinter(({ configEnv }))],
    }),
    dtsPlugin({
      include: ["NepaliDatePicker/"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    cssCodeSplit: false,
    minify: true,
    reportCompressedSize: true,

    lib: {
      entry: resolve(__dirname, "./NepaliDatePicker/index.ts"),
      name: "NepaliDatePicker",
      formats: ["es", "umd"],
      fileName: (format) => `nepali-datepicker.${format}.js`,
    },

    outDir: resolve(__dirname, "dist"),

    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
