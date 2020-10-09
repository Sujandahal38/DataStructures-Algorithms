const Knn = require('./Algorithms/knn/KNN');

const dataset = {
  X: [7, 7, 3, 1],
  Y: [7, 4, 4, 4],
  Value: ['Bad', 'Bad', 'Good', 'Good'],
};

const Classifier = new Knn(dataset, 3);

Classifier.findDistance(3, 7).findNearest();

console.log(`The Test with 3 & 7 results outcome = ${Classifier.result}`);
