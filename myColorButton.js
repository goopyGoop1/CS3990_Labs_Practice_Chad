import Button from "./myButton";

export default class ColorButton extends Button{
        
    constructor(fColor){
        this.fColor = fColor;
    }

    show(){
        document.writeln(
            `<button button title= "${this.btnTitle}" style="background-color:${this.btnBgColor}"
                padding: 10px; border: none; color:${this.fColor};>${this.btnText}</button> `
        );

    }
    
}


