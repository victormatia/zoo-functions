const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se quando a função não recebe parâmetro o retorno é undefined.', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('Testa se quando a função recebe um parâmetro diferente de uma string o retorno é o esperado.', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(['names'])).toBe(expected);
  });
  test('Testa se quando a função recebe um parâmetro diferente dos esperados o retorno é null.', () => {
    expect(handlerElephants('heigth')).toBeNull();
  });
  test('Testa se quando a função recebe o parâmetro count o retorno é 4.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se quando a função recebe o parâmetro names o retorno é um array com todos os nomes dos elefantes.', () => {
    const names = ['Ilana', 'Ilana', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(names);
  });
  test('Testa se quando a função recebe o parâmetro avarageAge o retorno é a média das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Testa se quando a função recebe o parâmetro location o retorno a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
