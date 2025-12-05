<script setup lang="ts">
const showAll = ref(true)

const roles = reactive<Record<TeamRoleType, boolean>>({
    owner: false,
    admin: false,
    dev: false,
    srMod: false,
    mod: false,
    srContent: false,
    content: false,
    supporter: false,
})
const selectedRoles = computed(() => {
    return Object.keys(roles).filter(key => showAll.value || roles[key as TeamRoleType]) as TeamRoleType[]
})

const emit = defineEmits<{
    (e: "update:selected", value: TeamRoleType[]): void
}>()
watch(selectedRoles, (newRoles) => {
    emit("update:selected", newRoles)
}, { immediate: true })

function toggle(roleKey: TeamRoleType) {
    roles[roleKey] = !roles[roleKey]
    if (roles[roleKey]) {
        showAll.value = false
    }
}

function toggleAll() {
    showAll.value = !showAll.value
    for (const key in roles) {
        roles[key as TeamRoleType] = !showAll.value
    }
}
</script>

<template>
    <div class="flex flex-wrap gap-1 justify-center">
        <AppTeamRoleSelectionButton
            :is-selected="showAll"
            class="border-primary mr-2"
            @click="toggleAll"
        >
            {{ $t("team.roleSelection.all") }}
        </AppTeamRoleSelectionButton>

        <AppTeamRoleSelectionButton
            v-for="role in Object.keys(roles) as TeamRoleType[]"
            :key="role"
            :is-selected="roles[role]"
            @click="toggle(role)"
        >
            {{ $t(`team.roles.${role}.short`) }}
        </AppTeamRoleSelectionButton>
    </div>
</template>
