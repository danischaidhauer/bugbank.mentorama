# Testes Automatizados com Cypress - Bugbank

Este projeto, tem como propósito a execução de testes automatizados no site da Bugbank, disponibilizada no curso Analista de Testes da Mentorama.

## Configuração

- Instalar o node: npm install node
- Instalar o cypress: npm install cypress
- Instalar o pacote xpath: npm install -D cypress-xpath
- Instalar o pacote mochawesome (para gerar relatórios): npm install --save-dev mochawesome

## Como Testar 

- Para executar os testes, você deverá digitar no terminal pela primeira vez: npx cypress run
- As demais, você poderá executar da seguinte maneira: npm run cypress-open 

## Testes Executados

- CT01 - Tentativa de Login sem preencher campos obrigatórios
- CT02 - Tentativa de Login com informações de usuário inválidas
- CT03 - Tentativa de Cadastro sem preencher campos obrigatórios
- CT04 - Tentativa de Cadastro com senhas diferentes
- CT05 - Tentativa de Cadastro com e-mail inválido
- CT06 - Tentativa de Transferência para conta inválida
- CT07 - Tentativa de Transferência com saldo insuficiente
- CT08 - Login realizado com sucesso, preenchendo todos os campos obrigatórios
- CT09 - Cadastro realizado com sucesso, preenchendo todos os campos obrigatórios
- CT10 - Transferência para uma conta válida, realizada com sucesso
- CT11 - Verificar a funcionalidade do botão "Extrato"
- CT12 - Verificar a funcionalidade do botão "Pagamento"
- CT13 - Verificar a funcionalidade do botão "Saque"
- CT14 - Realizar o logout com sucesso


## Relatórios de Teste

Para executar os relatórios, você deverá digitar no terminal:
- npx cypress run --reporter mochawesome

## Autores

- Danielle Schaidhauer

