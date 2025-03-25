import Button from "./myButton.js";

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, fColor) {
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }

    show() {
        document.write(
        `<button title="${this.btnTitle}" style="background-color:${this.btnBgColor}; padding: 10px; border: none; color:${this.fColor}; margin-right: 10px;">${this.btnText}</button>`
        );
    }
}


