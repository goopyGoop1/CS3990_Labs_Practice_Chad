let easterShop = [
    //Item 1
    {
    group: "Easter Eggs", 
    name: "Chocolate Eggs",
    price: 5.99,
    image: "Images/f1.jpg",
    description: "Delicious chocolate eggs.",
    },
    //Item 2
    {
    group: "Easter Bunny",
    name: "Chocolate Bunny", 
    price: 7.99,
    image: "Images/f2.jpg",
    description: "Chocolate bunny with a surprise inside."   
    },
    //Item 3
    {
    group: "Easter Candy",
    name: "Chewy Eggs",
    price: 3.99,
    image: "Images/f3.jpg",
    description: "Colorful eggs in assorted flavors."   
    },
    //Item 4
    {
    group: "Easter Basket",
    name: "Easter Basket",
    price: 15.99,   
    image: "Images/f4.jpg",
    description: "A basket filled with Easter goodies."   
    }
];







class groupElem{

    constructor(groupName){
        this.groupName = groupName;

        $("#groups").append("<li id=+>" + this.groupName + "</li>");
    }

    
    

}

$.each(easterShop, function (index, item) {
    
            const group = new groupElem(item.group);
    
    
});


class Item{
    constructor(name, price, image, description){
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        
        this.render();
        ;
    }

    render(){
        const itemDiv = `
        <div class="item">
            <h3>${this.name}</h3>
            <img src="${this.image}" alt="${this.name}">
            <p>Price: $${this.price}</p>
        </div>
        
        `
        $("#itemGallery").append(itemDiv);
    }

}

$("#groups").after("<div id='flyer></div>"); // remove this if you want to keep adding

$.each(easterShop, function (index, item) {
    const itemObj = new Item(item.name, item.price, item.image);
})


$("li:first-child").hover(function () { 
    $(".item:first-child").css("boxShadow", "0 0 10px red");
    $(this).css("backgroundColor", "yellow");
}
, function () {
    $(".item:first-child").css("boxShadow", "none");
    $(this).css("backgroundColor", "lightpink");
});


$("li:nth-child(2)").hover(function () {
    $(".item:nth-child(2)").css("boxShadow", "0 0 10px red");
    $(this).css("backgroundColor", "yellow");
}   , function () {
    $(".item:nth-child(2)").css("boxShadow", "none");
    $(this).css("backgroundColor", "lightpink");
});

$("li:nth-child(3)").hover(function () {
    $(".item:nth-child(3)").css("boxShadow", "0 0 10px red");
    $(this).css("backgroundColor", "yellow");
}, function () {    
    $(".item:nth-child(3)").css("boxShadow", "none");
    $(this).css("backgroundColor", "lightpink");
});      

$("li:nth-child(4)").hover(function () {
    $(".item:nth-child(4)").css("boxShadow", "0 0 10px red");
    $(this).css("backgroundColor", "yellow");
}, function () {
    $(".item:nth-child(4)").css("boxShadow", "none");
    $(this).css("backgroundColor", "lightpink");
});

$(".item:first-child").click(function () { 
    const data = easterShop[0].description;
    $("#itemDescr").empty(); // remove this if you want to keep adding
    $("#itemDescr").append("<p>" + data + "</p>");


    
});

$(".item:nth-child(2)").click(function () {
    const data = easterShop[1].description;
    $("#itemDescr").empty();
    $("#itemDescr").append("<p>" + data + "</p>");


        

    
});
$(".item:nth-child(3)").click(function () {
    const data = easterShop[2].description;
    $("#itemDescr").empty();
    $("#itemDescr").append("<p>" + data + "</p>");
  

    
});

$(".item:nth-child(4)").click(function () { 
    const data = easterShop[3].description;
    $("#itemDescr").empty();
    $("#itemDescr").append("<p>" + data + "</p>");


    
});
