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
</script>

<template>
    <UiTabs
        v-model:model-value="selectedTab"
    >
        <UiTabsList class="mx-auto">
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
