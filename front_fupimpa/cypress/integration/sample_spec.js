describe('Test Fupimpa', function(){
    it('Abrir o site', function(){
        cy.visit('http://localhost:3000/cadastro')
    })

    it('Clicar em login', function(){
        cy.contains('Sou Aluno').click()
    })

    it('Preencher usuário', function(){
        cy.get('.input-cad-user')
            .type('robo')
            .should('have.value', 'robo')
    })

    it('Preencher email', function(){
        cy.get('.input-cad-email')
            .type('robo@email.com')
            .should('have.value', 'robo@email.com')
    })

    it('Preencher senha', function(){
        cy.get('.input-cad-password')
            .type('123')
            .should('have.value', '123')
    })

    it('Submeter inscrição', function(){
        cy.get('.botao-confirmar').click()
    })

    it('Preencher usuário login', function(){
        cy.get('.input-user')
            .type('robo')
            .should('have.value', 'robo')
    })

    it('Preencher senha login', function(){
        cy.get('.input-password')
            .type('123')
            .should('have.value', '123')
    })

    it('Efetuar login', function(){
        cy.get('.botao-confirmar').click()
    })
})