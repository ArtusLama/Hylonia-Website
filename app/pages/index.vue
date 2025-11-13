<script setup lang="ts">
defineOgImageComponent("Main")
useSeoMeta({
    title: "", // Leave empty to use titleTemplate from app.vue
    // TODO: Review description
    description: "Hylonia.net ist ein deutscher Minecraft-Server mit mehreren spannenden Spielmodi wie SMP und OneBlock. Mit selbst entwickelten Plugins und einzigartigem Design bieten wir dir ein unvergessliches Spielerlebnis. Bei uns steht dein Spielspaß an erster Stelle. Werde Teil unserer lebendigen Community!",
})
</script>

<template>
    <div>
        <p>WELCOME</p>
        <UiButton>
            Hello
        </UiButton>
    </div>
</template>
