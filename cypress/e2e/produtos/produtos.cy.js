describe('Listagem de Produtos', () => {

  it('Verificar Lista de Produtos', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.log(cy.getCookie('session-username'));
  	cy.visit('/?/inventory.html');
    cy.get('.title').should('have.text', 'Products');
    cy.get('[data-test="product_sort_container"]').should('be.visible');
    cy.get('.shopping_cart_link').should('be.visible');
  })

})