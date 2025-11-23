<script setup lang="ts">
const { links } = defineProps<{
    links: NavigationLink[]
}>()

const middleIndex = Math.ceil(links.length / 2)
const firstHalf = links.slice(0, middleIndex)
const secondHalf = links.slice(middleIndex)
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 px-8 py-4 flex items-center justify-between z-40">
        <div class="flex gap-x-4 grow basis-0 justify-end">
            <NavigationDesktopLink
                v-for="link in firstHalf"
                :key="link.to"
                :link="link"
            />
        </div>

        <NuxtImg
            src="/img/logo.png"
            :width="50"
            :height="50"
            alt="Server Logo"
            class="mx-8"
        />

        <div class="flex gap-x-4 grow basis-0 justify-start">
            <NavigationDesktopLink
                v-for="link in secondHalf"
                :key="link.to"
                :link="link"
            />
        </div>

        <div class="absolute right-8">
            <ColorSchemeToggleButton />
        </div>
    </nav>
</template>
