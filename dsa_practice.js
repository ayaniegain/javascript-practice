// pallindrome

function isPallindrome(val) {
    return val<0? false: (val==+val.toString().split('').reverse().join("")) 
}
console.log(isPallindrome(120))