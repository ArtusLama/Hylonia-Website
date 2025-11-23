<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <section class="text-footer-muted-foreground">
        <h3 class="font-bold text-lg uppercase text-footer-foreground">
            {{ title }}
        </h3>
        <slot />
    </section>
</template>
