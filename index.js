
function writeCards(names,event) {
const messages = [];
for (let i=0; i<names.length; i++){
messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
console.log(messages)
return messages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(integer) {
let i=integer
    while (i>=0){
console.log(i)
i--;
    }

}
countDown(15)