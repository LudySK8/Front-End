<template>
  <div class="calculadora">
    <input type="text" v-model="valorCorrente" class="resultado" disabled>
    <div class="botoes">
      <button @click="limpar()">C</button>
      <button @click="sinal()">+/-</button>
      <button @click="porcentagem()">%</button>
      <button @click="dividir()">/</button>
      <button @click="juntasNumeros('7')">7</button>
      <button @click="juntasNumeros('8')">8</button>
      <button @click="juntasNumeros('9')">9</button>
      <button @click="multiplicar()">x</button>
      <button @click="juntasNumeros('4')">4</button>
      <button @click="juntasNumeros('5')">5</button>
      <button @click="juntasNumeros('6')">6</button>
      <button @click="diminuir()">-</button>
      <button @click="juntasNumeros('1')">1</button>
      <button @click="juntasNumeros('2')">2</button>
      <button @click="juntasNumeros('3')">3</button>
      <button @click="somar()">+</button>
      <button @click="ponto()">.</button>
      <button @click="juntasNumeros('0')">0</button>
      <button @click="resultado()">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valorCorrente: '',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false
    }
  },
  methods: {
    limpar () {
      this.valorCorrente = ''
    },
    sinal () {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`
    },
    porcentagem () {
      this.valorCorrente = parseFloat(this.valorCorrente) / 100
    },
    juntasNumeros (numero) {
      if (this.operadorClicado) {
        this.valorCorrente = ''
        this.operadorClicado = false
      }
      this.valorCorrente += numero
    },
    ponto () {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.valorCorrente += '.'
      }
    },
    setarValor () {
      this.numeroAnterior = this.valorCorrente
      this.operadorClicado = true
    },
    dividir () {
      this.operador = (num1, num2) => num1 / num2
      this.setarValor()
    },
    multiplicar () {
      this.operador = (num1, num2) => num1 * num2
      this.setarValor()
    },
    diminuir () {
      this.operador = (num1, num2) => num1 - num2
      this.setarValor()
    },
    somar () {
      this.operador = (num1, num2) => num1 + num2
      this.setarValor()
    },
    resultado () {
      this.valorCorrente = String(this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente)
      ))
      this.numeroAnterior = null
    }
  }
}
</script>

<style scoped>
.calculadora {
  background-color: #e3f2fd; 
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}

.resultado {
  width: 100%;
  height: 40px;
  font-size: 24px;
  text-align: right;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.botoes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}

button:active {
  background-color: #ccc;
}
</style>
