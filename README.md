<p align="center">
  <img src="./src/assets/images/logo.svg" alt="Logo" width="300"/>
  <br>
</p>
<h3 align="center">
  Você bem da cabeça aos pés!
</h3>

<br><br>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocket&message=Shoes&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/rocketShoes?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/rocketShoes?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/rocketShoes?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#rocketShoes">RocketShoes</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br>

## Sobre

Projeto desenvolvido para o desafio 3 do bootcamp Ignite da RocketSeat na trilha de ReactJS cujo objetivo foi implementar o fluxo de carrinho de compras para fixar conceitos como estado, hooks e contextos.

## RocketShoes

A RocketShoes é uma aplicação web construída em ReactJS que visa implementar o fluxo de carrinho de compras. A aplicação é bem simples e a página inicial, conforme veremos a seguir, mostrará os dados dos produtos em formato de lista e a opção de adicionar o item no carrinho, o qual é exibido no canto superior direito da tela:

![Página inicial](./readme/home.png)

Após clicar em **Adicionar ao carrinho**, o item em questão será adicionado na lista de compras do usuário e o status do carrinho será persistido no navegador e exibido no canto da tela, conforme marcação abaixo:

![Página inicial com adição ao carrinho](./readme/add-item.png)

No botão que exibe o status do carrinho podemos consultar quais e quantos itens foram adicionados, além é claro, de conceder ao usuário a liberdade de alterar quantidade e remover itens da compra antes de finaliza-la, como exemplificado abaixo:

![Carrinho de compras](./readme/confirmation.png)

Deixo a seguir um GIF para ilustrar o funcionamento da aplicação, mostrando os fluxos possíveis e o comportamento da interface diante das ações do usuário:

![Demo do fluxo da aplicação](./readme/demo-app.gif)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🖥️ Rodando a aplicação

```bash
# Clone este repositório
$ git@github.com:MrRioja/rocketshoes.git

# Acesse a pasta do projeto no terminal/cmd
$ cd rocketshoes

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a API feita com JSON server
$ npm run server
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn server

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start

# O servidor inciará na porta 3000 - acesse <http://localhost:3000>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
