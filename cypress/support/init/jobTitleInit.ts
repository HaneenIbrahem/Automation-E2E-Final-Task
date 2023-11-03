import { CreateJobTitlePayload } from "../payload/jobTitlePayload"
import GenaricHelper from "../helpers/genericHelper";

export default class JobTitleInit {
    static initJobTitle(): CreateJobTitlePayload {
        let createJobTitlePayload: CreateJobTitlePayload = {
            JobTitle: {
                    title: `Haneen${GenaricHelper.genaricRandomString()}`,
                    description: "Haneen",
                    specification: "",
                    note: "no note"
            }
        }
        return createJobTitlePayload
    }
}