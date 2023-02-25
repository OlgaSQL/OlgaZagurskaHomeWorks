
describe('registration-autorization', () => {
    it('registration', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
        
        cy.get('[title="Continue"]').click();
        cy.get('#AccountFrm_firstname').type('Olga');
        cy.get('#AccountFrm_lastname').type('Zaurska');
        cy.get('#AccountFrm_email').type('OlgaZagurska@gmail.com');

        cy.get('#AccountFrm_address_1').type('Kopernika');
        cy.get('#AccountFrm_city').type('Kyiv');
        cy.get('#AccountFrm_country_id').select('220')
        cy.get('#AccountFrm_zone_id').select('3490');
        cy.get('#AccountFrm_postcode').type('Kyiv10110');

        cy.get('#AccountFrm_loginname').type('OlgaZagurska');
        cy.get('#AccountFrm_password').type('OlgaZagurskaTest2023');
        cy.get('#AccountFrm_confirm').type('OlgaZagurskaTest2023');

        cy.get('#AccountFrm_newsletter0').click();
        cy.get('#AccountFrm_agree').click();
        cy.get('[title="Continue"]').click();

    })

    it('autorization', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');

        cy.get('#loginFrm_loginname').type('OlgaZagurska');
        cy.get('#loginFrm_password').type('OlgaZagurskaTest2023');
        cy.get('[title="Login"]').click();
    

    })
})