type RandomButtonProps = {
  handleRandomize: () => void;
};

export default function RandomButton({ handleRandomize }: RandomButtonProps) {
  return <button onClick={handleRandomize}>Random</button>;
}
