
let url  = "https://Anything.com/lesson/.@_qqeqeqweq/!@@#$%^^&&//"


let regexpattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi

let match = regexpattern.test(url)
console.log(match);