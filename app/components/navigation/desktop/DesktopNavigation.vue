<script setup lang="ts">
const { links } = defineProps<{
    links: NavigationLink[]
}>()

const route = useRoute()
const { showTextLogo: textLogoTriggered } = useNavBarLogoState()
const showTextLogo = computed(() => {
    if (route.name && !String(route.name).startsWith("index")) {
        return true
    }
    return textLogoTriggered.value
})

const middleIndex = Math.ceil(links.length / 2)
const firstHalf = links.slice(0, middleIndex)
const secondHalf = links.slice(middleIndex)
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 px-8 py-3 flex items-center justify-between z-40 bg-background border-b">
        <div class="flex gap-x-4 grow basis-0 justify-end transition-[width] duration-500">
            <NavigationDesktopLink
                v-for="link in firstHalf"
                :key="link.to"
                :link="link"
            />
        </div>

        <div
            class="mx-8 transition-[width] duration-700 flex items-center justify-center"
            :style="{ width: showTextLogo ? '200px' : '50px', height: '50px' }"
        >
            <NuxtImg
                v-if="showTextLogo"
                src="/img/text-logo.png"
                :width="200"
                :height="50"
                alt="Server Text Logo"
            />
            <NuxtImg
                v-else
                src="/img/logo.png"
                :width="50"
                :height="50"
                alt="Server Logo"
            />
        </div>

        <div class="flex gap-x-4 grow basis-0 justify-start transition-[width] duration-500">
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
