import React, { useState, useEffect } from "react";

interface CanvasProps {
  color: object | any;
  text: string;
  shadow: boolean;
}

export default function ColorPickerContainer({
  title,
  colors,
  setCanvasProps,
}: {
  title: string;
  colors: { red: number; green: number; blue: number };
  setCanvasProps: React.Dispatch<React.SetStateAction<CanvasProps>>;
}) {
  const calculateHex = () => {
    const red = colors.red.toString(16).padStart(2, "0");
    const green = colors.green.toString(16).padStart(2, "0");
    const blue = colors.blue.toString(16).padStart(2, "0");
    return `#${red}${green}${blue}`;
  };

  const [hexValue, setHexValue] = useState(calculateHex());

  useEffect(() => {
    setHexValue(calculateHex());
  }, [colors]);

  const handleRangeChange = (color: string, value: number) => {
    // Update the color value in the state based on which range is changed
    setCanvasProps((prevState) => ({
      ...prevState,
      color: {
        ...prevState.color,
        [title.toLowerCase()]: {
          ...prevState.color[title.toLowerCase()],
          [color]: value,
        },
      },
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
      setHexValue(hex);
      const red = parseInt(hex.slice(1, 3), 16);
      const green = parseInt(hex.slice(3, 5), 16);
      const blue = parseInt(hex.slice(5, 7), 16);
      setCanvasProps((prevState) => ({
        ...prevState,
        color: {
          ...prevState.color,
          [title.toLowerCase()]: {
            ...prevState.color[title.toLowerCase()],
            red,
            green,
            blue,
          },
        },
      }));
    } else {
      setHexValue(hex);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "220px",
        paddingBottom: "0.5rem",
        borderRadius: "0.375rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          justifyContent: "flex-start",
        }}
      >
        <h4>{title}</h4>
        <input
          style={{
            border: "1px solid #aaa",
            marginTop: "0",
            padding: "0.1rem 0.1rem",
            width: "70px",
            height: "1.5rem",
            color: /^#[0-9a-fA-F]{6}$/.test(hexValue) ? "#333" : "#aaa",
            borderColor: /^#[0-9a-fA-F]{6}$/.test(hexValue) ? "#333" : "#aaa",
          }}
          className="h-2"
          type="text"
          maxLength={7}
          value={hexValue}
          onChange={handleTextChange}
        />
      </div>
      <label
        style={{
          width: "180px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ width: "95px" }}>Red</span>
        <input
          type="range"
          value={colors.red}
          min={0}
          max={255}
          onChange={(e) => handleRangeChange("red", parseInt(e.target.value))}
        />
      </label>
      <label
        style={{
          width: "180px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ width: "95px" }}>Green</span>
        <input
          type="range"
          value={colors.green}
          min={0}
          max={255}
          onChange={(e) => handleRangeChange("green", parseInt(e.target.value))}
        />
      </label>
      <label
        style={{
          width: "180px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ width: "95px" }}>Blue</span>
        <input
          type="range"
          value={colors.blue}
          min={0}
          max={255}
          onChange={(e) => handleRangeChange("blue", parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}
