import { defineConfig } from "vite"

export default defineConfig({
    base: "/",
    publicDir: "public",
    server: {
        host: true,
        open: true,
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
        sourcemap: true,
    },
})
