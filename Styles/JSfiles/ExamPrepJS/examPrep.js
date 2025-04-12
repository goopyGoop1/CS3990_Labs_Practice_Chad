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



const products = [
    { name: "Laptop", price: "$999" },
    { name: "Phone", price: "$599" },
    { name: "Tablet", price: "$399" }
];


products.forEach(product => {
    $('h1').first().after("<div>"+ product.name + " - " + product.price + "</div>");

});



