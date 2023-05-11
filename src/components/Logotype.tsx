export default function Logotype() {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        height: "auto",
        width: "100%",
        justifyContent: "center",
        bottom: "0",
        left: "0",
        backgroundColor: "#f7fafc",
      }}
    >
      <a
        style={{
          display: "flex",
          placeItems: "center",
          gap: "0.5rem",
          padding: "1rem",
        }}
        href="https://minlillabyra.se"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{" "}
        <img
          src="/Logotyp_mork.png"
          alt="Min lilla byrå"
          className="dark:invert"
          width={80}
          height={36}
          style={{ height: "auto" }}
        />
      </a>
    </div>
  );
}
