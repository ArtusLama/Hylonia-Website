<script setup lang="ts">
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
    <div
        v-gsap.timeline.pinned
        class="relative w-screen h-screen flex items-center justify-center"
    >
        <NuxtImg
            v-gsap.add.to="{
                scale: 0.75,
                borderRadius: '24px',
                duration: 0.25,
            }"
            src="/img/HomeHeroBackground.png"
            alt="Hero Section Background"
            class="brightness-50 absolute -z-10 object-cover w-full h-full"
        />

        <h1
            ref="logo-switch-trigger"
            class="text-5xl font-bold text-primary-foreground"
        >
            Hylonia.net
        </h1>
    </div>
</template>
