<script setup lang="ts">
const isDesktop = useMediaQuery("(min-width: 768px)")

const navigationLinks: NavigationLink[] = [
    { label: "Home", to: "/" },
    { label: "FAQ", to: "/faq" },
    { label: "Gamemodes", to: "/gamemodes" },
    { label: "Leaderboard", to: "/leaderboard" },
    { label: "Team", to: "/team" },
    { label: "Rules", to: "/rules" },
]
</script>

<template>
    <NavigationDesktopNavigation
        v-if="isDesktop"
        :links="navigationLinks"
    />
    <NavigationMobileNavigation
        v-else
        :links="navigationLinks"
    />
</template>
