<script setup lang="ts">
defineOgImageComponent("Main")
useSeoMeta({
    title: "", // Leave empty to use titleTemplate from app.vue
    // TODO: Review description
    description: "Hylonia.net ist ein deutscher Minecraft-Server mit mehreren spannenden Spielmodi wie SMP und OneBlock. Mit selbst entwickelten Plugins und einzigartigem Design bieten wir dir ein unvergessliches Spielerlebnis. Bei uns steht dein Spielspaß an erster Stelle. Werde Teil unserer lebendigen Community!",
})

const { showTextLogo } = useNavBarLogoState()
const navLogoSwitchTrigger = useTemplateRef<HTMLDivElement>("logo-switch-trigger")

useIntersectionObserver(
    navLogoSwitchTrigger,
    ([entry]) => {
        showTextLogo.value = !entry?.isIntersecting
    },
    {
        threshold: 0.5,
        rootMargin: "-60px",
    },
)
</script>

<template>
    <div>
        <div>
            <p>WELCOME</p>
            <UiButton ref="logo-switch-trigger">
                Hello
            </UiButton>
            <p>HAHHA odfj waiodjd wd wpüd ad wa </p>
        </div>
    </div>
</template>
