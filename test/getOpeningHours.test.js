const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se quando a função é chamada sem parâmetros ela retorna o objeto esperado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  test('Testa se quando a função recebe um dia e um horário o retorno é o esperado', () => {
    const daysOpen = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    daysOpen.forEach((day) => {
      expect(getOpeningHours(day, '10:00-AM')).toBe('The zoo is open');
    });
  });
  test('Testa se quando a função recebe monday o retorno é como o esperado', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe('The zoo is closed');
  });
  test('Testa se quando a função receber um dia que não existe como parâmetro um erro é lançado', () => {
    expect(() => getOpeningHours('Happyday', '10:00-AM')).toThrowError();
  });
  test('Testa se quando o horário passado como parâmetro não tem o formato desejado erros são retornados', () => {
    expect(() => getOpeningHours('Tuesday', '12:80-PM')).toThrowError();
    expect(() => getOpeningHours('Tuesday', '16:00-PM')).toThrowError();
    expect(() => getOpeningHours('Tuesday', '09:00-DM')).toThrowError();
  });
  test('Testa se quando o horário passo como parâmetro não representa um número um erro é lançado', () => {
    expect(() => getOpeningHours('Tuesday', 'dois:00-PM')).toThrowError();
  });
  test('Testa se quando passado uma hora como parâmetro, o retorno muda de acordo com o periodo passado', () => {
    expect(getOpeningHours('Tuesday', '02:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '02:00-PM')).toBe('The zoo is open');
  });
});
