
const parameters = [
    {
        args: {
            position: 'top-left',
            title: 'My toast1',
            content: 'Cats so cute and funny',
            time: '1000',
            type: 'info'
        },
        expected: {
            icon: 'question-mark',
            title: 'My toast1',
            content: 'Cats so cute and funny',
            color: 'rgb(4, 149, 238)',
            position: {
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }
        }
    },
    {
        args: {
            position: 'bottom-end',
            title: 'My toast2',
            content: 'Dogs are friendly',
            time: '1000',
            type: 'warning'
        },
        expected: {
            icon: 'alert-triangle',
            title: 'My toast2',
            content: 'Dogs are friendly',
            color: 'rgb(255, 159, 5)',
            position: {
                justifyContent: "flex-end",
                alignItems: "flex-end"
            }
        }
    }
];

describe('toasts with diferent parameters', () =>{
beforeEach('Go to page', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Light Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
    cy.wait(6000);
})

parameters.forEach(({ args, expected }) => {
    it(`Toast with parameters ${args.position}, and type ${args.type}`, () => {

        cy.get('nb-select  button.select-button').eq(1).click();
        cy.get(`nb-option[ng-reflect-value="${args.position}"]`).click();
        cy.get(`input[name="title"]`).clear().type(`${args.title}`);
        cy.get(`input[name="content"]`).clear().type(`${args.content}`);
        cy.get(`input[name="timeout"]`).clear().type(`${args.time}`);
        cy.get('nb-select  button.select-button').eq(2).click();
        cy.get(`nb-option[ng-reflect-value="${args.type}"]`).click();
        cy.contains('button', 'Show toast').click();

        cy.get('nb-toast[ng-reflect-toast]').then(toast => {
            cy.wrap(toast).should('contain', expected.title)
                .and('contain', expected.content)
                .and('have.css', 'background-color')
                .and('eq', expected.color);

            cy.wrap(toast).find(`g[data-name="${expected.icon}"]`).should('exist');

            cy.wrap(toast).parents('.toastr-overlay-container')
                .should('have.css', 'justify-content')
                .and('eq', expected.position.justifyContent);
            cy.wrap(toast).parents('.toastr-overlay-container')
                .should('have.css', 'align-items')
                .and('eq', expected.position.alignItems);
        });

    })
})
})