const calculateButton = document.querySelector('#calculate-button');
let answer = document.getElementById('answer');


calculateButton.addEventListener('click', () => {
  // pulls in  room size
  let roomHeight = Number(document.getElementById('room-height').value / 1000);
  let roomWidth = Number(document.getElementById('room-width').value / 1000);
  let roomDepth = Number(document.getElementById('room-depth').value / 1000);
  let rearWallClad = (document.getElementById("rear-wall-clad")).value;
  // find if rear wall needs to be calculated
  let cladWalls = 5;
  if (rearWallClad == "Yes") {
    cladWalls = 2
  } else {
    cladWalls = 1
  };
  // calculates room size
  let buildingSize = (roomHeight * roomWidth * 2) + (roomHeight * roomDepth * cladWalls);

  // pulls in  door size
  let doorHeight = Number(document.getElementById('door-height').value / 1000);
  let doorWidth = Number(document.getElementById('door-width').value / 1000);
  let doorSize = doorHeight * doorWidth;

  // pulls in  window size
  let window1Height = Number(document.getElementById('window1-height').value / 1000);
  let window1Width = Number(document.getElementById('window1-width').value / 1000);
  let window1Size = window1Height * window1Width;

  let window2Height = Number(document.getElementById('window2-height').value / 1000);
  let window2Width = Number(document.getElementById('window2-width').value / 1000);
  let window2Size = window2Height * window2Width;

  let window3Height = Number(document.getElementById('window3-height').value / 1000);
  let window3Width = Number(document.getElementById('window3-width').value / 1000);
  let window3Size = window3Height * window3Width;

  console.log(cladWalls);

  let result = buildingSize - doorSize - window1Size - window2Size - window3Size;
  answer.innerHTML = (result);
});