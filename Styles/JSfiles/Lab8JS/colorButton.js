// class to represent a single color button
class ColorButton {
    constructor(color) {
        this.color = color; // store the color value passed to the constructor
    }

    // method to create and return a button element styled with this color
    createElement() {
        const btn = document.createElement('div');         // create a new div element to act as a button
        btn.className = 'color-button';                    // assign a css class for consistent styling
        btn.style.backgroundColor = this.color;            // set the button's background color
        btn.setAttribute('data-color', this.color);        // store the color in a data attribute for use in event handling
        return btn;                                        // return the finished button element
    }
}

// class to manage the entire palette of color buttons and interactions with the target block
class PaletteMenu {
    constructor(paletteId, targetId) {
        this.palette = document.getElementById(paletteId); // get the palette container element by id
        this.target = document.getElementById(targetId);   // get the target block that will react to button events
        this.colors = [                                    // define an array of hex color codes (including a named color "red")
            '#000000', '#8b0000', '#ffff00', '#00ff00', '#00bfff',
            '#0000ff', '#9370db', '#ffffff', '#a9a9a9', '#a0522d',
            '#ffcccb', '#ffffe0', '#adff2f', '#87cefa', '#d8bfd8', 'red'
        ];
        this.originalBackground = this.target.style.backgroundColor; // store the original background color of the target for reset

        this.renderButtons();     // call method to create and insert the color buttons
        this.setupDelegation();   // set up event delegation for click and hover events
    }

    // method to create and render all color buttons into the palette container
    renderButtons() {
        this.colors.forEach(color => {
            const btn = new ColorButton(color);               // create a new ColorButton instance
            this.palette.appendChild(btn.createElement());    // append the created button to the palette container
        });
    }

    // method to attach event listeners using event delegation
    setupDelegation() {
        // when a button inside the palette is clicked
        this.palette.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');  // get the color from the clicked element
            if (color) {
                this.target.style.color = color;                // change the text color of the target block
            }
        });

        // when the mouse hovers over a color button
        this.palette.addEventListener('mouseover', (e) => {
            const color = e.target.getAttribute('data-color');  // get the color from the hovered element
            if (color) {
                this.target.style.backgroundColor = color;      // temporarily change the background color of the target block
            }
        });

        // when the mouse leaves a color button
        this.palette.addEventListener('mouseout', (e) => {
            const color = e.target.getAttribute('data-color');  // get the color from the element the mouse left
            if (color) {
                this.target.style.backgroundColor = this.originalBackground; // restore the original background color
            }
        });
    }
}

// once the document is fully loaded, create a new palette menu
document.addEventListener('DOMContentLoaded', () => {
    new PaletteMenu('color-palette', 'target-block'); // initialize the palette with the given element ids
});
