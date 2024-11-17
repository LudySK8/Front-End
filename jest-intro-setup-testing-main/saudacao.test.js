const saudacao = require('./saudacao');

describe('Teste para saudação', () => {
    test('Deverá retornar Olá, João', () => {
        const olaJoão = saudacao.dizOla('João')
        expect(olaJoão).toBe('Ola João')
    })
})