const box = document.querySelector(".box");
const boxColor = document.getElementById("box-color");
const btn = document.querySelector(".container .controls button");
const input = document.querySelector(".container .controls input");
const hexaCodeCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
];

const generatehexa = () => {
  let hexa = "#";
  for (var i = 0; i < 6; i++) {
    hexa +=
      hexaCodeCharacters[Math.floor(Math.random() * hexaCodeCharacters.length)];
  }
  return hexa;
};

function onButtonClick() {
  let hexaCode = generatehexa();
  input.value = hexaCode;
  box.style.backgroundColor = hexaCode;
  boxColor.textContent = hexaCode;
}

input.addEventListener("keyup", (e) => {
  const value = e.target.value;

  if (value.length == 7 && value[0] === "#") {
    box.style.backgroundColor = value;
    boxColor.textContent = value;
  }
});
