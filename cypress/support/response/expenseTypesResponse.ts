export interface CreateExpenseTypesResponse {
    data: {
        id: number,
        name: string,
        description: string,
        status: boolean
    }
}