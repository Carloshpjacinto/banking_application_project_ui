# 🏦 Banking Application - Frontend

#### A aplicação foi deployada na Vercel. Acesse: https://banking-application-project-ui.vercel.app

### Interface web para gerenciamento de contas e movimentações bancárias. Construída com **Next.js** e **TypeScript**.

---

##### 📄 Para informações mais detalhadas, a documentação e os registros de ADR estão disponíveis em uma pasta do projeto.

---

## 🚀 Tecnologias Utilizadas

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="40" height="40" style="margin-right: 10px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" height="40" style="margin-right: 10px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width="40" height="40" />
</div>

---

## 📁 Arquitetura  

### O frontend utiliza o **Next.js**, promovendo modularização, reuso de componentes, e layouts aninhados. A aplicação segue os princípios do **Single Responsibility Principle**, garantindo escalabilidade e manutenibilidade. O uso de **TypeScript** reforça a segurança e previsibilidade do código.

##### A comunicação com o backend é realizada via requisições HTTP usando a biblioteca **Axios**.

---

## 👨‍💻 Principais funcionalidades:

### Interface responsiva para cadastro e login de usuários
### Consumo de API segura com autenticação via JWT
### Dashboard com saldo e movimentações
### Realização de transferências entre contas

#### - Para realizar transferências Pix por Crédito:
Preencher o CPF do destinatário (a conta deve existir no sistema).
Valor: digitar o valor da transferência.
Função da conta: Crédito (disponível apenas se a conta for conta corrente).
Tipo de transferência: Pix.

##### Realizar transferências por crédito gera um débito na conta (esse valor não é alterado com a realização de depósitos).

#### - Para realizar transferências Pix por Débito:
Preencher o CPF do destinatário (a conta deve existir no sistema).
Valor: digitar o valor da transferência.
Função da conta: Débito.
Tipo de transferência: Pix.

#### - Para realizar transferências do tipo Depósito:
Preencher o próprio CPF da conta.
Valor: digitar o valor da transferência.
Função da conta: não é necessário selecionar.
Tipo de transferência: Depósito.

#### Explicação da função Cheque Especial:
O cheque especial é utilizado quando o usuário não possui saldo em conta ou valor em crédito para realizar transferências. Nesse caso, o valor da transferência será enviado e descontado do cheque especial, tornando o saldo da conta negativo. O valor negativado será cobrado automaticamente ao realizar um depósito: o valor devido será descontado, e o restante ficará disponível para novas transferências.

### Visualização de transações bancárias filtradas (enviadas, recebidas e depósitos)

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

#### bash

    git clone https://github.com/Carloshpjacinto/banking_application_project_ui.git<br>

### 2. Instalação das dependencias

    npm install

### 4. Execução da aplicação

    npm run dev

## ❓ Execução da aplicação com Mock server

#### O mock foi utilizado para facilitar a construção da aplicação em relação aos testes de cadastro de usuários, gerenciamento de contas e simulação de transferências bancárias, sem a necessidade de o backend estar em execução.

### O comando para executar a aplicação em modo mock:

    npm run dev:mock

### ⚠️ Atenção ao executar a aplicação com o mock server, pois, em caso de conflito de portas, o próprio Next.js altera automaticamente a porta da aplicação.

### ⚠️ Para realizar transferências, é necessário que o backend esteja em execução, pois o mock não simula essa ação.
