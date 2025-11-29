<script setup lang="ts">
defineProps<{
    links: NavigationLink[]
}>()

const isOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
    isOpen.value = false
})

const lockScroll = useScrollLock(document.body, isOpen.value)
syncRef(isOpen, lockScroll)
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-40 p-2">
        <div
            class="border bg-card shadow rounded-lg px-4 py-4 transition-[height] duration-300 ease-in-out overflow-hidden"
            :class="isOpen ? 'h-[calc(100dvh-1rem)]' : 'h-[78px]'"
        >
            <div
                class="flex items-center justify-between"
            >
                <NuxtLinkLocale to="/">
                    <NuxtImg
                        src="/img/text-logo.png"
                        :width="150"
                        :height="30"
                        alt="Server Logo"
                    />
                </NuxtLinkLocale>
                <div class="flex gap-2 items-center">
                    <ColorSchemeToggleButton />
                    <NavigationMobileBurgerMenuButton v-model="isOpen" />
                </div>
            </div>
            <div class="mt-18 flex flex-col gap-y-2 items-start">
                <NavigationMobileLink
                    v-for="link in links"
                    :key="link.to"
                    :link="link"
                />
            </div>
        </div>
    </nav>
</template>
