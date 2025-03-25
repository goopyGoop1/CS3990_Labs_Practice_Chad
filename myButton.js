
export default class Button{

    

    constructor(btnText, btnBgColor, btnTitle){
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;

    }

    show(){
        document.writeln(
            `<button button title= "${this.btnTitle}" style="background-color:${this.btnBgColor}"
                padding: 10px; border: none; color: white;>${this.btnText}</button> `
        );

    }




}







