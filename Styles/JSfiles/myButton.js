export default class Button {
    constructor(btnText, btnBgColor, btnTitle) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

    show() {
        document.write(
            `<button title="${this.btnTitle}" style="background-color:${this.btnBgColor}; padding: 10px; border: none; color: white; margin-right: 10px;">${this.btnText}</button>`
        );
    }


}





