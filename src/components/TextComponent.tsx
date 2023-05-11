export default function TextComponent(props: {
  text: string;
  textcolor: object | any;
  shadow: boolean;
}) {
  return (
    <p
      style={{
        color: `rgb(${props.textcolor.red}, ${props.textcolor.green}, ${props.textcolor.blue})`,
        fontSize: "48px",
        fontFamily: "serif",
        textShadow: props.shadow ? "2px 2px 2px #00000022" : "",
        display: "block",
      }}
      className="text"
    >
      {props.text}
    </p>
  );
}
