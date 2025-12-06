<script setup lang="ts">
defineOgImageComponent("Main")
useSeoMeta({
    title: "", // Leave empty to use titleTemplate from app.vue
    // TODO: Review description
    description: "Hylonia.net ist ein deutscher Minecraft-Server mit mehreren spannenden Spielmodi wie SMP und OneBlock. Mit selbst entwickelten Plugins und einzigartigem Design bieten wir dir ein unvergessliches Spielerlebnis. Bei uns steht dein Spielspaß an erster Stelle. Werde Teil unserer lebendigen Community!",
})

definePageMeta({
    layout: "index-page",
})
</script>

<template>
    <div>
        <AppHero />
        <p
            v-for="n in 20"
            :key="n"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia saepe facilis atque aliquam quaerat libero? Consequuntur atque libero consectetur maxime dolores nulla molestiae! Quae quia dignissimos sed quisquam enim.
        </p>
    </div>
</template>
