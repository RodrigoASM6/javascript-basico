// Objetos

// Criar um objeto é simples, basta defirnirmos uma variavel e iniciar a dfinição do valor com chaves {}
// mas e se precisarmos criar um novo objeto, com as mesmas caracteristicas do anterior?



const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;


const honda = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000



// Constructor Functions

/* Para isso existem as Constructor Fctions, ou seja, funções construtoras 
que são responsáveis por construir novos objetos sempre que chamamos as mesmas */

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;


const honda = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

