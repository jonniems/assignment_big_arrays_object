//Opdracht 1 (landenlijst):
const countryList = [...new Set(randomPersonData.map(item => item.region))].sort();

const generateCountry = country => {
    const li = document.createElement("li");
    li.innerHTML = country;
    return li;
};

const displayCountries = () =>
    countryList
        .map(generateCountry)
        .forEach(addToList);

document.getElementById("sort-countries").addEventListener("click", displayCountries);

//Add to list
const addToList = li =>
    document
        .getElementById("list")
        .appendChild(li);