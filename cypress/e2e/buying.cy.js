describe('Buying', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('add backpack to cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '1')
    })

    it('complete purchase', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Suriel')
        cy.get('[data-test="lastName"]').type('Gomes')
        cy.get('[data-test="postalCode"]').type('676767-000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.contains('Thank you for your order!').should('be.visible')
    })

    it('removing product', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    })

    it('logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.get('[data-test="login-button"]').should('be.visible')
    })

    it('buying 2 products', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        // confere se no carrinho tem realmente 2 itens
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '2')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Suriel')
        cy.get('[data-test="lastName"]').type('Gomes')
        cy.get('[data-test="postalCode"]').type('676767-000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.contains('Thank you for your order!').should('be.visible')
    })
})