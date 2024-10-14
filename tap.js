const robot = require("robotjs");

let total = 0;
const baseX = 1713;
const baseY = 370;
const maxTotal = process.argv[2] ? parseInt(process.argv[2]) : 5;

function getRandomOffset() {
  return Math.floor(Math.random() * 101) - 50;
}
function autoClick() {
  const randomX = baseX + getRandomOffset();
  const randomY = baseY + getRandomOffset();
  robot.moveMouseSmooth(randomX, randomY);
  // robot.moveMouse(randomX, randomY);
  robot.mouseClick();

  const randomTime = Math.floor(Math.random() * 100) + 150
  setTimeout(() => {
    total = total + 1;
    console.log(total)
    if (total < maxTotal) autoClick();
  }, randomTime);
}

robot.moveMouseSmooth(baseX, baseY);

for(let i = 0; i < 3; i++) {
    autoClick();
    console.log(i + " tap")
}