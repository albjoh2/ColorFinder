import getRandomColor from "./getRandomColor";

export default function handleRandomize(setCanvasProps: any, canvasProps: any) {
  setCanvasProps({
    color: getRandomColor({
      background: { red: 0, green: 0, blue: 0 },
      text: { red: 0, green: 0, blue: 0 },
    }),

    shadow: canvasProps.shadow,
    text: canvasProps.text,
  });
}
