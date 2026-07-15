import { defineConfig } from "vite"
import { resolve } from "path"

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
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                terms: resolve(__dirname, "terms.html"),
                privacy: resolve(__dirname, "privacy.html"),
                delivery: resolve(__dirname, "delivery-policy.html"),
                refund: resolve(__dirname, "refund-policy.html"),
            },
        },
    },
})
