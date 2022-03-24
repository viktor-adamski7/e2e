import CareerPage from "../../support/pages/careerPage"


describe('01 Career page', () => {
    const careerPage = new CareerPage();

    beforeEach(() => {
        careerPage.visit();
    })

    it('Validate that there is exactly one "QA Automation Engineer" role open', () => {
        careerPage.clickCareerTab();
        careerPage.getDepartmentDropdown().should('exist');
        careerPage.clickDepartmentDropdown();
        careerPage.selectQaDepartment().should('exist').should(($a) => {
            expect($a).to.have.length(1)
        }) 
    })
    it('Validate that each result contains "QA Automation" or “QA Engineer” in the title', () => {
        cy.contains('Careers').click();
        careerPage.clickDepartmentDropdown();
        careerPage.selectQaDepartment();

        const column = [/(QA|Automation)/i, /(QA|Engineer)/i]

        column.forEach(function (value) {
            careerPage.getJobOffersTable().contains(value)
        })
    })
})