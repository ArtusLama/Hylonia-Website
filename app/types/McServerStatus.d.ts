interface McServerStatus {
    online: boolean
    version?: string
    players?: {
        online: number
        max: number
    }
}
