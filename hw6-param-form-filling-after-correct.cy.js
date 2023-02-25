describe('hw6-param-form-filling', () => {
    before(() => {

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[alt="Material Light Theme"]').click();
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();
    });

        it('passwords', () => {
            const data = [
                { testData: 1, expectedResult: 1 },
                { testData: 'Cat', expectedResult: 'Cat' }
            ]
            data.forEach(({ testData, expectedResult }) => {
                it(`search data ${testData}`, () => {
                    cy.get('#inputPassword3').type(testData);
                    cy.get('#inputPassword3').should("contain.value", expectedResult);

                    cy.get('#exampleInputPassword1').type(testData);
                    cy.get('#exampleInputPassword1').should("contain.value", expectedResult);

                    cy.get('#inputPassword2').type(testData);
                    cy.get('#inputPassword2').should("contain.value", expectedResult);
                    cy.wait(2000);
                })
            })
        })

        it('emails', () => {
            const data = [
                { testData: 'cat@gmail.com', expectedResult: 'cat@gmail.com' },
                { testData: 'cat1@gmail.com', expectedResult: 'cat1@gmail.com' }
            ]
            data.forEach(({ testData, expectedResult }) => {
                it(`search data ${testData}`, () => {
                    cy.get('form.form-inline input[placeholder="Email"]').type(testData);
                    cy.get('form.form-inline input[placeholder="Email"]').should("contain.value", expectedResult);

                    cy.get('#inputEmail1').type(testData);
                    cy.get('#inputEmail1').should("contain.value", expectedResult);

                    cy.get('#exampleInputEmail1').type(testData);
                    cy.get('#exampleInputEmail1').should("contain.value", expectedResult);

                    cy.get('input[placeholder="Recipients"]').type(testData);
                    cy.get('input[placeholder="Recipients"]').should("contain.value", expectedResult);

                    cy.get('#inputEmail').type(testData);
                    cy.get('#inputEmail').should("contain.value", expectedResult);

                    cy.get('#inputEmail3').type(testData);
                    cy.get('#inputEmail3').should("contain.value", expectedResult);

                })
            })
        })

        it('logins,first names, last names', () => {
            const data = [
                { testData: 'Cat', expectedResult: 'Cat' },
                { testData: 'Cat1', expectedResult: 'Cat1' }
            ]
            data.forEach(({ testData, expectedResult }) => {
                it(`search data ${testData}`, () => {
                    cy.get('#inputFirstName').type(testData);
                    cy.get('#inputFirstName').should("contain.value", expectedResult);

                    cy.get('#inputLastName').type(testData);
                    cy.get('#inputLastName').should("contain.value", expectedResult);

                    cy.get('form.form-inline input[placeholder="Jane Doe"]').type(testData);
                    cy.get('form.form-inline input[placeholder="Jane Doe"]').should("contain.value", expectedResult);


                })
            })
        })

        it('url', () => {
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

        it('text', () => {
            const data = [
                { testData: 'cats is happy', expectedResult: 'cats is happy' },
                { testData: 'cats is happy, fat and cut', expectedResult: 'cats is happy, fat and cut' }
            ]
            data.forEach(({ testData, expectedResult }) => {
                it(`search data ${testData}`, () => {
                    cy.get('input[placeholder="Subject"]').type(testData);
                    cy.get('input[placeholder="Subject"]').should("contain.value", expectedResult);

                    cy.get('[placeholder="Message"]').type(testData);
                    cy.get('[placeholder="Message"]').should("contain.value", expectedResult);
                })
            })
        })
    })



