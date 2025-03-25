import { arrText, arrColors } from "./myArrays.js";
import { generateButtons, displayButtonsWithDelay } from "./myFunctions.js";
import { ColorButton } from "./myColorButton.js";

const arrButtons = generateButtons(arrText, arrColors);


displayButtonsWithDelay(arrButtons);


// const fancyButton = new ColorButton(
//     "Important",
//     "#8A2BE2",
//     "Important is shown on the #8A2BE2 background",
//     "yellow"
// );
  
// fancyButton.show();
  