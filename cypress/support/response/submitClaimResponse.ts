export interface SubmitClaimResponse {
    data: {
        id: number,
        referenceId: string,
        claimEvent: {
            id: number,
            name: string,
            status: boolean,
            isDeleted: boolean
        }
    }
}