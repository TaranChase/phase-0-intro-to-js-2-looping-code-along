// Assignmnet 1

function writeCards(names, event) {
    let messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return messages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));

// Assignment 2

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number --;
    }
}

