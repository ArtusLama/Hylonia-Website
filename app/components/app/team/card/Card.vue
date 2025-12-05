<script setup lang="ts">
const { member } = defineProps<{
    member: TeamMember
}>()

const { locale } = useI18n()
const locales = useNuxtApp().$i18n.locales
const bcp47Locale = computed(() =>
    locales.value.find(l => l.code === locale.value)?.language || locale.value,
)

const timeSince = computed(() => {
    const start = new Date(member.joinedAt)
    const end = new Date()

    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()
    let days = end.getDate() - start.getDate()

    // Adjust for negative days
    if (days < 0) {
        months--
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0)
        days += prevMonth.getDate()
    }

    // Adjust for negative months
    if (months < 0) {
        years--
        months += 12
    }

    return { years, months, days }
})
</script>

<template>
    <div class="border rounded-xl bg-background overflow-hidden flex relative w-100 h-30">
        <div class="px-4 pt-4 md:pt-6 bg-accent shrink-0 flex items-end relative">
            <div class="absolute top-1 left-1/2 -translate-x-1/2 text-center h-7 w-full px-1 flex items-center justify-center">
                <p class="text-sm tracking-tight font-semibold leading-3">
                    {{ $t(`team.roles.${member.role.type}.long`) }}
                </p>
            </div>

            <McSkinRender2dBust
                :uuid="member.uuid"
                class="size-22 object-contain translate-y-1!"
            />
        </div>
        <div class="pl-4 pr-24 py-4">
            <h3 class="font-semibold text-lg">
                <!-- TODO: place real mc name here. Maybe add also discord name -->
                ArtusDevTest
            </h3>
            <p class="text-sm text-muted-foreground">
                {{ $t("team.memberCard.since") }}
                <NuxtTime
                    :datetime="member.joinedAt"
                    :locale="bcp47Locale"
                />
            </p>

            <div class="absolute right-0 top-0 bottom-0 p-2 bg-accent flex flex-col justify-between gap-2 text-sm text-muted-foreground text-center">
                <p class="font-semibold leading-3">
                    {{ timeSince.years }}<br>
                    <span class="text-xs font-normal">
                        {{ $t("time.years." + (timeSince.years === 1 ? "sg" : "pl")) }}
                    </span>
                </p>
                <p class="font-semibold leading-3">
                    {{ timeSince.months }}<br>
                    <span class="text-xs font-normal">
                        {{ $t("time.months." + (timeSince.months === 1 ? "sg" : "pl")) }}
                    </span>
                </p>
                <p class="font-semibold leading-3">
                    {{ timeSince.days }}<br>
                    <span class="text-xs font-normal">
                        {{ $t("time.days." + (timeSince.days === 1 ? "sg" : "pl")) }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
