require('cypress-xpath');


describe('Acesso a página do bugbank', () => {
    const credentials = require('../fixtures/credentials.json');

    beforeEach(() => {
      cy.visit('/');
      cy.wait(2000); 

    });

    it('CT01 - Tentativa de Login sem preencher campos obrigatórios', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('danisilveiratestes@yopmail.com');
        cy.get('.otUnI').click();
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging').should('exist');
    });

    it('CT02 - Tentativa de Login com informações de usuário inválidas', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('danisilveiratestes@yopmail.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('54654654654');
        cy.get('.otUnI').click();
        cy.wait(1000);
        cy.xpath('/html/body/div/div/div[3]/div').should('be.visible');
    });

    it('CT03 - Tentativa de Cadastro sem preencher campos obrigatórios', () => {
        cy.get('.ihdmxA').click();
        cy.wait(1000);
        cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type(credentials.email, { force: true });
        cy.get('input[placeholder="Informe seu Nome"]').type('Danielle', { force: true });
        cy.wait(1000);
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password, { force: true });        
        cy.get('#toggleAddBalance').click({ force: true });
        cy.get('button[class="style__ContainerButton-sc-1wsixal-0 CMabB button__child"]').click({ force: true });
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging').should('exist');
    });

    it('CT04 - Tentativa de Cadastro com senhas diferentes', () => {
        cy.get('.ihdmxA').click();
        cy.wait(1000);
        cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type(credentials.email, { force: true });
        cy.get('input[placeholder="Informe seu Nome"]').type('Danielle', { force: true });
        cy.wait(1000);
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password, { force: true });     
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('sadasd564654654', { force: true });      
        cy.get('#toggleAddBalance').click({ force: true });
        cy.get('button[class="style__ContainerButton-sc-1wsixal-0 CMabB button__child"]').click({ force: true });
        cy.get('p[id="modalText"]').contains('As senhas não são iguais.').should('be.visible');
    }); 

    it('CT05 - Tentativa de Cadastro com e-mail inválido', () => {
        cy.get('.ihdmxA').click();
        cy.wait(1000);
        cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('sadsadasdasd', { force: true });
        cy.get('input[placeholder="Informe seu Nome"]').type('Danielle', { force: true });
        cy.wait(1000);
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password, { force: true });     
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credentials.password, { force: true });      
        cy.get('#toggleAddBalance').click({ force: true });
        cy.get('button[class="style__ContainerButton-sc-1wsixal-0 CMabB button__child"]').click({ force: true });
        cy.get('.kOeYBn > .input__warging').contains('Formato inválido').should('exist');
    }); 

    it('CT09 - Cadastro realizado com sucesso, preenchendo todos os campos obrigatórios', () =>{
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
    })

    it('CT08 - Login realizado com sucesso, preenchendo todos os campos obrigatórios', () => {
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
});