import { arrText, arrColors } from "./myArrays";
import { Button } from "./myButton";

let arrButton = [];

export function makebutton(){
    arrText.forEach((text, index) => {
        const color = arrColors[index];  
        const  title= `${text} is shown on ther ${color} background`; 
    
        const btn = new Button (text, color, title);
        arrButton.push(btn)
    });   
}

export function displayButtons(arrButton){
    arrButton.forEach((button, index)=> {
        setTimeout(()=>{
            button.show();
        }, index *30000);
    })
}



