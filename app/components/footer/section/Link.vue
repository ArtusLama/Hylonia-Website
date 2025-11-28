<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>

<template>
    <NuxtLinkLocale
        :to="to"
        class="underline-base underline-in-left underline-out-right underline-thin hover:underline-expanded"
    >
        <slot />
    </NuxtLinkLocale>
</template>
