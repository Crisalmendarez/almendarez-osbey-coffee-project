 "use strict"
//
// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     //html += '<div>' + coffee.id + '</div>';
//     html += '<div>' + coffee.name + '</div>';
//     html += '<div>' + coffee.roast + '</div>';
//     html += '</div>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '<div>';
//     for (var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//         html += '</div>'
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     // console.log("event fired");
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     // console.log(selectedRoast)
//     coffees.forEach(function (coffee) {
//         console.log(coffee.roast)
//         if (coffee.roast === selectedRoast) {
//             // console.log(selectedRoast)
//             filteredCoffees.push(coffee);
//         }
//     });
//     // console.log(filteredCoffees)
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
//
// //below : wrote a function to render each type of coffee by type using a string and a forEach loop
// // function coffeePageLoad(roast){
// //
// //     var filteredCoffees = [];
// //     coffees.forEach(function(coffee) {
// //         if (coffee.roast === roast) {
// //             filteredCoffees.push(coffee);
// //         }
// //     });
// //
// //     return renderCoffees(filteredCoffees);
// // }
//
//
// //break my code
// // function userCoffee(roastSelection) {
// //     if( roastSelection === roast);
// //     return filteredCoffees.push(coffees)
// // }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// var tbody = document.querySelector('#coffees');
//
// //javascript to grab those three divs [l, m , d] from html
// // let lightDiv = document.querySelector("#light");
// // let mediumDiv = document.querySelector("#medium");
// // let darkDiv = document.querySelector("#dark")
// var submitButton = document.getElementById('submit');
// var roastSelection = document.querySelector('#roast-selection');
// // var roastOpt = document.getElementsByClassName("roastBtn");
// // let roastSelection.value = document.querySelector()
//
// tbody.innerHTML = renderCoffees(coffees);
// // lightDiv.innerHTML = coffeePageLoad("light");
// // darkDiv.innerHTML = coffeePageLoad("dark");
// // mediumDiv.innerHTML = coffeePageLoad("medium")
// submitButton.addEventListener('click', updateCoffees);
// // roastOpt.addEventListener('click', functionName);
//
//
// // function userCoffee(coffees) {
// //     if (roastSelection.valueS)
// // }
let filterProd = [];
let filterProd2 = [];
let filterProd3 = [];
let filterProd4 = [];

var coffees = [
    {id: 1, name: 'light city', roast: 'light'},
    {id: 2, name: 'half city', roast: 'light'},
    {id: 3, name: 'cinnamon', roast: 'light'},
    {id: 4, name: 'city', roast: 'medium'},
    {id: 5, name: 'american', roast: 'medium'},
    {id: 6, name: 'breakfast', roast: 'medium'},
    {id: 7, name: 'high', roast: 'dark'},
    {id: 8, name: 'continental', roast: 'dark'},
    {id: 9, name: 'new orleans', roast: 'dark'},
    {id: 10, name: 'european', roast: 'dark'},
    {id: 11, name: 'espresso', roast: 'dark'},
    {id: 12, name: 'viennese', roast: 'dark'},
    {id: 13, name: 'italian', roast: 'dark'},
    {id: 14, name: 'french', roast: 'dark'},
];

showProducts(coffees);


function showProducts(input) {

    document.getElementById("card").innerText = "";


    for(var i = 0; i < input.length; i++) {
        document.getElementById("card").innerHTML +=
            `
        <div class="col-lg-6 d-flex justify-content-center">
        <div class="card" style="background-color: #DFB78C; font-family: 'Henny Penny', cursive; color: #49281A; border-color: #DFB78C;">
        
                <h4 class="text-center text-capitalize">${input[i].name}</h4>
                
              
                <p class="text-center fs-5" style="font-family: 'IM Fell English', serif; color: #AB6832">${input[i].roast}</p>
           
        </div>
        </div> 
        `

    }
}


//SEARCHBAR 1

document.getElementById("myInput").addEventListener("keyup", function() {
    let text = document.getElementById("myInput").value.toLowerCase();



    filterProd = coffees.filter(function(a) {
        if(a.name.includes(text)) {
            return a.name;
        } else if(a.roast.includes(text)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd);
            document.getElementById("para").style.display = 'none'
        }
    }
});

//SEARCHBAR 2

document.getElementById("myInput2").addEventListener("keyup", function() {
    let text2 = document.getElementById("myInput2").value.toLowerCase();

    filterProd2 = coffees.filter(function(a) {
        if(a.name.includes(text2)) {
            return a.name;
        } else if(a.roast.includes(text2)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd2 == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd2);
            document.getElementById("para").style.display = 'none'
        }
    }
});

//DROPDOWN 1

document.getElementById("roast-selection").addEventListener("click", function() {
    let click1 = document.getElementById("roast-selection").value;

    filterProd3 = coffees.filter(function(a) {
        if(a.name.includes(click1)) {
            return a.name;
        } else if(a.roast.includes(click1)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd3 == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd3);
            document.getElementById("para").style.display = 'none'
        }
    }
});

//DROPDOWN 2

document.getElementById("roast-add").addEventListener("click", function() {
    let click2 = document.getElementById("roast-add").value;

    filterProd4 = coffees.filter(function(a) {
        if(a.name.includes(click2)) {
            return a.name;
        } else if(a.roast.includes(click2)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd4 == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd4);
            document.getElementById("para").style.display = 'none'
        }
    }})

