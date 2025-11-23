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
    <div class="flex items-center gap-8">
        <p class="text-lg font-bold">
            JOIN NOW:
        </p>
        <UiButton
            size="lg"
            class="bg-footer-muted uppercase font-bold"
            @click="copyServerAddress"
        >
            <Icon :name=" showCopyIcon ? 'lucide:clipboard' : 'lucide:check'" />
            hylonia.net
        </UiButton>

        <div class="flex items-center gap-2">
            <span
                :class="serverStatsStore.stats?.online ? 'bg-green-500 after:bg-green-500 after:rounded-full after:absolute after:inset-0 after:animate-ping' : 'bg-red-500'"
                class="size-3 rounded-full animate-pulse mt-px relative shrink-0"
            />
            <p
                v-if="serverStatsStore.stats?.players"
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
