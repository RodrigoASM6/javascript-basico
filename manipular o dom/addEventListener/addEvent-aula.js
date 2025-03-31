/* 

O addEventListener é um método em JavaScript que permite que você "espere" por algo acontecer em uma página web 
(como um clique, um toque, ou até mesmo o carregamento da página) e, então, execute uma ação quando esse evento ocorrer.

*/

// Imagine que você tem um botão em uma página HTML e quer que,
// quando alguém clicar nele, apareça um alerta. Veja como fazer isso:

<button id="meuBotao">Clique aqui!</button>;

// Passo 1: Pegar o botão no HTML
const botao = document.getElementById("meuBotao");

// Passo 2: Adicionar um "ouvinte" de evento (event listener)
botao.addEventListener("click", function () {
  alert("Você clicou no botão! 🎉");
});

/*  O que acontece?


O JavaScript encontra o botão (getElementById).

Ele "escuta" (addEventListener) quando o botão for clicado ("click").

Quando o clique acontece, a função dentro do addEventListener é executada (no caso, um alert).

*/
