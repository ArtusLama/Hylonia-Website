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
            class="group tracking-tight text-muted-foreground transition-all hover:text-primary"
            active-class="text-primary [&>span]:underline-expanded"
        >
            <span class="underline-base underline-thin underline-center underline-ease-spring group-hover:underline-expanded">
                {{ link.label }}
            </span>
        </NuxtLinkLocale>
    </UiButton>
</template>
