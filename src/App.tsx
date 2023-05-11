"use client";

import Main from "./components/Main";
import { trainNeuralNet, getNeuralNetOutputs } from "./functions/brain";
import getRandomColor from "./functions/getRandomColor";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ScoreContainer from "./components/ScoreContainer";
import * as brain from "brain.js";
import Loading from "./components/Loading";
import { CONFIG } from "./constants";
import * as data from "./assets/data.json";

export function App() {
  const [beautyScore, setBeautyScore] = useState(0);
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [net, setNet] = useState(new brain.NeuralNetwork(CONFIG));

  const [canvasProps, setCanvasProps] = useState({
    color: getRandomColor({
      background: { red: 0, green: 0, blue: 0 },
      text: { red: 0, green: 0, blue: 0 },
    }),
    text: "Min lilla byrå",
    shadow: true,
  });

  const [isNetTrained, setIsNetTrained] = useState(false);

  useEffect(() => {
    if (isNetTrained) {
      let data = getNeuralNetOutputs(net, canvasProps.color);
      setAccessibilityScore(data.accessibilityScore);
      setBeautyScore(data.beautyScore);
      setTotalScore((data.accessibilityScore + data.beautyScore) / 2);
    }
  }, [isNetTrained, canvasProps]);

  useEffect(() => {
    trainNeuralNet(setNet, net, data).then(() => {
      setIsNetTrained(true);
    });
  }, []);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      {!isNetTrained && <Loading />}
      <Header {...canvasProps} setCanvasProps={setCanvasProps} />
      <Main
        net={net}
        canvasProps={canvasProps}
        setCanvasProps={setCanvasProps}
      />

      <ScoreContainer
        accessibilityScore={accessibilityScore}
        beautyScore={beautyScore}
        totalScore={totalScore}
      />
    </main>
  );
}

export default App;
