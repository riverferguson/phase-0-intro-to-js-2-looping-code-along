function writeCards(array, event) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

    }
    return output 
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown() {
    let count = 10
    while (count >= 0) {
        console.log(count--)
    }
}

