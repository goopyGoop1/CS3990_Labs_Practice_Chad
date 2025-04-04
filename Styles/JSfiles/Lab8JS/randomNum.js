// Define a class called NumberGenerator
class NumberGenerator {
    
    // Constructor is called when a new instance is created
    constructor(containerId) {
        this.value = 0; // Initialize the value to 0
        this.container = document.getElementById(containerId); // Get the container element by its ID
        this.render(); // Call render method to set up the UI
    }

    // Method to create and display the component UI
    render() {
        // Inject HTML content inside the container
        this.container.innerHTML = `
            <div class="number-generator">
                <button id="generateBtn">Generate</button>
                <button id="lessBtn">⬅ Less</button>
                <span id="numberDisplay">${this.value}</span>
                <button id="greaterBtn">More ➡</button>
            </div>
            <div class="news-container" id="newsBlock"></div>
        `;

        // Add click event to "Generate" button: sets value to a random number between 0 and 100
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.value = Math.floor(Math.random() * 101);
            this.updateUI(); // Update the display and news items
        });

        // Add click event to "More" button: increments value (max 100)
        document.getElementById('greaterBtn').addEventListener('click', () => {
            if (this.value < 100) {
                this.value++;
                this.updateUI(); // Update UI after increment
            }
        });

        // Add click event to "Less" button: decrements value (min 0)
        document.getElementById('lessBtn').addEventListener('click', () => {
            if (this.value > 0) {
                this.value--;
                this.updateUI(); // Update UI after decrement
            }
        });

        // Add event delegation to the news block: handle remove button clicks
        document.getElementById('newsBlock').addEventListener('click', (e) => {
            // If a clicked element has the "remove-btn" class
            if (e.target && e.target.classList.contains('remove-btn')) {
                e.target.parentElement.remove(); // Remove the parent news item div
            }
        });

        // Populate initial news items (zero at this point)
        this.updateNews();
    }

    // Method to update the number display and regenerate the news items
    updateUI() {
        document.getElementById('numberDisplay').textContent = this.value; // Update number on screen
        this.updateNews(); // Rebuild the news items list
    }

    // Method to populate the news block based on the current value
    updateNews() {
        const newsBlock = document.getElementById('newsBlock'); // Get the news block container
        newsBlock.innerHTML = ''; // Clear previous content

        // Loop from 0 to current value - 1
        for (let i = 0; i < this.value; i++) {
            const item = document.createElement('div'); // Create a new div for a news item
            item.className = 'news-item'; // Assign class

            // Set inner HTML of news item with title, text, and remove button
            item.innerHTML = `
                <h3 class="news-title">Title #${i + 1}</h3>
                <p class="text">Lorem</p>
                <button class="remove-btn">Remove</button>
            `;

            newsBlock.appendChild(item); // Add the news item to the news block
        }
    }
}

// When the document is fully loaded, create a new NumberGenerator in the 'app' container
document.addEventListener('DOMContentLoaded', () => {
    new NumberGenerator('app');
});
