console.log("IS it a leap year? ");
let year=2028;
console.log("lets chose "+year+". Is it a leap year?");

if(year%4==0 && year%100!==0 || year%400==0)
{
    console.log(" "+ year +" Is a leap year");
}
else{
    console.log(" "+year +" Is not a leap year.");
}

