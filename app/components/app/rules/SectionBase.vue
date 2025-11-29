<script setup lang="ts">
defineProps<{
    lastUpdated?: string
}>()
</script>

<template>
    <div class="border p-4 rounded-lg space-y-4">
        <p
            v-if="lastUpdated"
            class="text-sm text-muted-foreground"
        >
            Letzte Änderung am {{ lastUpdated }}
        </p>
        <div class="prose dark:prose-invert">
            <slot />
        </div>
    </div>
</template>
