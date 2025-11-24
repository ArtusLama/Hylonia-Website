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
            class="tracking-tight text-muted-foreground transition-all hover:text-primary underline-base underline-from-center hover:underline-expanded"
            active-class="text-primary underline-expanded"
        >
            {{ link.label }}
        </NuxtLinkLocale>
    </UiButton>
</template>
