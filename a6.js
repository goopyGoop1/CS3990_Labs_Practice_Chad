function greetUser() {
    // Ask user for their language abbreviation
    let language = prompt("Enter the abbreviation of the language you speak (Eng, Fr, De, Spa):");

    // Convert input to lowercase and remove extra spaces
    language = language ? language.trim().toLowerCase() : "";

    // Define the greeting message
    let greeting;

    switch (language) {
        case "eng":
            greeting = "Hello";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case "de":
            greeting = "Hallo";
            break;
        case "spa":
            greeting = "Hola";
            break;
        default:
            greeting = "Sorry, but I do not speak your language.";
    }

    // Show the greeting in an alert box
    alert(greeting);
}

function checkAge() {
        // Ask for the user's year of birth
        let birthYear = prompt("Enter your year of birth:");

        // Convert input to a number
        let currentYear = new Date().getFullYear();
        let age = currentYear - birthYear;

        // Validate input
        if (isNaN(age) || birthYear == null || birthYear.trim() === "" || age <= 0) {
            alert("Invalid input. Please enter a valid year.");
            return;
        }

        // If age is under 18, show restriction message
        if (age < 18) {
            alert("Content is not available due to age restrictions.");
            return;
        }

        // If age is 18 to 55, ask for an animal name
        if (age >= 18 && age <= 55) {
            let animal = prompt("Choose an animal (Cat, Dog, Frog, Mouse):").trim().toLowerCase();
            let imageSrc;

            // Assign an image based on the animal choice
            switch (animal) {
                case "cat":
                    imageSrc = "https://placekitten.com/300/200";
                    break;
                case "dog":
                    imageSrc = "https://placedog.net/300/200";
                    break;
                case "frog":
                    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/3/3b/European_Green_Frog_cropped.jpg";
                    break;
                case "mouse":
                    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Mouse-white-background.jpg";
                    break;
                default:
                    alert("Invalid choice. No image available.");
                    return;
            }

            // Display the chosen image
            let imgElement = document.createElement("img");
            imgElement.src = imageSrc;
            imgElement.alt = "Selected Animal";
            imgElement.style.width = "300px";
            imgElement.style.height = "200px";
            document.body.appendChild(imgElement);
            return;
        }

        // If age is over 55, show a default image
        let paragraph = document.createElement("p");
        paragraph.innerText = `Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming.`;
        paragraph.style.fontSize = "18px";
        paragraph.style.fontWeight = "bold";
        paragraph.style.marginTop = "20px";
        document.body.appendChild(paragraph);
    }
    (function () {
// Function to generate a 6-digit random password for Admin
const generateAdminPassword = () => {
    let password = "";
    for (let i = 0; i < 6; i++) {
        password += Math.floor(Math.random() * 10); // Random digit from 0-9
    }
    return password;
};

// Function to validate login and password
const authenticateUser = () => {
    let login = prompt("Enter your login (Admin, Designer, Tester):");

    if (!login) {
        alert("No input detected. Exiting...");
        return null;
    }

    login = login.trim().toLowerCase(); // Normalize input

    let correctPassword;
    let maxAttempts;
    let userRole;

    switch (login) {
        case "admin":
            userRole = "Admin";
            correctPassword = generateAdminPassword(); // Generate random password
            maxAttempts = 2;
            alert(`Your generated admin password is: ${correctPassword}`);
            break;
        case "designer":
            userRole = "Designer";
            correctPassword = "111";
            maxAttempts = 3;
            break;
        case "tester":
            userRole = "Tester";
            correctPassword = "222";
            maxAttempts = 3;
            break;
        default:
            alert("No such user exists.");
            return null;
    }

    // Password validation loop
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        let enteredPassword = prompt(`Enter your password (Attempt ${attempt} of ${maxAttempts}):`);
        if (enteredPassword === correctPassword) {
            return userRole; // Successful login
        }
        alert("Incorrect password. Try again.");
    }

    alert("Access denied due to incorrect password attempts.");
    return null;
};

// Function to process Admin input and calculations
const processAdmin = () => {
    let age = parseInt(prompt("Enter your age:"));
    let admissionYear = parseInt(prompt("Enter your year of admission to NWP:"));

    if (isNaN(age) || isNaN(admissionYear)) {
        alert("Invalid input. Please enter numerical values.");
        return;
    }

    let futureAge = age + (2028 - new Date().getFullYear());
    let graduationYear = admissionYear + 4;

    alert(`You will be ${futureAge} years old in 2028.`);
    alert(`You will receive your Bachelor's degree in CS in the year ${graduationYear}.`);
};

// Function to process Designer and Tester discounts
const processDesignerTester = (role) => {
    let age = parseInt(prompt("Enter your age:"));
    let portfolios = parseInt(prompt("Enter the number of available portfolios:"));

    if (isNaN(age) || isNaN(portfolios)) {
        alert("Invalid input. Please enter numerical values.");
        return;
    }

    let discountMessage = `No discount available.`;
    if (age >= 14 && age <= 18 && portfolios >= 5 && portfolios <= 10) {
        discountMessage = "You are eligible for a 10% discount!";
    } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
        discountMessage = "You are eligible for a 7% discount!";
    }

    let course = role === "Designer" ? "Adobe XD" : "QA Pro";
    alert(`As a ${role}, ${discountMessage} on the ${course} course.`);
};

// Main execution logic
const userRole = authenticateUser();

if (userRole === "Admin") {
    processAdmin();
} else if (userRole === "Designer" || userRole === "Tester") {
    processDesignerTester(userRole);
}
})();

