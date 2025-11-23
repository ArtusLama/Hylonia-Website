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
            class="tracking-tight text-muted-foreground relative inline-grid"
            active-class="font-semibold text-primary underline decoration-1"
        >
            <span class="col-start-1 row-start-1">{{ link.label }}</span>
            <span
                class="col-start-1 row-start-1 font-semibold invisible"
                aria-hidden="true"
            >{{ link.label }}</span>
        </NuxtLinkLocale>
    </UiButton>
</template>
