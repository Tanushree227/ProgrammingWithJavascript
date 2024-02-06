//Meta Front-End Developer

console.log("Hakuna Matata");

//Variables in JavaScript
let name = "Tanushree";
console.log("Hakuna Matata",name);

//datatypes
/*
1. int
2. float
3. double
4. char
5. string
6. boolean
7. null
*/

var num = 2207;
var floatD = 22.07;
var doubleD = 22.0799;
var charD = 'T';
var strD = "Tanushree";
var boolD = true;
var nullD = null;

//Conditional statements

var result = 50

//if-else statement
if(result > 40)
{
    console.log("Congratulations you passed the test!!!");
}
else
{
    console.log("Unfortunately you didn't pass");
}

//if-else-if statements
var place = "first";

if(place === "first")
{
    console.log("Gold");
}
else if(place === "second")
{
    console.log("Silver");
}
else if(place === "third")
{
    console.log("Bronze");
}
else
{
    console.log("Oops.. no Medal");
}

//for loop
for(var i = 0; i < 10; i++)
{
    console.log(i, "Go and get a job");
    if(i === 5)
    {
        continue;
    }
}