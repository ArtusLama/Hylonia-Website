declare module "nuxt/schema" {

    /* Private Runtime Config -> e.g. for secrets
    interface RuntimeConfig {

    }
    */

    interface PublicRuntimeConfig {
        mcServer: {
            address: string
        }
    }
}

export { }
