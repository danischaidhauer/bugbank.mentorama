require('cypress-xpath');

describe('Acesso a página do bugbank', () => {
    const credentials = require('../fixtures/credentials.json');

    // Antes de todos os testes, realizar o login válido
    before(() => {
        cy.visit('/');
        cy.wait(2000);

        // criar usuario e logar
        cy.get('.ihdmxA').click();
        cy.wait(1000);
        cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type(credentials.email, { force: true });
        cy.get('input[placeholder="Informe seu Nome"]').type('Danielle', { force: true });
        cy.wait(1000);
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password, { force: true });        
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password, { force: true });
        cy.get('#toggleAddBalance').click({ force: true });
        cy.get('button[class="style__ContainerButton-sc-1wsixal-0 CMabB button__child"]').click({ force: true });
        cy.get('.styles__ContainerContent-sc-8zteav-1').should('exist');
        cy.get('#btnCloseModal').click();
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(credentials.email);
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password);
        cy.get('.otUnI').click();
        cy.url().should('eq', 'https://bugbank.netlify.app/home');
    });

    // Testes relacionados ao login e operações bancárias
    it('CT06 - Tentativa de Transferência para conta inválida', () => {
        cy.get('#btn-TRANSFERÊNCIA').click();
        cy.get(':nth-child(1) > .input__default').type('344');
        cy.get('.account__data > :nth-child(2) > .input__default').type('0');
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('50');
        cy.get(':nth-child(3) > .input__default').type('despesa alimentação');
        cy.get('.style__ContainerButton-sc-1wsixal-0').click();
        cy.get('#modalText').contains('Conta inválida ou inexistente').should('exist');
        cy.get('#btnCloseModal').click();
    });

    it('CT07 - Tentativa de Transferência com saldo insuficiente', () => {
        cy.get('#btn-TRANSFERÊNCIA').click();
        cy.get(':nth-child(1) > .input__default').type('344');
        cy.get('.account__data > :nth-child(2) > .input__default').type('9');
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('2000');
        cy.get(':nth-child(3) > .input__default').type('despesa alimentação');
        cy.get('.style__ContainerButton-sc-1wsixal-0').click(); 
        cy.get('#modalText').contains('Você não tem saldo suficiente para essa transação').should('exist');
        cy.get('#btnCloseModal').click();
    });

    it('CT10 - Transferência para uma conta válida, realizada com sucesso', () => {
        cy.get('#btn-TRANSFERÊNCIA').click();
        cy.get(':nth-child(1) > .input__default').type('294');
        cy.get('.account__data > :nth-child(2) > .input__default').type('9');
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('50');
        cy.get(':nth-child(3) > .input__default').type('despesa alimentação');
        cy.get('.style__ContainerButton-sc-1wsixal-0').click(); 
    });

});
