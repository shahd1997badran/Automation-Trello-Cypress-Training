// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('trelloLogin',()=>{
    cy.intercept("POST", "https://id.atlassian.com/rest/marketing-consent/config").as('waitEnterEmail');
    cy.intercept("GET","https://trello.com/1/resources/templates/categories").as('loadMainPage');
    cy.visit("https://trello.com/login")
    cy.fixture("./example.json").then((data)=>{
        cy.get("#user").type(data.email)
        cy.get("#login").first().click()
        cy.wait('@waitEnterEmail');
        const password = data.password
        cy.origin('https://id.atlassian.com',{args:password}, (password) => {
            cy.get("#password").type(password)
            cy.get("#login-submit").click()
            //wait(6000);
        })
        cy.wait('@loadMainPage');
    })
})