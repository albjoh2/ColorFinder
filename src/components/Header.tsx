import ColorPickerContainer from "./ColorPickerContainer";
import Logotype from "./Logotype";

interface CanvasProps {
  color: object | any;
  text: string;
  shadow: boolean;
}

interface HeaderProps {
  color: object | any;
  text: string;
  shadow: boolean;
  setCanvasProps: React.Dispatch<React.SetStateAction<CanvasProps>>;
}

export default function Header(props: HeaderProps) {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
        width: "100%",
        fontFamily: "monospace",
        marginTop: "20px",
        maxWidth: "800px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "auto",
          left: "0",
          top: "0",
          justifyContent: "center",
          borderBottom: "1px solid #e2e8f0",
          backgroundColor: "#f7fafc",
          padding: "1rem",
          paddingBottom: "1.5rem",
          paddingTop: "1.5rem",
          borderRadius: "0.375rem",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <h2 style={{ fontSize: "14px", textAlign: "center" }}>
            Get started by picking a color, text color and the text to display.{" "}
          </h2>
        </div>
        <div
          style={{
            zIndex: "10",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          <div
            style={{
              zIndex: "10",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              fontFamily: "monospace",
              display: "flex",
              gap: "0.2rem",
            }}
          >
            <ColorPickerContainer
              title={"Background"}
              colors={props.color.background}
              setCanvasProps={props.setCanvasProps}
            />
            <ColorPickerContainer
              title={"Text"}
              colors={props.color.text}
              setCanvasProps={props.setCanvasProps}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: "150px",
                height: "113px",
                paddingBottom: "0.5rem",
                borderRadius: "0.375rem",
              }}
            >
              <h4>Display</h4>
              <input
                type="text"
                style={{
                  border: "1px solid #aaa",
                  marginTop: "0",
                  padding: "0.1rem 0.2rem",
                  width: "90px",
                  height: "1.5rem",
                }}
                value={props.text}
                onChange={(event) =>
                  props.setCanvasProps({ ...props, text: event.target.value })
                }
                placeholder="Min lilla byrå"
              />
              <label>
                Flat style:
                <input
                  type="checkbox"
                  name="styled"
                  id="styled"
                  onChange={() =>
                    props.shadow
                      ? props.setCanvasProps({ ...props, shadow: false })
                      : props.setCanvasProps({ ...props, shadow: true })
                  }
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <Logotype />
    </div>
  );
}
