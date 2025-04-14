$("#toggleBtn").click(function (){
    $("#togglePara").toggle()
});


$("#changeTextBtn").click(function (){
    $("#textBox").text("THIS NEW TEXT")
});


$("#hoverBox").hover(function() {
        $(this).css({ backgroundColor: "red" });
},
        function () {
            $(this).css({backgroundColor:""});
        }

);


$("#sampleForm").submit(function (e) {
    const name = $("#nameInput").val().trim();

    if(name === ""){
        e.preventDefault()
        $("#formWarning").show();
    }
    else{
        $("#formWarning").hide();
    }
});


$("#termsCheck").change(function () {
    if ($(this).prop("checked")) {
        $("#agreeSubmit").prop("disabled", false);
    } else {
        $("#agreeSubmit").prop("disabled", true);
    }
});



$("#addItemBtn").click(function () {
    const item = $("#itemInput").val().trim();

    if (item !== "") {
        $("#itemList").append("<li>" + item + "</li>");
        $("#itemInput").val(""); // clears input
    }
});



$("table tr:gt(0):even").css("backgroundColor", "red");
$("table tr:gt(0):odd").css("backgroundColor", "yellow");



$("#panelHeader").click(function () { 
    $("#slidePanel").slideToggle();
    
});

$("#fadeBtn").click(function () { 
    $("#fadeImage").fadeToggle();
    
});


$("#loadContentBtn").click(function () {
    $("#ajaxContent").append("<p>This item</p>");
});





const fruits = ["Apple", "Banana", "Orange", "Mango"];

$("#addItemsBtn2").click(function () {
    $("#fruitList").empty(); // remove this if you want to keep adding

    $.each(fruits, function (index, fruit) {
        $("#fruitList").append("<li>" + fruit + "</li>");
    });
});

const colors = ['red', 'green', 'yellow', 'pink','orange','blue', 'lightblue'];

$("#textToChange").click(function () { 
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    
    
    $(this).css('color', randomColor);
    
});


const carBrands = [
    "Toyota", "Ford", "Honda", "Chevrolet", "BMW",
    "Tesla", "Nissan", "Hyundai", "Kia", "Volkswagen",
    "Toyota", "Honda", "Ford", "Mazda", "Mercedes-Benz",
    "Subaru", "Audi", "Chevrolet", "BMW", "Lexus"
];

$("#addUniqueCars").click(function () {
      // Create a Set to track added items
    const seen = new Set();

      // Add existing items already in the list
    $("#carList li").each(function () {
        seen.add($(this).text());
    });

      // Loop through the carBrands array
    $.each(carBrands, function (index, brand) {
        if (!seen.has(brand)) {
            $("#carList").append("<li>" + brand + "</li>");
              seen.add(brand); // update seen in real-time
        }
    });
});



// const products = [
//     { name: "Laptop", price: "$999" },
//     { name: "Phone", price: "$599" },
//     { name: "Tablet", price: "$399" }
// ];


// products.forEach(product => {
//     $('h1').first().after("<div>"+ product.name + " - " + product.price + "</div>");

// });


// 🧮 Task 1: Dynamic To-Do List with Priorities
// Build a to-do list with the following features:
// •	Input field + "Add" button
// •	Each item added has:
// o	Task text
// o	Priority dropdown (High/Medium/Low)
// o	Remove button
// •	High priority tasks are styled in red, medium in orange, low in green
// •	Use jQuery to:
// o	Create elements dynamically
// o	Apply color styles based on dropdown value
// o	Use .on() to handle remove clicks (event delegation)






$("h2").last().after("<input type='text' placeholder='Enter a Task' id='taskInput'>");
$("#taskInput").after("<select id='priority'><option value=''>---Select---</option><option value='high'>High</option><option value='medium'>Medium</option><option value='low'>Low</option></select>")
$("#priority").after("<button id='taskBtn'>Add</button>");
$("#taskBtn").after("<div id='taskContainer'></div>");
$("#taskContainer").after("<ul id='toDoList'></ul>");

$("#taskBtn").click(function () { 
    const item = $("#taskInput").val();
    const priority = $("#priority").val();

    let color;

    switch(priority){
        case "high":
            color = "red";
            break;
        case "medium":
            color = "orange"; 
            break;
        case "low":
            color = "green";    
            break;
        default:
            color = "gray"; // fallback if needed
    }

    // Add the task to the list with color
    $("#toDoList").append(`<li style="background-color: ${color}">${item}</li>`);

    // Clear input
    $("#taskInput").val("");
});




// 🎯 Task 2: Quiz App with Reveal Button
// Create a mini quiz component:
// •	Display a question and 4 multiple choice buttons
// •	When a user clicks on a choice:
// o	Highlight their selection
// o	Disable all buttons
// •	When "Reveal Answer" is clicked:
// o	Show correct answer in green
// o	Show incorrect answers in red
// Use .prop("disabled", true) and .addClass() to manage state.




const quizQuestions = [
    // Question 0
    {
    question: "What is the capital of France?",
    answers: {
        a: "Madrid",
        b: "Berlin",
        c: "Paris",
        d: "Rome"
    },
    answerKey: "c"
    },

    // Question 1
    {
    question: "Which planet is known as the Red Planet?",
    answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Venus",
        d: "Saturn"
    },
    answerKey: "a"
    },

    // Question 2
    {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: {
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Mark Twain",
        d: "Jane Austen"
    },
    answerKey: "b"
    },

    // Question 3
    {
    question: "What is the smallest prime number?",
    answers: {
        a: "0",
        b: "1",
        c: "2",
        d: "3"
    },
    answerKey: "c"
    },

    // Question 4
    {
    question: "Which language is used to style web pages?",
    answers: {
        a: "HTML",
        b: "Python",
        c: "CSS",
        d: "Java"
    },
    answerKey: "c"
    }
];


$("h4").last().on("click", function(e){
    const questionNum = Math.floor(Math.random() * quizQuestions.length);
    $("#quizContainer").css("display", "block");
    // Clear previous question and answers
    $("#quizQuestion").empty();
    $("#quizAnswers").empty();
    resetButtons();



    $("#quizQuestion").text(quizQuestions[questionNum].question);
    
    
    const answers =quizQuestions[questionNum].answers;

    const formatted = `
        <p>a. ${answers.a}</p>
        <p>b. ${answers.b}</p>
        <p>c. ${answers.c}</p>
        <p>d. ${answers.d}</p>
    `;

    $("#quizAnswers").append(formatted);

        $("#mcq button").on("click", function () {
            const selected = $(this).val();

            $("#mcq button").each(function (){

                const btnVal = $(this).val();

                if (btnVal === selected){
                    $(this).css("backgroundColor", "yellow");
                } else{
                    $(this).prop("disabled", true) ;
                }

                    


            });

            

            $("#answerKey").off("click").on("click", function () {
                const answerKey = quizQuestions[questionNum].answerKey;
            
                $("#quizAnswers p").each(function () {
                    const text = $(this).text().trim(); // e.g. "a. Mars"
                    const key = text.charAt(0);         // gets "a", "b", "c", or "d"
            
                    if (key === answerKey) {
                        $(this).css("background-color", "lightgreen");
                    } else {
                        $(this).css("background-color", "lightcoral");
                    }
                });
            });
            
        });

});


function resetButtons() {
    $("#mcq button").each(function () {
        // Reset styling
        $(this).css({
            "background-color": "",
            "border": "",
            "color": ""
        });

        // Optionally re-enable them
        $(this).prop("disabled", false);
    });
}