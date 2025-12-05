<script setup lang="ts">
// TODO: Replace with real data
const ownerRole: TeamRole = { type: "owner", sortOrder: 1 }
const adminRole: TeamRole = { type: "admin", sortOrder: 2 }
const devRole: TeamRole = { type: "dev", sortOrder: 3 }
const srModRole: TeamRole = { type: "srMod", sortOrder: 4 }
const modRole: TeamRole = { type: "mod", sortOrder: 5 }
const srContentRole: TeamRole = { type: "srContent", sortOrder: 6 }
const contentRole: TeamRole = { type: "content", sortOrder: 7 }
const supporterRole: TeamRole = { type: "supporter", sortOrder: 8 }

const testUuids = [
    "f0f9ae8a-98bb-499d-aa75-af77c3fb8689",
    "70553e0a-b500-4eeb-8e17-bfec5d057e30",
    "c84a9a09-b93f-4d1c-a758-4c89c78bd78b",
    "9edaa31a-7633-4a2a-a178-0f8edd271f0f",
    "c84a9a09-b93f-4d1c-a758-4c89c78bd78b",
]

const teamMembers: TeamMember[] = [
    {
        role: adminRole,
        uuid: testUuids[1],
        joinedAt: "2025-03-22",
    },
    {
        role: devRole,
        uuid: testUuids[2],
        joinedAt: "2021-06-10",
    },
    {
        role: srModRole,
        uuid: testUuids[3],
        joinedAt: "2021-09-05",
    },
    {
        role: ownerRole,
        uuid: testUuids[0],
        joinedAt: "2023-10-29",
    },
    {
        role: modRole,
        uuid: testUuids[4],
        joinedAt: "2022-11-15",
    },
    {
        role: srContentRole,
        uuid: testUuids[2],
        joinedAt: "2020-01-20",
    },
    {
        role: contentRole,
        uuid: testUuids[3],
        joinedAt: "2022-05-30",
    },
    {
        role: supporterRole,
        uuid: testUuids[1],
        joinedAt: "2023-07-12",
    },
]

const selected = ref<TeamRoleType[]>([])
const filteredMembers = computed(() => {
    return teamMembers.filter(member => selected.value.includes(member.role.type)).sort(sortMembers)
})

function sortMembers(a: TeamMember, b: TeamMember): number {
    if (a.role.sortOrder !== b.role.sortOrder) {
        return a.role.sortOrder - b.role.sortOrder
    }
    const dateA = new Date(a.joinedAt)
    const dateB = new Date(b.joinedAt)
    if (dateA.getTime() !== dateB.getTime()) {
        return dateA.getTime() - dateB.getTime()
    }
    return a.uuid.localeCompare(b.uuid) // TODO: replace with name when available
}
</script>

<template>
    <div class="space-y-8">
        <div class="flex flex-col items-center gap-4">
            <h1
                class="text-3xl font-bold"
            >
                {{ $t("team.header.title") }}
            </h1>
            <AppTeamRoleSelectionGroup @update:selected="(newSelected) => selected = newSelected" />
        </div>
        <div
            v-auto-animate
            class="flex flex-wrap gap-4 justify-center"
        >
            <LazyAppTeamCard
                v-for="member in filteredMembers"
                :key="member.uuid"
                :member="member"
            />
        </div>
    </div>
</template>
