import { arrText, arrColors, arrFColors } from "./myArrays.js";
import { generateColorButtons, displayButtonsWithDelay } from "./myFunctions.js";
import { ColorButton } from "./myColorButton.js";

const colorButtons = generateColorButtons(arrText, arrColors, arrFColors);
displayButtonsWithDelay(colorButtons);

// Show a ColorButton after all buttons are shown (4 * 30s = 120s)
setTimeout(() => {
    const fancyButton = new ColorButton(
    "Important",
    "#8A2BE2",
    "Important is shown on the #8A2BE2 background",
    "yellow"
    );

    fancyButton.show();
}, colorButtons.length * 3000);
