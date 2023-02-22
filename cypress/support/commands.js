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

let LOCAL_STORAGE_MEMORY = {};

 Cypress.Commands.add('login', (username, password) => {
 	cy.session('session-username', () => {
	  cy.visit('/');
	  cy.get('[data-test="username"]').type(username);
	  cy.get('[data-test="password"]').type(password);
	  cy.get('[data-test="login-button"]').click();
	  cy.setCookie('session-username', username);
  	})
 })

  Cypress.Commands.add('saveLocalStorage', () => {
 	Object.keys(localStorage).forEach( key => {
 		LOCAL_STORAGE_MEMORY[key] = localStorage[key];
 	})
 })

  Cypress.Commands.add('restoreLocalStorage', () => {
 	Object.keys(LOCAL_STORAGE_MEMORY).forEach( key => {
 		localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
 	})
 })
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