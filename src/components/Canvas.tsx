import TextComponent from "./TextComponent";

interface CanvasProps {
  color: object | any;
  text: string;
  shadow: boolean;
}

export default function Canvas(props: CanvasProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "300px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgb(${props.color.background.red}, 
              ${props.color.background.green}, 
              ${props.color.background.blue})`,
          position: "relative",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            background: props.shadow
              ? "linear-gradient(0deg, #00000011 0%, #77777700 35%, #99999900 65%, #ffffff11 100%)"
              : "",
            boxShadow: props.shadow
              ? `inset 0px 0px 0px 3px rgb(${props.color.text.red}, 
                ${props.color.text.green}, 
                ${props.color.text.blue})`
              : "",
          }}
        ></div>
        <TextComponent
          text={props.text}
          textcolor={props.color.text}
          shadow={props.shadow}
        />
      </div>
    </>
  );
}
