// 📚 Task 5: Flashcard Flip Deck
// Create a flashcard deck:
// •	Each flashcard is a <div> with a front (question) and back (answer)
// •	Clicking the card flips it to reveal the answer (CSS transform or text toggle)
// •	Show multiple cards in a grid
// Use .toggleClass() to flip between front/back, and .each() to loop over cards.




const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
    { question: "What is 5 x 6?", answer: "30" },
    { question: "What is the boiling point of water (°C)?", answer: "100°C" },
    { question: "Which element has the symbol 'O'?", answer: "Oxygen" },
    { question: "In what year did WW2 end?", answer: "1945" },
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    // { question: "What's the square root of 81?", answer: "9" },
    // { question: "What gas do plants absorb?", answer: "Carbon Dioxide" },
    // { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    // { question: "What is the currency of Japan?", answer: "Yen" },
    // { question: "How many continents are there?", answer: "7" },
    // { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
    // { question: "What is the main language spoken in Brazil?", answer: "Portuguese" },
    // { question: "What is the chemical formula for water?", answer: "H₂O" },
    // { question: "Which planet is closest to the sun?", answer: "Mercury" },
    // { question: "How many sides does a hexagon have?", answer: "6" },
    // { question: "What is the capital of Canada?", answer: "Ottawa" },
    // { question: "What does JS stand for?", answer: "JavaScript" },
    // { question: "What is the freezing point of water?", answer: "0°C" },
    // { question: "Who discovered gravity?", answer: "Isaac Newton" },
    // { question: "What is the hardest natural substance?", answer: "Diamond" },
    // { question: "How many legs does a spider have?", answer: "8" },
    // { question: "What does CPU stand for?", answer: "Central Processing Unit" },
    // { question: "Which continent is Egypt in?", answer: "Africa" },
    // { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
    // { question: "What is the tallest mountain on Earth?", answer: "Mount Everest" },
    // { question: "What is 10 squared?", answer: "100" },
    // { question: "What type of animal is a dolphin?", answer: "Mammal" },
    // { question: "What is the longest river in the world?", answer: "Nile" },
    // { question: "Which sport uses a shuttlecock?", answer: "Badminton" },
    // { question: "What is the chemical symbol for gold?", answer: "Au" },
    // { question: "What does URL stand for?", answer: "Uniform Resource Locator" },
    // { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan" },
    // { question: "How many degrees in a right angle?", answer: "90" },
    // { question: "What galaxy do we live in?", answer: "The Milky Way" },
    // { question: "Which gas do humans exhale?", answer: "Carbon Dioxide" },
    // { question: "What is the primary language spoken in Mexico?", answer: "Spanish" },
    // { question: "How many players on a soccer team (on field)?", answer: "11" },
    // { question: "What is the chemical symbol for hydrogen?", answer: "H" },
    // { question: "What year did the Titanic sink?", answer: "1912" },
    // { question: "How many planets are in our solar system?", answer: "8" },
    // { question: "Who was the first person on the moon?", answer: "Neil Armstrong" },
    // { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    // { question: "Which animal is known as the king of the jungle?", answer: "Lion" },
    // { question: "What part of the plant conducts photosynthesis?", answer: "Leaves" },
    // { question: "How many hearts does an octopus have?", answer: "3" },
    // { question: "Which country invented pizza?", answer: "Italy" },
    // { question: "What is the opposite of 'binary' in computing?", answer: "Analog" },
    // { question: "Which metal is liquid at room temperature?", answer: "Mercury" },
    // { question: "What do bees collect from flowers?", answer: "Nectar" },
    // { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    // { question: "How many bones are in the human body?", answer: "206" },
    // { question: "What is the largest mammal?", answer: "Blue Whale" },
    // { question: "What’s the main gas in Earth’s atmosphere?", answer: "Nitrogen" },
    // { question: "Which country has the maple leaf on its flag?", answer: "Canada" },
    // { question: "What is the most spoken language in the world?", answer: "English" },
    // { question: "Which shape has 4 equal sides and 4 right angles?", answer: "Square" },
    // { question: "Which bird is known for mimicking sounds?", answer: "Parrot" }
];


$.each(flashcards, function (index, flashcard) {
    const template = `
    <div class='flashcard'>
        <div class='front'>${flashcard.question}</div>
        <div class='back'>${flashcard.answer}</div>
    </div>
`;
    $("#flashcardDeck").append(template);
});


$(".flashcard").on("click", function () {
    $(this).toggleClass("flipped");
});




// 🎉 Task 6: Emoji Reaction Bar
// Under a blog post, show emoji reaction buttons: 👍 ❤️ 😂 😡
// •	Clicking an emoji increases its count beside it
// •	Clicking again removes the reaction (toggles it)
// •	You can only pick one reaction at a time
// Use .data() to store state and .siblings() to reset others.


$(".emoji").on("click", function () {
    const $clicked = $(this);
    const isActive = $clicked.hasClass("active");

    // If already active, remove the user's reaction
    if (isActive) {
    let count = $clicked.data("count");
    count++;
    $clicked.data("count", count);
    $clicked.find(".count").text(count);
    $clicked.removeClass("active");
    } else {
      // Remove any previous active reaction
    $clicked.siblings(".emoji").each(function () {
        if ($(this).hasClass("active")) {
        let prevCount = $(this).data("count");
        prevCount++;
        $(this).data("count", prevCount);
        $(this).find(".count").text(prevCount);
        $(this).removeClass("active");
        }
    });

      // Add this reaction
    let count = $clicked.data("count");
    count++;
    $clicked.data("count", count);
    $clicked.find(".count").text(count);
    $clicked.addClass("active");
    }
});


