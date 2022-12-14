const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

const pid1 = productDetails('coca', 'cola')[0].details.productId;
const pid2 = productDetails('coca', 'cola')[1].details.productId;

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // ESCREVA SEUS TESTES ABAIXO:

  // Teste se productDetails é uma função.
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  // Teste se o retorno da função é um array.
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('coca', 'cola'))).toBe(true);
  });

  // Teste se o array retornado pela função contém dois itens dentro.
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('coca', 'cola')).toHaveLength(2);
  });

  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails('coca', 'cola').every((element) => typeof element === 'object')).toBe(true);
  });

  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('coca', 'cola')[0] !== productDetails('coca', 'cola')[1]).toBe(true);
  });

  // Teste se os dois productIds terminam com 123.
  it('Teste se os dois productIds terminam com 123.', () => {
    expect(pid1.substring(pid1.length - 3)).toEqual('123');
    expect(pid2.substring(pid2.length - 3)).toEqual('123');
})});

