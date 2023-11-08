let empNumber: number
describe("Claim Request", () => {
    beforeEach(() => {
        cy.fixture('employee').as('eData')
        cy.login("Admin", "admin123")

        cy.get('@eData').then((dataEmp: any) => {
            cy.addNewEmployee(dataEmp.addEmployee.firstName, dataEmp.addEmployee.middleName, dataEmp.addEmployee.lastName, dataEmp.addEmployee.empPicture, dataEmp.addEmployee.employeeId).then((response) => {
                empNumber = response.body.data.empNumber
            }).then(() => {
                cy.addNewUser(dataEmp.addUser.username, dataEmp.addUser.password, dataEmp.addUser.status, dataEmp.addUser.userRoleId, empNumber)
            })
        })


    })

    it("Claims Request Approval Flow", () => {
        cy.log('hi')
    })

    it("Claims Request Rejection Flow", () => {

    })

    afterEach(() => {
        cy.deleteEmployee(empNumber);

    })
})