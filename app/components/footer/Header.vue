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
    void navigator.clipboard.writeText(serverAddress)
    startShowCopied()
}
</script>

<template>
    <div class="flex items-center gap-8">
        <p class="text-lg font-bold">
            JOIN NOW:
        </p>
        <UiButton
            size="lg"
            class="bg-footer-muted uppercase text-lg font-bold font-mono"
            @click="copyServerAddress"
        >
            <Icon :name=" showCopyIcon ? 'lucide:clipboard' : 'lucide:check'" />
            hylonia.net
        </UiButton>

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
