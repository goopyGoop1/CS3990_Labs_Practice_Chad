// array containing fruit objects with name, color, and initial rating
const fruitData = [
  { name: 'Apple', color: '#c51409', rating: 3 },
  { name: 'Pear', color: 'green', rating: 2 },
  { name: 'Mango', color: '#c51409', rating: 5 },
  { name: 'Blueberry', color: 'blue', rating: 4 },
  { name: 'Pineapple', color: '#f8e938', rating: 3 },
  { name: 'Cherry', color: '#c51409', rating: 4 },
  { name: 'Honeydew', color: 'green', rating: 2 },
  { name: 'Orange', color: 'orange', rating: 3 },
  { name: 'Plum', color: '#e805e1', rating: 1 },
  { name: 'Lemon', color: '#f8e938', rating: 4 },
  { name: 'Grape', color: '#e805e1', rating: 3 },
  { name: 'Kiwi', color: 'green', rating: 3 },
  { name: 'Peach', color: 'orange', rating: 4 }
];

// base class for a fruit item
class Fruit {
  constructor(name, color) {
    this.name = name;     // store the fruit name
    this.color = color;   // store the fruit color
  }

  // method to create and return a <li> element for the fruit
  show() {
    const li = $('<li></li>')                            // create a list item using jquery
      .text(this.name)                                   // set its text to the fruit name
      .css('background-color', this.color)               // set the background color
      .attr('data-color', this.color);                   // store color in data attribute

    return li; // return the generated element
  }
}

// class to create a button for a color filter
class btnColor {
  constructor(color) {
    this.color = color; // store the button's color
  }

  // method to create a color button element
  show() {
    return $('<div></div>')                        // create a div button
      .addClass('color-button')                    // assign the css class
      .css('background-color', this.color)         // apply background color
      .attr('data-color', this.color);             // set data-color attribute for later use
  }
}

// extended class for a fruit that includes a rating with stars
class RatedFruit extends Fruit {
  constructor(name, color, rating) {
    super(name, color);     // call the parent Fruit constructor
    this.rating = rating;   // store initial rating
  }

  // helper function to return an emoji based on the fruit name
  getEmoji() {
    const map = {
      apple: '🍎',
      pear: '🍐',
      mango: '🥭',
      blueberry: '🫐',
      pineapple: '🍍',
      cherry: '🍒',
      honeydew: '🍈',
      orange: '🍊',
      plum: '🍆',
      lemon: '🍋',
      grape: '🍇',
      kiwi: '🥝',
      peach: '🍑'
    };
    return map[this.name.toLowerCase()] || '🍓'; // default emoji if not found
  }

  // override the show method to include emoji and rating stars
  show() {
    const li = $('<li></li>')                                    // create list item
      .text(`${this.getEmoji()} ${this.name}`)                   // include emoji + name
      .css('background-color', this.color)                       // apply background
      .attr('data-color', this.color);                           // store color for matching

    const starContainer = $('<div class="stars"></div>');        // create a container for stars

    for (let i = 1; i <= 5; i++) {                               // loop through 5 stars
      const star = $('<span class="star">&#9733;</span>');       // create a star character
      star.attr('data-index', i);                                // store index as attribute
      if (i <= this.rating) {                                    // if rating is >= star index
        star.addClass('active');                                 // mark star as filled (orange)
      }
      starContainer.append(star);                                // add star to the container
    }

    li.append(starContainer); // add stars to the fruit item
    return li; // return final fruit list item
  }
}

// wait for the document to be fully loaded
$(document).ready(function () {
  const $fruitList = $('#fruitList');           // get the fruit list container
  const $palette = $('#colorPalette');          // get the color button palette

  // create and display each fruit in the list
  fruitData.forEach(fruit => {
    const f = new RatedFruit(fruit.name, fruit.color, fruit.rating); // create fruit with stars
    $fruitList.append(f.show());                                      // add to the page
  });

  // get a list of unique colors from the fruit data
  const colors = [...new Set(fruitData.map(f => f.color))];

  // create and display a color button for each color
  colors.forEach(color => {
    const btn = new btnColor(color);          // create button
    $palette.append(btn.show());              // add button to palette
  });

  // event delegation: when a color button is clicked
  $palette.on('click', '.color-button', function () {
    const selectedColor = $(this).data('color'); // get the selected color

    // loop through all fruit items
    $('#fruitList li').each(function () {
      const fruitColor = $(this).data('color');             // get fruit's color
      $(this).toggleClass('highlight', fruitColor === selectedColor); // add/remove highlight
    });
  });

  // event delegation: when a star is clicked
  $fruitList.on('click', '.star', function () {
    const clickedIndex = parseInt($(this).data('index'));       // get index of clicked star
    const $allStars = $(this).parent().find('.star');           // get all stars in same block

    $allStars.each(function (index) {
      $(this).toggleClass('active', index < clickedIndex);      // set orange for clicked and below
    });
  });
});
