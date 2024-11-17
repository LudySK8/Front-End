const listagemPokedevs = document.querySelectorAll('.pokedev');
const cartoesPokedev = document.querySelectorAll('.cartao-pokedev');

listagemPokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', () => {
        const cartaoAberto = document.querySelector('.cartao-pokedev.aberto');
        if (cartaoAberto) {
            cartaoAberto.classList.remove('aberto');
        }

        const pokedevAtivo = document.querySelector('.pokedev.ativo');
        if (pokedevAtivo) {
            pokedevAtivo.classList.remove('ativo');
        }

        pokedev.classList.add('ativo');

        const idPokedevSelecionado = pokedev.id;
        const cartaoSelecionado = document.getElementById(`cartao-${idPokedevSelecionado}`);
        if (cartaoSelecionado) {
            cartaoSelecionado.classList.add('aberto');
        }
    });
});
