require('cypress-xpath');

describe('Acesso a página do bugbank', () => {
    const credentials = require('../fixtures/credentials.json');

    // Antes de todos os testes, realizar o login válido
    beforeEach(() => {
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

    it('CT11 - Verificar a funcionalidade do botão "Extrato"', () => {
        cy.get('#btn-EXTRATO').click();
        cy.get('.bank-statement__ContainerTransactions-sc-7n8vh8-8').should('exist');
        cy.url().should('eq', 'https://bugbank.netlify.app/bank-statement');
    });

    it('CT12 - Verificar a funcionalidade do botão "Pagamento"', () => {
        cy.get('#btn-PAGAMENTOS').click();
        cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Funcionalidade em desenvolvimento').should('be.visible');
    });

    it('CT13 - Verificar a funcionalidade do botão "Saque"', () => {
        cy.get('#btn-SAQUE').click();
        cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Funcionalidade em desenvolvimento').should('be.visible');
        cy.get('.styles__ContainerCloseButton-sc-8zteav-2 > a').click();
    });

    it('CT14 - Realizar o logout com sucesso', () => {
        cy.get('#btnExit').click();
        cy.url().should('eq', 'https://bugbank.netlify.app/');
    });

});