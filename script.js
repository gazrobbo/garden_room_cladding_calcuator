const calculateButton = document.querySelector('#calculate-button');
const resetButton = document.querySelector('#reset-button');
let claddingAreaResult = document.getElementById('cladding-area-result');
let claddingLinearMetreResult = document.getElementById('cladding-linear-metre-result');
let claddingBoardWidth = 0;
let claddingBoardWidthMetre = 0

let roomHeight = 0
let roomWidth = 0
let roomDepth = 0
let claddingArea = 0

let doorHeight = 0
let doorWidth = 0

let window1Height = 0
let window1Width = 0

let window2Height = 0
let window2Width = 0

let window3Height = 0
let window3Width = 0
1
function calculateArea(height, width) {
  let area = height * width;
  return area
};

function calculateCladdingArea() {
  // pulls in  room size
  roomHeight = Number(document.getElementById('room-height').value / 1000);
  roomWidth = Number(document.getElementById('room-width').value / 1000);
  roomDepth = Number(document.getElementById('room-depth').value / 1000);
  let rearWallClad = (document.getElementById("rear-wall-clad")).value;
  // find if rear wall needs to be calculated
  let cladWalls = 2;
  if (rearWallClad == "No") {
    cladWalls = 1
  } else {
    cladWalls = 2
  };
  // calculates room size
  let buildingSize = (roomHeight * roomWidth * 2) + (roomHeight * roomDepth * cladWalls);

  // pulls in  door size
  doorHeight = Number(document.getElementById('door-height').value / 1000);
  doorWidth = Number(document.getElementById('door-width').value / 1000);
  let doorSize = calculateArea(doorHeight, doorWidth);

  // pulls in  window size
  window1Height = Number(document.getElementById('window1-height').value / 1000);
  window1Width = Number(document.getElementById('window1-width').value / 1000);
  let window1Size = calculateArea(window1Height, window1Width);

  window2Height = Number(document.getElementById('window2-height').value / 1000);
  window2Width = Number(document.getElementById('window2-width').value / 1000);
  let window2Size = calculateArea(window2Height, window2Width);

  window3Height = Number(document.getElementById('window3-height').value / 1000);
  window3Width = Number(document.getElementById('window3-width').value / 1000);
  let window3Size = calculateArea(window3Height, window3Width);
// claculates cladding area
  claddingArea = buildingSize - doorSize - window1Size - window2Size - window3Size;
  claddingAreaResult.innerHTML = (claddingArea);
// calculates linear metre 
  claddingBoardWidthMetre = Number(document.getElementById("cladding-board-width").value / 1000);
  claddingLinearMetreResult.innerHTML = (claddingArea / claddingBoardWidthMetre);
  console.log(claddingAreaResult);
  console.log(claddingBoardWidth);
  console.log(claddingBoardWidthMetre);
};

calculateButton.addEventListener('click', () => {
  calculateCladdingArea()
});

// Resets values
function resetValues() {
  // document.getElementById('room-height').value = "";
  // document.getElementById('room-width').value = "";
  // document.getElementById('room-depth').value = "";
  // document.getElementById('door-height').value = "";
  // document.getElementById('door-width').value = "";

  // document.getElementById('window1-height').value = "";
  // document.getElementById('window1-width').value = "";

  // document.getElementById('window2-height').value = "";
  // document.getElementById('window2-width').value = "";

  // document.getElementById('window3-height').value = "";
  // document.getElementById('window3-width').value = "";

  // document.getElementById('cladding-board-width').value = "";
var fields = document.getElementsByTagName('input'),
  length = fields.length;
while (length--) {
  if (fields[length].type === 'text') {
    fields[length].value = '';
  }
}
  claddingBoardWidth = 0;
  claddingBoardWidthMetre = 0
};

resetButton.addEventListener('click', () => {

  resetValues();
});