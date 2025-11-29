<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const validTabs = ["general", "discord", "smp"] as const
type ValidTab = typeof validTabs[number]
const defaultTab: ValidTab = "general"

function isValidTab(tab: unknown): tab is ValidTab {
    return validTabs.includes(tab as ValidTab)
}

function getTabFromQuery(query: string | undefined): ValidTab {
    return isValidTab(query) ? query : defaultTab
}

function updateUrlForTab(tab: ValidTab) {
    if (tab === defaultTab) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { tab: _, ...restQuery } = route.query
        router.push({ query: restQuery })
    } else {
        router.push({ query: { ...route.query, tab } })
    }
}

const selectedTab = ref<ValidTab>(getTabFromQuery(route.query.tab as string))

watch(selectedTab, updateUrlForTab)
watch(() => route.query.tab, (newTab) => {
    selectedTab.value = getTabFromQuery(newTab as string)
})

const isDesktop = useMediaQuery("(min-width: 768px)")
const tabsOrientation = computed(() => isDesktop.value ? "horizontal" : "vertical")
</script>

<template>
    <UiTabs
        v-model:model-value="selectedTab"
        :orientation="tabsOrientation"
    >
        <UiTabsList
            class="mx-auto flex"
            :class="{ 'flex-col w-56': tabsOrientation == 'vertical' }"
        >
            <UiTabsTrigger value="general">
                <Icon
                    name="lucide:layout-grid"
                />
                Allgemein
            </UiTabsTrigger>
            <UiTabsTrigger value="discord">
                <Icon
                    name="simple-icons:discord"
                />
                Discord
            </UiTabsTrigger>
            <UiTabsTrigger value="smp">
                <Icon
                    name="lucide:swords"
                />
                Survival (SMP)
            </UiTabsTrigger>
        </UiTabsList>
        <UiTabsContent value="general">
            <AppRulesSectionGeneral />
        </UiTabsContent>
        <UiTabsContent value="discord">
            <AppRulesSectionDiscord />
        </UiTabsContent>
        <UiTabsContent value="smp">
            <AppRulesSectionSmp />
        </UiTabsContent>
    </UiTabs>
</template>
