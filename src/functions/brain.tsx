interface PocketbaseData {
  textColorRed: number;
  textColorGreen: number;
  textColorBlue: number;
  colorRed: number;
  colorGreen: number;
  colorBlue: number;
  easyToRead: number;
  beauty: number;
}

interface NeuralNetOutputs {
  accessibilityScore: number;
  beautyScore: number;
}

export async function trainNeuralNet(
  setNet: any,
  net: any,
  TrainingData: any
): Promise<void> {
  // get training data from Pocketbase
  // const response = await fetch(
  //   "http://127.0.0.1:8090/api/collections/dataPoint/records?perPage=1000"
  // );

  const data = TrainingData;

  function trainingCallback(state: any) {
    console.log("Training iteration:", state.iterations);
    console.log("Training error:", state.error);
    // Perform additional actions or log more information here
  }

  // modify training data to include two outputs
  const trainingData = data.items.map((item: PocketbaseData) => ({
    input: [
      item.textColorRed / 255,
      item.textColorGreen / 255,
      item.textColorBlue / 255,
      item.colorRed / 255,
      item.colorGreen / 255,
      item.colorBlue / 255,
    ],
    output: {
      accessibilityScore: item.easyToRead,
      beautyScore: item.beauty,
    },
  }));

  // train the neural network
  net.train(trainingData, {
    // Defaults values --> expected validation
    iterations: 10000, // the maximum times to iterate the training data --> number greater than 0
    errorThresh: 0.03, // the acceptable error percentage from training data --> number between 0 and 1
    learningRate: 0.2, // scales with delta to effect training rate --> number between 0 and 1
    momentum: 0.2, // scales with next layer's change value --> number between 0 and 1
    callback: trainingCallback, // a periodic call back that can be triggered while training --> null or function
    callbackPeriod: 1000, // the number of iterations through the training data between callback calls --> number greater than 0
    timeout: 100000, // the max number of milliseconds to train for --> number greater than 0. Default --> Infinity
  });
  setNet(net);
}

interface Color {
  text: object | any;
  background: object | any;
}

export function getNeuralNetOutputs(net: any, color: Color): NeuralNetOutputs {
  const output = net.run([
    color.text.red / 255,
    color.text.green / 255,
    color.text.blue / 255,
    color.background.red / 255,
    color.background.green / 255,
    color.background.blue / 255,
  ]) as any;

  return {
    accessibilityScore: parseFloat(
      (output.accessibilityScore * 100).toFixed(2)
    ),
    beautyScore: parseFloat((output.beautyScore * 100).toFixed(2)),
  };
}
