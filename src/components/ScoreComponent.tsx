export default function ScoreComponent({
  score,
  title,
  description,
}: {
  score: number;
  title: string;
  description: string;
}) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2
        className={`mb-3 text-2xl sm:text-xl font-semibold`}
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt; {score.toFixed(0)}%
        </span>
      </h2>
      <div className="flex justify-center">
        <p
          className={`text-center m-0 max-w-[30ch] text-sm opacity-50`}
          style={{ textAlign: "center", fontSize: "14px" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
