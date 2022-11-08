const calculateButton = document.querySelector('#calculate-button');
let answer = document.getElementById('answer');

calculateButton.addEventListener('click', () => {
  let roomHeight = Number(document.getElementById('room-height').value);
  let roomWidth = Number(document.getElementById('room-width').value);
  let roomDepth = Number(document.getElementById('room-depth').value);


  let result = (roomHeight * roomWidth * roomDepth);
  answer.innerHTML = (result);
});