let arr = [

{item1 : "Cup", price : 2} ,
{item2 : "Table", price : 15},
{item3 : "Television", price : 50},
{item4 : "Mobile", price : 200},
{item5 : "Laptop", price : 500}, 
{item6 : "Keyboard", price : 10}

]

console.log(arr);

let ans =   arr.map( (num) => {
        
        return num.price = num.price*80;
})



newobj = [

{item1 : "Cup",price : ans[0]} ,
{item1 : "Table",price : ans[1]},
{item1 : "Television",price : ans[2]},
{item1 : "Mobile",price : ans[3]},
{item1 : "Laptop",price : ans[4]}, 
{item1 : "Keyboard",price : ans[5]}

]

console.log(newobj);
