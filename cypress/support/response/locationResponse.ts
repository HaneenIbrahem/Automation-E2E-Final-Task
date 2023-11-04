export interface CreateLocationResponse {
    data:{
        id: number,
        name: string,
        country: {
            countryCode: string,
            name: string,
            countryName: string
        },
        province: string,
        city: string,
        address: string,
        zipCode: string,
        phone: string,
        fax: string,
        note: string,
        noOfEmployees: number
    }
}