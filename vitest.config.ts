import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    globals: true,
    environment: "happy-dom",
    setupFiles: ["test/setup.ts"],
    css: false,
  },
});
