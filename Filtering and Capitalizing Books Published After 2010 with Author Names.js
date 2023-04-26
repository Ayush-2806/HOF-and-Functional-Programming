let arr = [
{Book : "Another Mother's Life" , Author : "Rowan Coleman" ,Year : 2008},
{Book : "Exes and Ohs" , Author : "Beth Kendrick" ,Year : 2005},
{Book : "Anything For Love" , Author : "Sarah Webb" ,Year : 2009},
{Book : "True Biz" , Author : "Sara Nović" ,Year : 2022},
{Book : "The Collective" , Author : "Alison Gaylin" ,Year : 2021},
{Book : "The Invisible Life of Addie LaRue" , Author : "V.E. Schwab" ,Year : 2020},]


let ans = arr.filter( (num) =>  {
    if(num.Year > 2010){
       num.Author =    num.Author.toUpperCase();
        return num
    }
})
console.log(ans);