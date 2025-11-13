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
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator
            color="var(--color-primary)"
        />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
