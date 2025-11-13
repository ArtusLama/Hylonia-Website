import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: [
        "@nuxt/icon",
        "@nuxt/hints",
        "@nuxtjs/html-validator",
        "@nuxt/image",
        "@nuxt/eslint",
        "shadcn-nuxt",
        "@vueuse/nuxt",
        "@nuxtjs/color-mode",
        "@nuxtjs/seo",
    ],

    eslint: {
        config: {
            stylistic: true,
        },
    },

    // Tailwind CSS Configuration -> use @nuxtjs/tailwindcss if v7 is released
    css: ["~/assets/css/tailwind.css"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    // Use light mode by default -> fits better with the design
    colorMode: {
        preference: "light",
        fallback: "light",
    },
})
