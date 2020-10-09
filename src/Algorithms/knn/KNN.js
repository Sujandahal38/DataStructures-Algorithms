class Knn {
  constructor(dataset, k) {
    this.K = k;
    this.X = dataset.X;
    this.Y = dataset.Y;
    this.value = dataset.Value;
    this.distance = [];
    this.result = null;
  }
  findDistance(a, b) {
    for (let i = 0; i < this.X.length; i++) {
      this.distance.push(
        Math.sqrt(Math.pow(this.X[i] - a, 2) + Math.pow(this.Y[i] - b, 2)),
      );
    }
    return this;
  }
  findNearest() {
    if (this.distance.length === 0) {
      return;
    }
    let sorted = this.distance.slice().sort((a, b) => a - b);
    let ranks = this.distance.map((dist) => sorted.indexOf(dist) + 1);
    let kIndexes = [];
    for (let i = 0; i < ranks.length; i++) {
      if (ranks[i] <= this.K) {
        kIndexes.push(ranks.indexOf(ranks[i]));
      }
    }
    let valArray = [];
    for (let index of kIndexes) {
      valArray.push(this.value[index]);
    }
    let mostFrequent = 0;
    let maxCount = 0;
    for (let i = 0; i < valArray.length; i++) {
      let count = 0;
      for (let j = 0; j < valArray.length; j++) {
        if (valArray[i] == valArray[j]) {
          count++;
        }
      }
      if (maxCount < count) {
        maxCount = count;
        mostFrequent = valArray[i];
      }
      this.result = mostFrequent;
    }
    return this;
  }
}

module.exports = Knn;
