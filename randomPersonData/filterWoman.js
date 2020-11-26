const isWoman = person => person.gender === "female";

const atLeast30 = person => person.age >= 30;

const isCapricorn = person => {
    let day = parseInt(person.birthday.dmy.split("/")[0]);
    let month = parseInt(person.birthday.dmy.split("/")[1]);
    if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) {
        return true;
    }
}

const sortWoman = (person1, person2) => {
    let nameA = person1.name.toUpperCase();
    let nameB = person2.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

const filteredWoman = person => person
    .filter(isWoman)
    .filter(atLeast30)
    .filter(isCapricorn)
    .sort(sortWoman)
    .map(person =>
        "<li>" + person.name + " " + person.surname + "<br><img src=" + person.photo + "></li>"
    )
    .forEach(person => {
        const personList = document.getElementById("list");
        personList.innerHTML += person
    })

const putWomenInList = () => {
    filteredWoman(randomPersonData)

};

document.getElementById("sort-women").addEventListener("click", putWomenInList);
