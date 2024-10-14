const { exec } = require('child_process');

function getRandomOffset() {
    return Math.floor(Math.random() * 101) - 50; 
}

function autoClick() {
    const baseX = 1713;
    const baseY = 370;

    const randomX = baseX + getRandomOffset();
    const randomY = baseY + getRandomOffset();

    console.log(`Clicking at x: ${randomX}, y: ${randomY}`);

    const script = `
        tell application "System Events"
            click at {${randomX}, ${randomY}}
        end tell
    `;

    console.log(`osascript -e '${script}'`);

    exec(`osascript -e '${script}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
    });
}

setInterval(autoClick, 1000);