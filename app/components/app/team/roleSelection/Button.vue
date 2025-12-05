<script setup lang="ts">
defineProps<{
    isSelected: boolean
}>()
</script>

<template>
    <UiButton
        variant="outline"
        size="sm"
        class="font-semibold rounded-full hover:border-primary hover:bg-primary/10 transition-colors"
        :class="isSelected ? 'border-primary bg-primary dark:bg-accent hover:bg-primary/80 text-primary-foreground dark:text-primary hover:text-primary-foreground' : ''"
    >
        <slot />
    </UiButton>
</template>
