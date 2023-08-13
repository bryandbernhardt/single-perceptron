export default class Perceptron {
  constructor() {
    this.bias = 1;
    this.weights = [];
    this.learnRate = 0.15;
    this.interactions = 1000;
  }

  // funcao de ativacao sigmoide
  sigmoid = (x) => {
    return (1 / (1 + Math.exp(-1 * x)));
  };

  // inicializa o perceptron
  init = (learnRate, interactions) => {
    this.learnRate = learnRate;
    this.interactions = interactions;
  }

  // inicializa os pesos randomicamente baseado no número de inputs
  initWeights = (num) => {
    this.bias = parseInt(Math.random() * 10);

    for (let x = 0; x < num; x++) {
      this.weights[x] = parseInt(Math.random() * 10);
    }
  }

  // treina o perceptron
  train = (data) => {
    this.initWeights(data[0].inputs.length);
    let interaction = 0;
    let error = true;

    // enquanto houver erro ou nao atingir o numero maximo de interacoes
    while (error && interaction < this.interactions) {
      let difference = 0;

      // algoritmo de ajuste dos pesos
      for (let i = 0; i < data.length; i++) {
        // error = false;

        // calcula o resultado
        let result = this.run(data[i].inputs)

        // se o resultado for diferente do esperado
        if (result != data[i].output) {
          error = true;

          // calcula a diferenca
          difference = data[i].output - result;

          // recalcula os pesos
          this.recalcWeights(difference, data[i].inputs);
        }
      }

      // printa o numero da interacao e o erro gerado
      console.info('Interacao: ' + interaction + ' / Erro: ' + difference.toFixed(12));

      interaction++
    }
  }

  // recalcula os pesos
  recalcWeights = (val, inputs) => {
    for (let j = 0; j < this.weights.length; j++) {
      this.weights[j] = this.weights[j] + this.learnRate * val * inputs[j];
    }
  }

  // executa o perceptron
  run = (inputs) => {
    let sum = 0;

    for (let m = 0; m < inputs.length; m++) {
      sum += inputs[m] * this.weights[m];
    }
    sum += this.bias;
    return this.sigmoid(sum);
  }

};