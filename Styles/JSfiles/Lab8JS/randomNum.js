// define a class called numbergenerator
class NumberGenerator {

    // constructor runs when a new object is created from the class
    constructor(containerId) {
        this.value = 0; // start with value set to 0
        this.container = document.getElementById(containerId); // get the html element where the component will be placed
        this.render(); // call the method that creates the html and sets up events
    }

    // method to build the user interface
    render() {
        // set the inner html of the container with buttons and display
        this.container.innerHTML = `
            <div class="number-generator">
                <button id="generateBtn">Generate</button>
                <button id="lessBtn">⬅ Less</button>
                <span id="numberDisplay">${this.value}</span>
                <button id="greaterBtn">More ➡</button>
            </div>
            <div class="news-container" id="newsBlock"></div>
        `;

        // when the "generate" button is clicked, generate a random number from 0 to 100
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.value = Math.floor(Math.random() * 101); // generate random integer
            this.updateUI(); // update the number display and news list
        });

        // when the "more" button is clicked, increase value by 1 (maximum 100)
        document.getElementById('greaterBtn').addEventListener('click', () => {
            if (this.value < 100) {
                this.value++; // increment value
                this.updateUI(); // update the ui
            }
        });

        // when the "less" button is clicked, decrease value by 1 (minimum 0)
        document.getElementById('lessBtn').addEventListener('click', () => {
            if (this.value > 0) {
                this.value--; // decrement value
                this.updateUI(); // update the ui
            }
        });

        // event delegation for clicking the "remove" buttons inside news items
        document.getElementById('newsBlock').addEventListener('click', (e) => {
            // check if the clicked element is a "remove-btn"
            if (e.target && e.target.classList.contains('remove-btn')) {
                e.target.parentElement.remove(); // remove the whole news item
            }
        });

        // generate the initial news list based on value
        this.updateNews();
    }

    // update the displayed number and rebuild the news list
    updateUI() {
        document.getElementById('numberDisplay').textContent = this.value; // update the text display of the number
        this.updateNews(); // refresh the news items to match the current number
    }

    // create the list of news items based on the current value
    updateNews() {
        const newsBlock = document.getElementById('newsBlock'); // get the container for news items
        newsBlock.innerHTML = ''; // clear out any old news items

        // loop as many times as the current value to create news items
        for (let i = 0; i < this.value; i++) {
            const item = document.createElement('div'); // create a new div for a news item
            item.className = 'news-item'; // apply a css class to the news item

            // set the inner content with a title, a paragraph, and a remove button
            item.innerHTML = `
                <h3 class="news-title">Title #${i + 1}</h3>
                <p class="text">Lorem</p>
                <button class="remove-btn">Remove</button>
            `;

            // add the news item to the news container
            newsBlock.appendChild(item);
        }
    }
}

// once the web page is fully loaded, create and run the numbergenerator
document.addEventListener('DOMContentLoaded', () => {
    new NumberGenerator('app'); // initialize the component inside the element with id "app"
});
