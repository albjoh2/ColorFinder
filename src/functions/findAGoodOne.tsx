import getRandomColor from "./getRandomColor";
import { getNeuralNetOutputs } from "./brain";

export default function findAGoodOne(
  type: string = "both",
  net: any,
  canvasProps: any,
  setCanvasProps: any
) {
  let bestScore = 0;
  let bestColor = {
    background: {
      red: 0,
      green: 0,
      blue: 0,
    },
    text: {
      red: 0,
      green: 0,
      blue: 0,
    },
  };

  for (let i = 0; i < 500; i++) {
    let color = getRandomColor({
      background: { red: 0, green: 0, blue: 0 },
      text: { red: 0, green: 0, blue: 0 },
    });
    if (type === "text") {
      color.background = canvasProps.color.background;
    }
    if (type === "background") {
      color.text = canvasProps.color.text;
    }
    let data = getNeuralNetOutputs(net, color);
    let score = (data.accessibilityScore + data.beautyScore) / 2;
    if (score > bestScore) {
      bestScore = score;
      bestColor = color;
    }
  }
  setCanvasProps({
    color: bestColor,
    text: canvasProps.text,
    shadow: canvasProps.shadow,
  });
}
