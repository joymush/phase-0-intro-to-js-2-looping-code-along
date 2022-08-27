const { getModulesPluginNames } = require("@babel/preset-env")

let cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, suprise){
    let newArr = []
    names.forEach(element => {
        newArr.push(`Thank you, ${element}, for the wonderful ${suprise} gift!`)
    });
    return newArr
}
 function countDown(number){
    for(let i = 0; i <= number; i++){
        console.log(i)
    }
 }