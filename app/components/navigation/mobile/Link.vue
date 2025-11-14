<script setup lang="ts">
const { link } = defineProps<{
    link: NavigationLink
}>()
</script>

<template>
    <UiButton
        as-child
        variant="ghost"
        class="text-base"
    >
        <NuxtLinkLocale
            :to="link.to"
            class="font-semibold text-muted-foreground tracking-tight"
            active-class="text-primary font-black underline decoration-1"
        >
            {{ link.label }}
        </NuxtLinkLocale>
    </UiButton>
</template>
