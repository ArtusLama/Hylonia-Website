const TeamRoles = ["owner", "admin", "dev", "srMod", "mod", "srContent", "content", "supporter"] as const
type TeamRoleType = typeof TeamRoles[number]

interface TeamRole {
    type: TeamRoleType
    sortOrder: number
}
