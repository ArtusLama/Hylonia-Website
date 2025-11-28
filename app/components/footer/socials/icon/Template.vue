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
        class="bg-transparent border-footer-muted hover:bg-footer-muted/80 hover:text-footer-muted-foreground"
    >
        <NuxtLinkLocale
            :to="to"
            aria-label="Social Media Link"
        >
            <Icon
                name="lucide:trees"
                :size="22"
            />
        </NuxtLinkLocale>
    </UiButton>
</template>
