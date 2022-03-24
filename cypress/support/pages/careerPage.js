
export default class CareerPage {
    
selector = {
    careerPage: {
        departmentDropdown: '[class="select--desktop"]',
        jobOffersTable: '[class="job-offers__wrapper"]',
    }
}
visit() {
    cy.viewport(3072, 1728);
    cy.visit("https://10clouds.com/");
}
getDepartmentDropdown(){
    return cy.get(this.selector.careerPage.departmentDropdown).eq(0);
}
clickDepartmentDropdown(){
    return this.getDepartmentDropdown().click();
}
selectQaDepartment(){
    return cy.get('li').contains('QA').click();
}
clickCareerTab(){
    return cy.contains('Careers').should('exist').click();
}
getJobOffersTable(){    
    return cy.get(this.selector.careerPage.jobOffersTable);
}
}