export interface CreateLocationResponse {
    location:{
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


    // {
    //     "id": 32,
    //     "name": "haneen",
    //     "country": {
    //         "countryCode": "HK",
    //         "name": "HONG KONG",
    //         "countryName": "Hong Kong"
    //     },
    //     "province": "haneen",
    //     "city": "haneen",
    //     "address": "haneen",
    //     "zipCode": "haneen",
    //     "phone": "222222222",
    //     "fax": "254785",
    //     "note": "haneen",
    //     "noOfEmployees": 0
    // }
}