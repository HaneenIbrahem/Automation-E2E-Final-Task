import { CreateLocationPayload } from "../payload/locationPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class LocationInit {
    static initLocation(): CreateLocationPayload {
        let createLocationPayload: CreateLocationPayload = {
            location: {
                address: "haneen",
                city: "haneen",
                countryCode: "HK",
                fax: "254785",
                name: "haneen",
                note: "haneen",
                phone: "222222222",
                province: "haneen",
                zipCode: "haneen"
            }
        }
        return createLocationPayload
    }
}