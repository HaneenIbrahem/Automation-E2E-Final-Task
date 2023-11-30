import { CreateJobDetailsPayload } from "../payload/jobDetailspayload"
import GenaricHelper from "../helpers/genericHelper";

export default class JobDetailsInit {
    static initJobDetails(jobTitleId: number, locationId: number): CreateJobDetailsPayload {
        let createJobDetailsPayload: CreateJobDetailsPayload = {
            JobDetails: {
                joinedDate: "2023-11-01",
                jobTitleId: jobTitleId,
                empStatusId: 3,
                jobCategoryId: 3,
                subunitId: 3,
                locationId: locationId
            }
        }
        return createJobDetailsPayload
    }
}