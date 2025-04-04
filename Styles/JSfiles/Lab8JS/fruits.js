// Sample fruit data (mixed so same colors aren't side-by-side)
const fruitData = [
  { name: 'Apple', color: 'red', rating: 3 },
  { name: 'Pear', color: 'green', rating: 2 },
  { name: 'Mango', color: 'red', rating: 5 },
  { name: 'Blueberry', color: 'blue', rating: 4 },
  { name: 'Pineapple', color: 'yellow', rating: 3 },
  { name: 'Cherry', color: 'red', rating: 4 },
  { name: 'Honeydew', color: 'green', rating: 2 },
  { name: 'Orange', color: 'orange', rating: 3 },
  { name: 'Plum', color: 'blue', rating: 1 },
  { name: 'Lemon', color: 'yellow', rating: 4 },
  { name: 'Grape', color: 'purple', rating: 3 },
  { name: 'Kiwi', color: 'green', rating: 3 },
  { name: 'Peach', color: 'orange', rating: 4 }
];

// Base Fruit class
class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  show() {
    const li = $('<li></li>')
      .text(this.name)
      .css('background-color', this.color)
      .attr('data-color', this.color);

    return li;
  }
}

// Color button class
class btnColor {
  constructor(color) {
    this.color = color;
  }

  show() {
    return $('<div></div>')
      .addClass('color-button')
      .css('background-color', this.color)
      .attr('data-color', this.color);
  }
}

// RatedFruit class with emoji support
class RatedFruit extends Fruit {
  constructor(name, color, rating) {
    super(name, color);
    this.rating = rating;
  }

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
      plum: '🍑',
      lemon: '🍋',
      grape: '🍇',
      kiwi: '🥝',
      peach: '🍑'
    };
    return map[this.name.toLowerCase()] || '🍓';
  }

  show() {
    const li = $('<li></li>')
      .text(`${this.getEmoji()} ${this.name}`)
      .css('background-color', this.color)
      .attr('data-color', this.color);

    const starContainer = $('<div class="stars"></div>');
    for (let i = 1; i <= 5; i++) {
      const star = $('<span class="star">&#9733;</span>'); // Unicode star
      star.attr('data-index', i);
      if (i <= this.rating) {
        star.addClass('active');
      }
      starContainer.append(star);
    }

    li.append(starContainer);
    return li;
  }
}

$(document).ready(function () {
  const $fruitList = $('#fruitList');
  const $palette = $('#colorPalette');

  // Render fruit list
  fruitData.forEach(fruit => {
    const f = new RatedFruit(fruit.name, fruit.color, fruit.rating);
    $fruitList.append(f.show());
  });

  // Get unique colors
  const colors = [...new Set(fruitData.map(f => f.color))];

  // Render color buttons
  colors.forEach(color => {
    const btn = new btnColor(color);
    $palette.append(btn.show());
  });

  // Highlight fruits on color button click (event delegation)
  $palette.on('click', '.color-button', function () {
    const selectedColor = $(this).data('color');

    $('#fruitList li').each(function () {
      const fruitColor = $(this).data('color');
      $(this).toggleClass('highlight', fruitColor === selectedColor);
    });
  });

  // Star rating logic (event delegation)
  $fruitList.on('click', '.star', function () {
    const clickedIndex = parseInt($(this).data('index'));
    const $allStars = $(this).parent().find('.star');

    $allStars.each(function (index) {
      $(this).toggleClass('active', index < clickedIndex);
    });
  });
});
