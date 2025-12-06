<script setup lang="ts">
useLocaleHead()
useHead({
    titleTemplate: t => t ? `${t} - Hylonia.net` : "Hylonia.net - Wo Spielspaß an erster Stelle steht",
})
useSchemaOrg([
    defineOrganization({
        name: "Hylonia",
        logo: "/img/logo.png",
        url: "https://hylonia.net",
    }),
])

// Integrate GSAP with Lenis:
const onFrame = (time: number) => {
    useLenis().value?.raf(time * 1000)
}

onMounted(() => {
    useGSAP().ticker.add(onFrame)
})

onBeforeUnmount(() => {
    useGSAP().ticker.remove(onFrame)
})
</script>

<template>
    <div>
        <VueLenis
            root
            :options="{ duration: 0.75, autoToggle: true }"
        />

        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator
            color="var(--color-primary)"
        />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
