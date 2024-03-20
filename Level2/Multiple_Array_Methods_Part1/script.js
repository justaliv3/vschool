var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function filterSortAndFormat(peopleArray) {
    const filteredSortedPeople = peopleArray.filter(person => person.age > 18)
                                            .sort((a, b) => a.lastName.localeCompare(b.lastName));

    return filteredSortedPeople.map(person => `<li>${person.firstName} ${person.lastName} - Age: ${person.age}</li>`).join('');
}

const htmlList = filterSortAndFormat(peopleArray);
console.log(htmlList);