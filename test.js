const chalk = require('chalk');
const robot = require("robotjs");

console.log(robot.getMousePos());
console.log(robot.getScreenSize());

setInterval(() => {
  const { x, y } = robot.getMousePos();
  console.log({ x, y });
  const color = robot.getPixelColor(x, y)
  console.log(chalk.hex(`#${color}`)(`#${color}: TTTTT`));
}, 100);
