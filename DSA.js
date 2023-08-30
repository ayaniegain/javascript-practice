// pallindrome
let value =121

let valArry=value.toString().split('').reverse().join("")

if (parseInt(valArry)===value) {
    console.log("pall")
}else{
    console.log("not pal")
}

(valArry==value)?(console.log("pallindrome")): (console.log("not pallindrome"))