export default function Loading() {
  let facts = [
    "The project uses the brain.js library to train a neural network to generate beautiful and accessible color combinations for a user interface.",
    "The neural network has two hidden layers, each with six neurons, and uses the sigmoid activation function.",
    "The project by default displays a randomly generated color combination, it is also possible to generate a random combination using the random button.",
    "The project's training form allows users to rate the beauty and accessibility of a color combination. The neural network is trained using this data.",
    "The neural network is currently trained using a dataset of over 500 user-rated color combinations.",
    "The project uses React to create a dynamic and responsive user interface.",
    "The project uses the useEffect hook in React to update the neural network's output in real-time. This allows users to see the neural network's predictions as they change the color combination.",
    "The project's 'Give me something nice'-button generates 500 random color combinations and selects the one with the highest beauty and accessibility scores.",
    "The project is designed to help developers and designers create products that are both visually appealing and accessible to users with different needs and abilities.",
  ];

  let randomFact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <div
      style={{
        zIndex: "100",
        textAlign: "center",
        width: "100vw",
        height: "100vh",
      }}
      className="absolute gap-48 p-60 top-0 left-0 w-full h-full bg-gray-200 opacity-80 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl mb-50 font-bold text-gray-800">
        The network is learning, sit back and relax for a few seconds.
      </h1>

      <span className="text-gray-800 font-bold text-xl">
        Fact: {randomFact}
      </span>
    </div>
  );
}
