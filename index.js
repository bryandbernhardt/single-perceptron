import Perceptron from './Perceptron.js';

const teste = [
  { inputs: [10, 100], output: 0 },
  { inputs: [17, 90], output: 0 },
  { inputs: [17, 40], output: 0 },
  { inputs: [22, 25], output: 1 },
  { inputs: [24, 30], output: 1 },
  { inputs: [50, 10], output: 1 }
];
const neuro = new Perceptron();
neuro.init(0.15, 5000);
neuro.train(teste);

console.log('Resultado: ' + neuro.run([30, 32]));