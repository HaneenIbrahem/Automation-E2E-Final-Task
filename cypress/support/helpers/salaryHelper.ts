import SalaryInit from '../init/salaryInit'



export default class addSalary{
    static addNewSalaryViaAPI(empNumber: number){
        return cy.addNewSalary(empNumber, SalaryInit.initSalary())
    }
}
