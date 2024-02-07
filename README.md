# Gerenciador de produtos Nunes Sports

## Descrição

  Uma página web conectada a um banco de dados para gerenciamento de produtos da empresa Nunes Sports.

## Objetivo

  Desenvolver um sistema para exibição, criação, edição e deleção de produtos para um cliente fictício, a empresa Nunes Sports.

## Implementações Pendentes

- [ ] Autenticação
- [ ] Responsividade
  
## Tecnologias utilizadas no desenvolvimento
![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## Subindo containers

  Para observar o funcionamento da aplicação, é necessário ter o Docker e o Docker Compose instalados em sua máquina. A documentação da ferramenta pode ser acessada <a href="https://docs.docker.com/get-docker/" target="_blank">aqui</a>. Com isso, basta executar o comando abaixo na raiz do projeto para subir os containers.

  ```
  docker-compose up -d --build
  ```
## Acessando a aplicação no navegador
  
  Após subir os containers, a aplicação estará disponível no endereço http://localhost:3000.
  
## Rodando os testes
  Para rodar os testes do backend é necessario acessar o terminal interativo do container do backend e então executar o comando de testes.
### Rodando os testes do backend

  Passo 1:
  ```
  docker exec -it backend_container sh
  ```
  Passo 2:
  ```
  npm run test
  ```
### Rodando os testes do frontend
  Passo 1:
  ```
  docker exec -it frontend_container sh
  ```
  Passo 2:
  ```
  npm run test
  ```

## Rotas da API
  http://localhost:3001/

### GET /products
  Retorna todos os produtos cadastrados no banco de dados.

### GET /products/:code
  Retorna um produto específico do banco de dados.

### POST /products
  Cria um novo produto no banco de dados.

### PATCH /products/:code
  Atualiza um produto no banco de dados.

### DELETE /products/:code
  Deleta um produto no banco de dados.
