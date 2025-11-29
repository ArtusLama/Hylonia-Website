<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>

<template>
    <UiButton
        as-child
        size="icon-xl"
        variant="outline"
        class="bg-transparent border-footer-muted hover:bg-footer-muted/80 hover:text-footer-foreground transition-colors"
    >
        <NuxtLinkLocale
            :to="to"
            external
            target="_blank"
            aria-label="Social Media Link"
        >
            <slot />
        </NuxtLinkLocale>
    </UiButton>
</template>
