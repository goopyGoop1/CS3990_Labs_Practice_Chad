import { arrText, arrColors, arrFColors } from "./myArrays.js";
import { ColorButton } from "./myColorButton.js";

export function generateColorButtons(arrText, arrColors, arrFColors) {
    let colorButtons = [];

    arrText.forEach((text, index) => {
    const bgColor = arrColors[index];
    const fColor = arrFColors[index];
    const title = `${text} is shown on the ${bgColor} background`;

    const btn = new ColorButton(text, bgColor, title, fColor);
    colorButtons.push(btn);
    });

    return colorButtons;
}

export function displayButtonsWithDelay(arrButtons) {
    arrButtons.forEach((button, index) => {
        setTimeout(() => {
            button.show();
        }, index * 300); 
    });
}



