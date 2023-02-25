describe('Locators lecture', () => {
  it('basic locators', () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');

    cy.log('Get element by tag name');
    cy.get('nav');

    cy.log('Get element by attribute name');
    cy.get('[placeholder]');

    cy.log('Get element by id');
    cy.get('#inputEmail');

    cy.log('Get element by attribute name and value');
    cy.get('[placeholder="Email"]');

    cy.log('Get element by id');
    cy.get('[id ="inputEmail"]');

    cy.log('Get element by id');
    cy.get('#query-btn');

    cy.log('Get element by class value');
    cy.get('.query-btn');

    cy.log('Get element by class value');
    cy.get('.query-btn.btn.btn-primary');

    cy.log('Get element by tag name, attribute name and value');
    cy.get('input[placeholder="Email"]');

    cy.log('Get element by tag name, attribute name');
    cy.get('input[placeholder]');

    cy.log('Get element by tag name, attribute name with value, id, class value, attribute name');
    cy.get('input[type="text"]#inputEmail.form-control[placeholder]');

    cy.log('The most recomended way to lacate elements(by data-test attributes');
    cy.get('[data-test-id="test-example"]');

  })

  it('Complex locators', () => {
    //.only         if you want works only this one
    cy.visit('https://www.amazon.com/');
    cy.log ('');
    cy.get('div#gw-card-layout>div[data-display-at="smws"]');

    cy.log ('long way to tag by DOM structure');
    cy.get('div#gw-card-layout>div>div>div>a');

    cy.log ('short way to tag');
    cy.get('div>div>div>div>a');
    cy.get('div a');

  })

  it.('Complex locators', () => {
    cy.log('DomZavd_1')
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.log ('went to correct page');
    cy.get('[alt="Material Light Theme"]').click();
    cy.get('[title="Forms"]').click(); 
    cy.get('[title="Form Layouts"]').click(); 

    cy.log('1')
    cy.get('form.form-inline input[placeholder="Jane Doe"]');
    cy.get('form.form-inline input[placeholder="Email"]');
    cy.get('form.form-inline input[type="checkbox"]');
    cy.get('form.form-inline button');

    cy.log('2')
    cy.get('#inputEmail1');
    cy.get('#inputPassword2');
    cy.get('input[type="radio"]').eq(0);
    cy.get('input[type="radio"]').eq(1);
    cy.get('input[type="radio"][disabled]');
    cy.get('button[status="primary"]').contains('Sign in');
   
    cy.log('3')
    cy.get('#exampleInputEmail1');
    cy.get('#exampleInputPassword1');
    cy.get('nb-checkbox').contains('Check me out').find('input');
    cy.get('button.status-danger');

    cy.log('4')
    cy.get('input[placeholder="Recipients"]');
    cy.get('input[placeholder="Subject"]');
    cy.get('[placeholder="Message"]');
    cy.get('button.status-success');

    cy.log('5')
    cy.get('#inputFirstName');
    cy.get('#inputLastName');
    cy.get('#inputEmail');
    cy.get('#inputWebsite');
    cy.get('button.status-basic').contains('Submit');

    cy.log('6')
    cy.get('#inputEmail3');
    cy.get('#inputPassword3');
    cy.get('#inputEmail3');
    cy.get('nb-checkbox').contains('Remember me').find('input');
    cy.get('button.status-warning');

    cy.log('settings button')
    cy.get('button.toggle-settings');

  })
    
  

    
  it.only('Complex locators', () => {
   // cy.log('DomZavd_2')
   // cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');


    
  })


})