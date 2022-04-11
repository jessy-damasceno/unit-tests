const createMenu = require('../src/restaurant');

const menu = {
  food: {
    coxinha: 5,
    empada: 6,
    pastelDeCarne: 8,
    pastelDePizza: 10,
    pastelDeQueijo: 9,
  },
  drink: {
    agua: 4,
    sucoDeFrutas: 8,
    sucoDeLaranja: 7,
    coca: 3,
  },
};
const objetoRetornado = createMenu(menu);

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  // PASSO 1:
  it('TESTE 1: Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
    expect(typeof objetoRetornado.fetchMenu).toEqual('function');
  });

  // PASSO 2:
  it('TESTE 2: Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`', () => {
    expect(Object.keys(objetoRetornado.fetchMenu())).toEqual(['food', 'drink']);
  });

  // PASSO 3:
  it("TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'", () => {
    expect(menu).toEqual(objetoRetornado.fetchMenu());
  });

  //PASSO 4:
  // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.

  // PASSO 5:
  it("TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.", () => {
    expect(objetoRetornado.consumption).toEqual([]);
  });

  // PASSO 6:
  // No arquivo src/restaurant.js, adicione ao objeto retornado por createMenu uma chave consumption que, como valor inicial, tem um array vazio.

  // PASSO 7:
  it("TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada", () => {
    expect(
      (() => {
        const objetoQualquer = createMenu(menu);
        objetoQualquer.order('coxinha');
        return objetoQualquer.consumption;
      })()
    ).toEqual(['coxinha']);
  });

  // PASSO 8:
  // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.

  //PASSO 9:
  it('TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    expect(
      (() => {
        const objetoQualquer = createMenu(menu);
      objetoQualquer.order('coxinha');
      objetoQualquer.order('agua');
      objetoQualquer.order('sashimi');
      return objetoQualquer.consumption;
    })()
    ).toEqual(['coxinha', 'agua', 'sashimi']);
  });

  // PASSO 10:
  it('TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    expect(
      (() => {
      const objetoQualquer = createMenu(menu);
      objetoQualquer.order('coxinha');
      objetoQualquer.order('agua');
      objetoQualquer.order('coxinha');
      return objetoQualquer.consumption;
    })()
    ).toEqual(['coxinha', 'agua', 'coxinha']);
  });

  // PASSO 11:
  it('TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    expect(
      (() => {
      objetoRetornado.order('coxinha');
      objetoRetornado.order('agua');
      objetoRetornado.order('empada');
      return objetoRetornado.pay();
    })()
    ).toBeCloseTo(16.50);
  });
});
