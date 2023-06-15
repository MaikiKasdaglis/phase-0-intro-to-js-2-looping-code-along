

function writeCards(name, eventName) {
    let cardArray = []
    for(let i = 0; i < name.length; i++) {
        cardArray.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    } 
    return cardArray
}

// function countDown(number) {
//     for(let i = number.length; i < number.length; i++) { 
//         console.log(number[i])
//     }
   
// }

function countDown(number) {
    for(let i = number; i >= 0; i--) { 
        console.log(i);
    }
}

// console.log(countDown(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']))
