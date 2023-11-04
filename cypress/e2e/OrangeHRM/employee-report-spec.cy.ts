import addLocation from "../../support/helpers/locationHelper";
import addJobTitle from "../../support/helpers/jobTitleHelper";
import addJobDetails from "../../support/helpers/jobDetailsHelper"
import ReportPage from "../../support/page-objects/rebortPage";

const reportObj: ReportPage = new ReportPage();
describe("TimeSheet/Reports", () => {


  beforeEach(() => {
    cy.fixture('employee').as('eData')
    cy.login("Admin", "admin123")
    
    // cy.get('@eData').then((dataEmp: any) => {
    //   addLocation.addNewLocationViaAPI().then(locationId => {
    //     addJobTitle.addNewJobTitleViaAPI().then(jobId => {
    //       for (let i = 1; i <= 3; i++) {
    //         let empNumber: number;
    //         cy.addNewEmployee(`${dataEmp.addEmployee.firstName}${i}`, `${dataEmp.addEmployee.middleName}${i}`, `${dataEmp.addEmployee.lastName}${i}`, dataEmp.addEmployee.empPicture, dataEmp.addEmployee.employeeId).then((response) => {
    //           empNumber = response.body.data.empNumber
    //         }).then(() => {
    //           cy.addNewUser(`${dataEmp.addUser.username}${i}`, dataEmp.addUser.password, dataEmp.addUser.status, dataEmp.addUser.userRoleId, empNumber)
    //         })
    //         .then(() => {
    //           cy.jobDetails(dataEmp.jobDetails.joinedDate, jobId, dataEmp.jobDetails.empStatusId, dataEmp.jobDetails.jobCategoryId, dataEmp.jobDetails.subunitId, locationId, empNumber)
    //         })
    //       }
    //     })
    //   })
    // })
  })


  it("should generate an Employee report with search criteria", () => {
    reportObj.navigateToReportPage();
  })
});