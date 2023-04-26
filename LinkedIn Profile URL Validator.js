let linkedinurl = "https://www.linkedin.com/in/qwerty-qwerty-1457893659";

let regexpattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

let match = regexpattern.test(linkedinurl)

console.log(match);