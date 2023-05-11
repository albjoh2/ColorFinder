import ScoreComponent from "./ScoreComponent";

export default function ScoreContainer({
  accessibilityScore,
  beautyScore,
  totalScore,
}: {
  accessibilityScore: number;
  beautyScore: number;
  totalScore: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        maxWidth: "820px",
      }}
    >
      <ScoreComponent
        score={accessibilityScore}
        title="Accessibility Score"
        description="A score based on the AI-models score of color contrast between text and
          background."
      />

      <ScoreComponent
        score={beautyScore}
        title="Beauty Score"
        description="A score based on how well the model thinks the colors goes together."
      />

      <ScoreComponent
        score={totalScore}
        title="Total Score"
        description="This score tells you what the model thinks of the design as a whole."
      />
    </div>
  );
}
