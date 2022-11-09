const calculateButton = document.querySelector('#calculate-button');
let answer = document.getElementById('answer');
const rearWall = document.getElementById("rear-wall-clad");

calculateButton.addEventListener('click', () => {
  let roomHeight = Number(document.getElementById('room-height').value);
  let roomWidth = Number(document.getElementById('room-width').value);
  let roomDepth = Number(document.getElementById('room-depth').value);
  let rearWallClad = rearWall.value;
  console.log(rearWallClad);

  let result = (roomHeight * roomWidth * roomDepth);
  answer.innerHTML = (result);
});