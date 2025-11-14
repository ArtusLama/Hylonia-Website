<script setup lang="ts">
const serverStatsStore = useMcServerStatusStore()

useIntervalFn(serverStatsStore.fetchServerStatus, 4 * 60 * 1000, { immediate: true, immediateCallback: true })

const { ready: showCopyIcon, start: startShowCopied } = useTimeout(2000, { controls: true, immediate: false })

function copyServerAddress() {
    const serverAddress = useRuntimeConfig().public.mcServer.address
    void navigator.clipboard.writeText(serverAddress)
    startShowCopied()
}
</script>

<template>
    <div>
        <div class="flex items-center gap-8">
            <p class="text-lg font-bold">
                JOIN NOW:
            </p>
            <UiButton
                size="lg"
                class="bg-footer-muted uppercase font-semibold"
                @click="copyServerAddress"
            >
                <Icon :name=" showCopyIcon ? 'lucide:clipboard' : 'lucide:check'" />
                hylonia.net
            </UiButton>

            <div class="flex items-center gap-2">
                <span
                    :class="serverStatsStore.stats?.online ? 'bg-green-500 animate-ping' : 'bg-red-500'"
                    class="size-3 rounded-full animate-pulse mt-px"
                />
                <p v-if="serverStatsStore.stats?.players">
                    <span class="font-semibold">{{ serverStatsStore.stats.players.online }}</span>
                    players currently online
                </p>
                <p
                    v-else
                    class="font-semibold text-red-500/75"
                >
                    OFFLINE
                </p>
            </div>
        </div>
    </div>
</template>
