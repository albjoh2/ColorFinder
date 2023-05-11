//generate random color
export default function getRandomColor(colors: {
  background: {
    red: number;
    green: number;
    blue: number;
  };
  text: {
    red: number;
    green: number;
    blue: number;
  };
}) {
  colors.text.red = Math.floor(Math.random() * 254) + 1;
  colors.text.green = Math.floor(Math.random() * 254) + 1;
  colors.text.blue = Math.floor(Math.random() * 254) + 1;
  colors.background.red = Math.floor(Math.random() * 254) + 1;
  colors.background.green = Math.floor(Math.random() * 254) + 1;
  colors.background.blue = Math.floor(Math.random() * 254) + 1;

  return colors;
}
