<script lang="ts" setup>
// TODO: Create error page design

import type { NuxtError } from "#app"

defineProps<{
    error: NuxtError
}>()

function handleError() {
    clearError({
        redirect: "/",
    })
}
</script>

<template>
    <div>
        <p>Error</p>
        <p>{{ error.message }}</p>
        <UiButton @click="handleError">
            Go to Home
        </UiButton>
    </div>
</template>
