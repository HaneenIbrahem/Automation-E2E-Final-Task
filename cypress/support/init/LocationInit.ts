import { CreateLocationPayload } from "../payload/locationPayload"
import GenaricHelper from "../helpers/genericHelper";
// import { jobId } from "../helpers/jobTitleHelper";

export default class LocationInit {
    static initLocation(): CreateLocationPayload {
        let createLocationPayload: CreateLocationPayload = {
            location: {
                address: "15 Al-Quds Street",
                city: "Tulkarm",
                countryCode: "PS",
                fax: "N/A",
                name: "Beit Led Branch",
                note: "Our regional branch in Tulkarm",
                phone: "+970 59 097 3299",
                province: "West Bank",
                zipCode: "45678"
            }
        }
        return createLocationPayload
    }
}