import { acceptHMRUpdate, defineStore } from "pinia"

export const useMcServerStatusStore = defineStore("mcServerStatus", () => {
    const stats = ref<McServerStatus | undefined>()

    async function fetchServerStatus() {
        const ip = useRuntimeConfig().public.mcServer.address
        try {
            const data = await $fetch<McServerStatus>(`https://api.mcsrvstat.us/3/${ip}`)
            stats.value = data
        } catch (error) {
            console.error("Error fetching Minecraft server status:", error)
            stats.value = undefined
        }
    }

    return {
        stats,
        fetchServerStatus,
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMcServerStatusStore, import.meta.hot))
}
