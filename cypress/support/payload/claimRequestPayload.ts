export interface CreateClaimPayload {
    RequestClaim: {
        claimEventId: number,
        currencyId: string,
        remarks: string
    }
    
}