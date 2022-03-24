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
        careerPage.selectQaDepartment().should('exist').should('have.length', 1);    
    })
    it('Validate that each result contains "QA Automation" or “QA Engineer” in the title', () => {
        careerPage.clickCareerTab();
        careerPage.clickDepartmentDropdown();
        careerPage.selectQaDepartment().contains(/(QA|Automation)/i).contains(/(QA|Engineer)/i);
    })
})