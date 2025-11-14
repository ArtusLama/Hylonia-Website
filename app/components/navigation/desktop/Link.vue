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
            class="tracking-tight text-muted-foreground"
            active-class="font-semibold text-primary underline decoration-1"
        >
            {{ link.label }}
        </NuxtLinkLocale>
    </UiButton>
</template>
