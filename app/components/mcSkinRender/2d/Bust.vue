<script setup lang="ts">
const props = withDefaults(defineProps<{
    uuid?: string
    secondLayer?: boolean
}>(), {
    uuid: "MHF_Steve", // API specific default for Steve skin
    secondLayer: true,
})

const url = computed(() => {
    return `https://minotar.net${props.secondLayer ? "/armor" : ""}/bust/${props.uuid}/16.png`
})
</script>

<template>
    <img
        :src="url"
        alt="Bust Minecraft Skin Render"
        class="pixelated-img select-none pointer-events-none"
    >
</template>

<style scoped>
.pixelated-img {
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}
</style>
