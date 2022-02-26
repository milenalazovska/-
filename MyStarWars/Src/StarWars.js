let url = "";
let pageNumber = 1;

$(document).ready(function () {
    let peopleBtn = document.getElementById("peopleBtn");
    let result = document.getElementById("result");
    peopleBtn.addEventListener("click", function () {
        url = "https://swapi.dev/api/people/?page="
        showLoader(document);
        $.ajax({
            url: "https://swapi.dev/api/people/?page=1",
            success: function (response) {
                console.log("Success!");
                printPeople(response.results, result)
                hideLoader(document)
            },
            error: function (error) {
                console.log(error);
            }
        })  
    })
})

$(document).ready(function () {
    let shipsBtn = document.getElementById("shipsBtn");
    let result = document.getElementById("result");
    shipsBtn.addEventListener("click", function () {
        url = "https://swapi.dev/api/starships/?page=";
        showLoader(document);
        $.ajax({
            url: "https://swapi.dev/api/starships/?page=1",
            success: function (response) {
                console.log("Success!");
                printShips(response.results, result);
                hideLoader(document)
            },
            error: function (error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function () {
    let nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", function () {
        pageNumber = pageNumber + 1
        changePage(document)
        showLoader(document);
        $.ajax({
            url: url + pageNumber,
            success: function (response) {
                console.log("Success!");
                printPeople(response.results, result)
                hideLoader(document)
            },
            error: function (error) {
                console.log(error);

            }
        })
    })
})

$(document).ready(function () {
    let prevBtn = document.getElementById("prevBtn");
    prevBtn.addEventListener("click", function () {
        pageNumber = pageNumber - 1
        changePage(document)
        showLoader(document);
        $.ajax({
            url: url + pageNumber,
            success: function (response) {
                console.log("Success!");
                printPeople(response.results, result)
                hideLoader(document)
            },
            error: function (error) {
                console.log(error);

            }
        })
    })
})

function printPeople(people, result) {
    let table = result.getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    table.innerHTML = `<th>Name</th> <th>Height</th> <th>Mass</th> <th>Gender</th> <th>Birth year</th> <th> Appearances </th>`
    for (let i = 0; i < people.length; i++) {
        console.log(people[i])
        table.innerHTML += `
        <tr> 
           
        <td>${people[i].name}</td>
    
        <td>${people[i].height}</td>

        <td>${people[i].mass}</td>

        <td>${people[i].gender}</td>

        <td>${people[i].birth_year}</td>

        <td>${people[i].films.length}</td>

        </tr>
        `
    }
}

function printShips(ships, result) {
    let table = result.getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    table.innerHTML = `<th>Name</th> <th>Model</th> <th>Manufacturer</th> <th>Cost</th> <th>People Capacity</th> <th>Class</th>`
    for (let i = 0; i < ships.length; i++) {
        console.log(ships[i])
        table.innerHTML += `
     <tr>
    <td>${ships[i].name}</td>

    <td>${ships[i].model}</td>

    <td>${ships[i].manufacturer}</td>

    <td>${ships[i].cost_in_credits}</td>

    <td>${ships[i].crew} & ${ships[i].passengers}</td>

    <td>${ships[i].starship_class}</td>
    </tr>
    `
    }
}


function showLoader(document) {
    console.log("VLAGA")
    document.getElementById("loader").style.display = "block";
}

function hideLoader(document) {
    document.getElementById("loader").style.display = "none";
}

function changePage(document){
    document.getElementById("pageNumber").innerText = pageNumber
}