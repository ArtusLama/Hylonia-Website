<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>

<template>
    <NuxtLink
        :to="to"
        class="text-footer-muted-foreground/75 underline-base underline-center underline-ease-spring underline-[0.5px] hover:underline-expanded text-sm"
    >
        <slot />
    </NuxtLink>
</template>
