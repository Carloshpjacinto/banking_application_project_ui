# 🏦 Banking Application - Frontend  

### Interface web para gerenciamento de contas e movimentações bancárias. Construída com **React.js**, **Next.js** e **TypeScript**.

---

##### 📄 Para informações mais detalhadas, a documentação e os registros de ADR estão disponíveis em uma pasta do projeto.

---

## 🚀 Tecnologias Utilizadas

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width="40" height="40" style="margin-right: 10px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" height="40" style="margin-right: 10px;" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width="40" height="40" />
</div>

---

## 📁 Arquitetura  

### O frontend utiliza o **Next.js**, promovendo modularização, reuso de componentes, e layouts aninhados. A aplicação segue os princípios do **Single Responsibility Principle**, garantindo escalabilidade e manutenibilidade. O uso de **TypeScript** reforça a segurança e previsibilidade do código.

##### A comunicação com o backend é realizada via requisições HTTP usando a biblioteca **Axios**.

---

## 👨‍💻 Principais funcionalidades:

##### Interface responsiva para cadastro e login de usuários
##### Dashboard com saldo e movimentações
##### Visualização de transações bancárias filtradas (enviadas, recebidas e depósitos)
##### Realização de transferências entre contas
##### Consumo de API segura com autenticação via JWT

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

#### bash

git clone https://github.com/Carloshpjacinto/banking_application_project_ui.git<br>
cd banking_application_project_ui

### 2. Instalação das dependencias

#### npm install

### 3. Execução dos testes

#### 

### 4. Execução da aplicação

#### npm run dev

## ❓ Execução da aplicação com Mock server

#### O mock foi utilizado para facilitar a construção da aplicação em relação aos testes de cadastro de usuários, gerenciamento de contas e simulação de transferências bancárias, sem a necessidade de o backend estar em execução.

### O comando para executar a aplicação em modo mock é npm run dev:mock

### ⚠️ Atenção ao executar a aplicação com o mock server, pois, em caso de conflito de portas, o próprio Next.js altera automaticamente a porta da aplicação.
