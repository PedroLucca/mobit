<p align="center">
  <img src="./public/MobiT-sem_fundo.png" height="200"/> 
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/PedroLucca/">
      <img alt="PedroLucca" src="https://img.shields.io/badge/-PedroLucca-5965e0?style=for-the-badge&logo=Linkedin&logoColor=white" />
   </a>
  <a href="mailto:pedrolucca27@gmail.com">
   <img alt="Email" src="https://img.shields.io/badge/-PedroLucca-5965e0?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>

<p align="center">
  👏  Projeto desenvolvido durante o processo seletivo da empresa Mobieduca.me
</p>

<div align="center">
  <sub> Made with 💖 by
    <a href="https://github.com/PedroLucca"> Pedro Lucca.
    <h1></h1>
  </sub>
</div>
  
# 📌 Seções

* [Tecnologias](#rocket-tecnologias) 
* [Tutorial](#scroll-tutorial)
* [Recados Importantes](#exclamation-importante) 
  
# :rocket: Tecnologias
Esse projeto foi feito com as seguintes tecnologias:

* [Javascript](https://www.javascript.com/)      
* [React](https://reactjs.org/)      
* [Chakra UI](https://chakra-ui.com/)
* [Axios](https://axios-http.com/docs/intro)
  
# :scroll: Tutorial
 Antes do passo-a-passo é necessário ressaltar que para a execução do projeto é necessário que haja na sua máquina os recursos do NodeJS, NPM e React devidamente instalados. Caso não possua esses recursos, um guia de instalação pode ser encontrado <a href="https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329">aqui</a>.
  
* Guia de execução
   1. Abrir o terminal de comandos da sua máquina
   2. Fazer a clonagem deste repositório através do comando: `git clone https://github.com/PedroLucca/mobit.git`
   3. Entrar na pasta do projeto pelo terminal, e instalar as dependências através do comando: `npm i`
   4. Após a devida instalação das dependências, iniciar o projeto executando o comando: `npm start`
  
* Fluxo de navegação
   1. Após o início do programa o navegador na tela de login, hospedada no localhost:3000
   2. O sistema possui dois usuários cadastrados que podem ser utilizados para login que são `usuário: user1 - senha: senha123` e o `usuário: user2 - senha: 123senha`
   3. Após o login efetivo no sistema, o usuário será encaminhado para a tela de listagem tanto de escolas cadastradas dentro do sistema, quanto de escolas recebidas pela API.
   4. Pela barra de navegação o usuário pode ir para aba de cadastro de escola, navegar para a tela "sobre" ou fazer o logout no site.
  
# :exclamation: Importante

 - Por um problema de conexão com a API através do localhost, foi necessário a instalação de uma extensão no navegador para que contornasse o bloqueio, a extensão se chama `Allow CORS` e pode ser instalada <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt-BR">aqui</a>. Concluída a instalação basta acessar a extensão e ativá-la, clicando na opção "ON".
 - O site possui um sistema simples de autenticação, verificando por um token no LocalStorage do navegador, portanto caso o usuário tente ir diretamente para as abas de "/listar" ou "/cadastro" sem ter feito o login, será redirecionado automaticamente para a página de login.
 - Por fim, no cadastro de escolas através do site as escolas ficam armazenadas na memória de LocalStorage do navegador, por sua vez caso o usuário troque de navegador ou entre com a guia anônima as informações das escolas serão perdidas.

Obrigado! 🌠
