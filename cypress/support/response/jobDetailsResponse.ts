export interface CreateJobDetailsResponse {
    data: {
        empNumber: number,
        joinedDate: string,
        jobTitle: {
            id: number,
            title: string,
            isDeleted: boolean
        },
        jobSpecificationAttachment: {
            id: number,
            filename: string
        },
        empStatus: {
            id: number,
            name: string
        },
        jobCategory: {
            id: number,
            name: string
        },
        subunit: {
            id: number,
            name: string,
            unitId: string
        },
        location: {
            id: number,
            name: string
        },
        employeeTerminationRecord: {
            id: null,
            date: null
        }
    },
}

