
# Cypress E2E Testing - Sauce Demo

Projeto prático de automação de testes End-to-End (E2E) utilizando **Cypress** e **JavaScript**, desenvolvido para explorar conceitos de Quality Assurance (QA) e validar diferentes funcionalidades de uma aplicação web.

O projeto utiliza o [Sauce Demo](https://www.saucedemo.com/), uma aplicação demonstrativa de e-commerce, como ambiente para execução dos testes automatizados.

## 🎯 Objetivos

- Praticar automação de testes End-to-End com Cypress.
- Validar diferentes funcionalidades e fluxos de uma aplicação web.
- Testar cenários positivos e negativos de autenticação.
- Automatizar operações de carrinho e checkout.
- Compreender a interação com elementos de páginas web.
- Explorar assertions, seletores e sincronização de testes.

## 🛠️ Tecnologias utilizadas

- **Cypress 15.21.1** - Framework de automação de testes.
- **JavaScript** - Linguagem utilizada na implementação dos testes.
- **Node.js** - Ambiente de execução JavaScript.
- **npm** - Gerenciador de pacotes.

## 🧪 Cenários de teste

O projeto contempla 10 cenários de teste, organizados em dois arquivos:

### 1. Login (`login.cy.js`)

| Cenário | Resultado esperado |
|---|---|
| Login com credenciais válidas | Acesso à página de produtos. |
| Login com usuário bloqueado | Exibição de mensagem informando que o usuário está bloqueado. |
| Login com senha incorreta | Exibição de mensagem de credenciais inválidas. |
| Login sem informar usuário | Exibição de mensagem de validação. |
| Login sem informar senha | Exibição de mensagem de validação. |

### 2. Buying (`buying.cy.js`)

| Cenário | Resultado esperado |
|---|---|
| Adicionar mochila ao carrinho | Produto adicionado e quantidade atualizada. |
| Finalizar compra | Compra concluída com mensagem de confirmação. |
| Remover produto do carrinho | Produto removido e indicador do carrinho eliminado. |
| Realizar logout | Retorno à tela de login. |
| Comprar dois produtos | Dois produtos adicionados e compra finalizada com sucesso. |

## 📂 Estrutura do projeto

```text
cypress-saucedemo/
│
├── cypress/
│   └── e2e/
│       ├── login.cy.js
│       └── buying.cy.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### 1. Clonar o repositório

```bash
git clone https://github.com/surieltech/cypress-saucedemo.git
```

### 2. Acessar a pasta do projeto

```bash
cd cypress-saucedemo
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar os testes

**Abrir a interface gráfica do Cypress:**

```bash
npx cypress open
```

Selecione E2E Testing, escolha o navegador e execute os arquivos desejados.

**Executar todos os testes pelo terminal:**

```bash
npx cypress run
```

**Executar somente os testes de login:**

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

**Executar somente os testes de compra:**

```bash
npx cypress run --spec "cypress/e2e/buying.cy.js"
```

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram explorados conceitos importantes de automação de testes:

- Estruturação de testes utilizando `describe()`, `it()` e `beforeEach()`.
- Interação com elementos através de `cy.get()`, `cy.type()` e `cy.click()`.
- Validação de resultados com `cy.should()` e `cy.contains()`.
- Utilização de seletores CSS e atributos `data-test`.
- Automatização de fluxos completos de autenticação e compra.
- Validação de mensagens, estados e elementos da interface.
- Compreensão de comportamentos assíncronos e problemas de timing em aplicações web.

Um dos aprendizados foi compreender que a existência de um elemento na página não significa necessariamente que ele já esteja disponível para interação.

A utilização de assertions como `.should('be.enabled')` permite aguardar que o elemento atenda à condição esperada antes de executar uma ação, contribuindo para testes mais confiáveis e evitando esperas fixas desnecessárias.

## 🔗 Referências

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Sauce Demo](https://www.saucedemo.com/)

---

**Desenvolvido por [Suriel Gomes](https://github.com/surieltech)**

*Projeto desenvolvido como parte da minha jornada de aprendizado contínuo em Quality Assurance, automação de testes e desenvolvimento de software.*
