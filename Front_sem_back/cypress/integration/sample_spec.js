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
        cy.get('.input-cad-matricula')
            .type('123456')
            .should('have.value', '123456')
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

    it('Fechar boas vindas', function(){
        cy.get('.botao-fechar').click()
    })

    it('Mudar de módulo', function(){
        cy.get('.menu-left-button-expressoes').click()
        cy.get('.menu-left-button-algoritmos').click()
    })

    it('Acessar fórum', function(){
        cy.contains('turma').click()
        cy.contains('módulo').click()
    })

    it('Entrar em uma atividade', function(){
        cy.contains('Galinha no tapa').click()
    })

    it('Usar a mini IDE', function(){
        cy.get('.CodeMirror-scroll')
            .type('Isso é um teste de front-end usando o cypress')
            .should('have.value', 'Isso é um teste de front-end usando o cypress')
    })

    
    
})