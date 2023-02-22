describe('Comprar Produtos', () => {

  beforeEach(() => {
	cy.login('standard_user', 'secret_sauce');
	cy.restoreLocalStorage();
  })

  afterEach(() => {
	cy.saveLocalStorage();
  })

  it('Listar Produtos', () => {
	cy.visit('/?/inventory.html');
	cy.get('.title').should('have.text', 'Products');
	cy.get('[data-test="product_sort_container"]').should('be.visible');
	cy.get('.shopping_cart_link').should('be.visible');
  })

  it('Adicionar produtos ao carrinho', () => {
  	cy.visit('/?/inventory.html');
  	cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  	cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  })

  it('Clicar no botão de checkout', () => {
  	cy.visit('/?/inventory.html');
  	cy.get('.shopping_cart_link').click();
  	cy.get('[data-test="checkout"]').click();
  })

  it('Preencher os dados do Cliente', () => {
	cy.visit('/?/checkout-step-one.html');
  	cy.get('[data-test="firstName"]').type('bruno');
  	cy.get('[data-test="lastName"]').type('oliveira');
  	cy.get('[data-test="postalCode"]').type('324324');
  	cy.get('[data-test="continue"]').click();
  	cy.get('[data-test="finish"]').click();
  })  

  it('Verificar a Tela de obrigado', () => {
  	cy.visit('/?/checkout-complete.html');
  	cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
  })  
  

})