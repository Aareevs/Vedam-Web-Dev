let marks=prompt("Enter your marks (0-100):");
marks=Number(marks); //Type casting

if(!(marks>=0 && marks<=100))
{
    console.log("proper input guys");
}

else if(marks>=80)
{
    console.log("A+");
}
else if(marks>=70)
{
    console.log("A");
}
else if(marks>=60)
{
    console.log("B");
}
else if(marks>=50)
{
    console.log("C");
}
else
{
    console.log("F");
}

