/* 
Game Name: Rock Paper Scissor
- offer user to play this game
- if user accepts, then we will start the game
- once the game starts, we will ask an input(rock, paper or scissor) from the user
- take that input and we will store it
- our automated code/computer will choose one option out of this rock, paper and scissor
- we will compare both the response, and will determine the winner
- we will notify the user

Rules:
1. rock beats scissor
2. scissor beats paper
3. paper beats rock
*/
var startgame=confirm("Lets Play rock,paper,Scissor");

if(startgame)
{
    var input=prompt("Choose rock,paper,scissor");//User input
    var userinput=input.toLowerCase();//Convert to lower case 

    
    if(userinput=="rock"|| userinput=="paper"|| userinput=="scissor")
    //if condition is true
    {
        //Computer input 
        var computerChoice=Math.random(); //return a value between 0-1
        if(computerChoice<0.33){
            computerChoice="rock";
        }
        else if(computerChoice < 0.66)
        {
            computerChoice="paper";
        }
        else{
            computerChoice="scissor";
        }
        //Compare the response

        var result;
        if(userinput==computerChoice)
        {
            result='Match Tie';
        }
        else if(userinput=='rock' && computerChoice=='scissor')
        {
            result="User wins";
        }
        else if(userinput=='Scissor' && computerChoice=='Paper')
        {
            result="User wins";
        }
        else if(userinput=='Paper' && computerChoice=='rock')
        {
            result="User wins"
        }
        else{
            result="Computer wins"
        }
        //display the result
        alert(`User played ${userinput} \n Computer choice ${computerChoice} \n ${result}`)
    }
    //If the condition is false
    else {
        alert("The input is not proper")
    }
}
//If the person dont want to play
else
{
    alert("Maybe,Next time")
}