import Canvas from "./Canvas";
import ButtonContainer from "./ButtonContainer";
// import TrainingForm from "./TrainingForm";

export default function Main({ net, canvasProps, setCanvasProps }: any) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        placeItems: "center",
        marginTop: "1.5rem",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          height: "auto",
        }}
      >
        <Canvas {...canvasProps} />
        <ButtonContainer
          net={net}
          canvasProps={canvasProps}
          setCanvasProps={setCanvasProps}
        />
      </div>

      {/* <TrainingForm {...canvasProps} /> */}
    </div>
  );
}
