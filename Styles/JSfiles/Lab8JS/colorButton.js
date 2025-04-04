// Class for individual color buttons
class ColorButton {
    constructor(color) {
    this.color = color;
    }

    // Create a button element styled with the color
    createElement() {
    const btn = document.createElement('div');
    btn.className = 'color-button';
    btn.style.backgroundColor = this.color;
      btn.setAttribute('data-color', this.color); // Store color as data attribute
    return btn;
    }
}

  // Event handler manager class for the whole palette
class PaletteMenu {
    constructor(paletteId, targetId) {
    this.palette = document.getElementById(paletteId);
    this.target = document.getElementById(targetId);
    this.colors =  [
        '#000000', '#8b0000', '#ffff00', '#00ff00', '#00bfff',
        '#0000ff', '#9370db', '#ffffff', '#a9a9a9', '#a0522d',
        '#ffcccb', '#ffffe0', '#adff2f', '#87cefa', '#d8bfd8','red'
    ];
    this.originalBackground = this.target.style.backgroundColor;

    this.renderButtons();
    this.setupDelegation();
    }

    // Render all buttons inside the palette container
    renderButtons() {
    this.colors.forEach(color => {
        const btn = new ColorButton(color);
        this.palette.appendChild(btn.createElement());
    });
    }

    // Set up a single event listener for delegation
    setupDelegation() {
    this.palette.addEventListener('click', (e) => {
        const color = e.target.getAttribute('data-color');
        if (color) {
        this.target.style.color = color;
        }
    });

    this.palette.addEventListener('mouseover', (e) => {
        const color = e.target.getAttribute('data-color');
        if (color) {
        this.target.style.backgroundColor = color;
        }
    });

    this.palette.addEventListener('mouseout', (e) => {
        const color = e.target.getAttribute('data-color');
        if (color) {
        this.target.style.backgroundColor = this.originalBackground;
        }
    });
    }
}

  // Initialize the palette on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new PaletteMenu('color-palette', 'target-block');
});
