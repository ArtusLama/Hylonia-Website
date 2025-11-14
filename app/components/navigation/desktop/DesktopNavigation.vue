<script setup lang="ts">
const { links } = defineProps<{
    links: NavigationLink[]
}>()

const middleIndex = Math.ceil(links.length / 2)
const firstHalf = links.slice(0, middleIndex)
const secondHalf = links.slice(middleIndex)
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 py-4 flex items-center justify-center gap-x-8 z-40">
        <div class="flex gap-x-4 flex-1 justify-end">
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
        />

        <div class="flex gap-x-4 flex-1 justify-start">
            <NavigationDesktopLink
                v-for="link in secondHalf"
                :key="link.to"
                :link="link"
            />
        </div>
    </nav>
</template>
