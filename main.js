"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    console.log("event fired");
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(selectedRoast)
    coffees.forEach(function(coffee) {
        // console.log(coffee.roast)
        if (coffee.roast === selectedRoast) {
            console.log(selectedRoast)
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees)
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//below : wrote a function to render each type of coffee by type using a string and a forEach loop
function coffeePageLoad(roast){

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === roast) {
            filteredCoffees.push(coffee);
        }
    });

    return renderCoffees(filteredCoffees);
}


//break my code
// function userCoffee(roastSelection) {
//     if( roastSelection === roast);
//     return filteredCoffes.push(coffees)
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');

//javascript to grab those three divs [l, m , d] from html
let lightDiv = document.querySelector("#light");
let mediumDiv = document.querySelector("#medium");
let darkDiv = document.querySelector("#dark")
var submitButton = document.getElementById('submit');
var roastSelection = document.querySelector('#roast-selection');
var roastOpt = document.getElementsByClassName("roastBtn");
// let roastSelection.value = document.querySelector()

// tbody.innerHTML = renderCoffees(coffees);
lightDiv.innerHTML = coffeePageLoad("light");
darkDiv.innerHTML = coffeePageLoad("dark");
mediumDiv.innerHTML = coffeePageLoad("medium")
submitButton.addEventListener('click', updateCoffees);
// roastOpt.addEventListener('click', functionName);


// function userCoffee(coffees) {
//     if (roastSelection.valueS)
// }
