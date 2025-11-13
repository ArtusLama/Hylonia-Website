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
        "@nuxtjs/i18n",
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

    // i18n for translations -> currently only German supported
    i18n: {
        // baseUrl: "https://TheWebsiteUrl...", -> TODO: Set the website URL
        defaultLocale: "de",
        locales: [
            {
                code: "de",
                language: "de-DE",
                name: "Deutsch",
                file: "de.json",
            },
        ],
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
        },
    },
})
