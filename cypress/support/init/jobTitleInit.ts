import { CreateJobTitlePayload } from "../payload/jobTitlePayload"
import GenaricHelper from "../helpers/genericHelper";

export default class JobTitleInit {
    static initJobTitle(): CreateJobTitlePayload {
        let createJobTitlePayload: CreateJobTitlePayload = {
            JobTitle: {
                    title: `Software Engineer ${GenaricHelper.genaricRandomString()}`,
                    description: "Responsible for software development and programming",
                    specification: "",
                    note: "This is a full-time position in our technology department"
            }
        }
        return createJobTitlePayload
    }
}