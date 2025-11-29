<script setup lang="ts">
const serverStatsStore = useMcServerStatusStore()
const serverStatus: ComputedRef<"loading" | "online" | "offline"> = computed(() => {
    if (!serverStatsStore.stats) return "loading"
    return serverStatsStore.stats.online ? "online" : "offline"
})

onMounted(() => useIntervalFn(serverStatsStore.fetchServerStatus, 4 * 60 * 1000, { immediate: true, immediateCallback: true }))

const { ready: showCopyIcon, start: startShowCopied } = useTimeout(2000, { controls: true, immediate: false })

function copyServerAddress() {
    const serverAddress = useRuntimeConfig().public.mcServer.address
    navigator.clipboard.writeText(serverAddress)
    startShowCopied()
}
</script>

<template>
    <div class="flex flex-col md:flex-row items-center gap-x-8 gap-y-2">
        <div class="text-center md:text-left">
            <p class="text-lg font-bold">
                Play Now:
            </p>
            <p class="text-footer-muted-foreground font-semibold">
                Java & Bedrock
            </p>
        </div>
        <div>
            <UiButton
                size="lg"
                class="uppercase text-lg font-bold font-mono cursor-pointer select-text"
                @click="copyServerAddress"
            >
                <Icon :name=" showCopyIcon ? 'lucide:clipboard' : 'lucide:check'" />
                hylonia.net
            </UiButton>
        </div>

        <div class="flex items-center gap-2">
            <span
                :class="serverStatus === 'loading'
                    ? 'bg-footer-muted-foreground/50'
                    : serverStatus === 'online'
                        ? 'bg-green-500 after:bg-green-500 after:rounded-full after:absolute after:inset-0 after:animate-ping'
                        : 'bg-red-500'"
                class="size-3 rounded-full animate-pulse mt-px relative shrink-0"
            />
            <p
                v-if="serverStatus === 'loading'"
                class="text-footer-muted-foreground/50"
            >
                Loading status...
            </p>
            <p
                v-else-if="serverStatus === 'online' && serverStatsStore.stats?.players"
                class="font-semibold"
            >
                <span class="font-bold">{{ serverStatsStore.stats.players.online }}</span>
                players are currently online.
            </p>
            <p
                v-else
                class="font-semibold text-red-500/75"
            >
                OFFLINE
            </p>
        </div>
    </div>
</template>
