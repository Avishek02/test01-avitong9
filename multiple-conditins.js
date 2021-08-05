var gotJob = false;
moneySaved = 250000;
hasCar = false;
//AND operator
console.log("-----AND operator-----");
if (gotJob == true && moneySaved>200000 && hasCar==true)
{
    console.log("Hurrah !! Let's have a tour.");
}
else
{
    console.log("Bad luck! I have No money to have a tour.");
}


//OR Operator
console.log("\n------OR operator------");
if (gotJob == true || moneySaved>200000 || hasCar==true)
{
    console.log("Hurrah !! Let's have a tour.");
}
else
{
    console.log("Bad luck! I have No money to have a tour.");
}


//Complex condition
console.log("\n------Complex condition------")
if ((gotJob == true && hasCar == ture) || moneySaved > 150000) {
    console.log("Hurrah !! Let's go to Darziling");
}
else {
    console.log("Bad luck !! I have not enough money to go on a tour.");
}