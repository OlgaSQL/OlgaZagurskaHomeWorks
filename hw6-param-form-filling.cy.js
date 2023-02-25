describe('hw6-param-form-filling', () => {
    it('parameters-test-for-form', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

        cy.get('[alt="Material Light Theme"]').click();
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();

        cy.log('1')
        cy.get('form.form-inline input[placeholder="Jane Doe"]').type("Cat");
        cy.get('form.form-inline input[placeholder="Email"]').type("cat@gmail.com");

        cy.log('2')
        cy.get('#inputEmail1').type("cat1@gmail.com");
        cy.get('#inputPassword2').type("cat1000");

        cy.log('3')
        cy.get('#exampleInputEmail1').type("cat2@gmail.com");
        cy.get('#exampleInputPassword1').type("cat2000");

        cy.log('4')
        cy.get('input[placeholder="Recipients"]').type("dog@gmail.com");
        cy.get('input[placeholder="Subject"]').type("cats is happy");
        cy.get('[placeholder="Message"]').type("cats is happy, fat and cut");

        cy.log('5')
        cy.get('#inputFirstName').type("Kitty");
        cy.get('#inputLastName').type("Cat");
        cy.get('#inputEmail').type("KittiCat@gmail.com");
        cy.get('#inputWebsite').type("https://pisni.ua/dytiachi-pisni-kytsia-kytsiunia");

        cy.log('6')
        cy.get('#inputEmail3').type("cat3@gmail.com");
        cy.get('#inputPassword3').type("cat3@gmail.com");
    
        

    })

})