<script setup lang="ts">
defineProps<{
    lastUpdated?: string
}>()
</script>

<template>
    <div class="border px-10 py-8 rounded-lg space-y-10">
        <div class="prose dark:prose-invert">
            <slot />
        </div>
        <p
            v-if="lastUpdated"
            class="text-sm text-muted-foreground"
        >
            Letzte Änderung am {{ lastUpdated }}
        </p>
    </div>
</template>
