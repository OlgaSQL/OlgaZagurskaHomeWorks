const { beforeEach } = require("mocha");

describe('hm-7', () => {
    beforeEach(() => {
       //it('param-test-2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[alt="Material Light Theme"]').click();
        cy.contains("Modal & Overlays").click();
        cy.contains("Toastr").click();  
        
    })

    describe('url', () => {
        const data = [
            { testData: 'https://pisni.ua/dytiachi-pisni-kytsia-kytsiunia', expectedResult: 'https://pisni.ua/dytiachi-pisni-kytsia-kytsiunia' },
            { testData: 'https://www.google.com/', expectedResult: 'https://www.google.com/' }
        ]
        data.forEach(({ testData, expectedResult }) => {
            it(`search data ${testData}`, () => {
                cy.get('#loginFrm_password').type(testData);
                cy.get('#loginFrm_password').should("contain.value", expectedResult);
            })
        })
    })
    
})
