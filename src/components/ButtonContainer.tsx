import findAGoodOne from "../functions/findAGoodOne";
import handleRandomize from "../functions/handleRandomize";
import RandomButton from "./RandomButton";

export default function ButtonContainer({
  net,
  canvasProps,
  setCanvasProps,
}: any) {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => findAGoodOne("both", net, canvasProps, setCanvasProps)}
      >
        Something nice
      </button>
      <button
        onClick={() => findAGoodOne("text", net, canvasProps, setCanvasProps)}
      >
        Nice text color.
      </button>
      <button
        onClick={() =>
          findAGoodOne("background", net, canvasProps, setCanvasProps)
        }
      >
        Nice background.
      </button>
      <RandomButton
        handleRandomize={() => handleRandomize(setCanvasProps, canvasProps)}
      />
    </div>
  );
}
