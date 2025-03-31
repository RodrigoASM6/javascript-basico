/* Imagine que você tem uma lista de compras no papel. O forEach é como pegar cada item dessa lista, um por um, e fazer algo com ele - por exemplo, colocar no carrinho.

O que é o forEach?
É um jeito fácil de olhar para cada coisa dentro de uma lista (que chamamos de "array" em programação) e fazer alguma ação com ela.

Como funciona?
Vamos ver com um exemplo da vida real: */


// Lista de frutas (nosso array)

const frutas = ['maçã', 'banana', 'uva'];

// Para cada fruta na lista, faça algo
frutas.forEach(function(fruta) {
  console.log('Colocando no carrinho: ' + fruta);


 
 /* Vai mostrar:

  Colocando no carrinho: maçã
  Colocando no carrinho: banana
  Colocando no carrinho: uva

*/

// Versão mais simples

frutas.forEach(fruta => console.log('Comprei: ' + fruta));