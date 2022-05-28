let userScore=0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span =document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const message_p =document.querySelector(".message>p");
const action_p = document.getElementById("action");
const moves_div = document.querySelector(".moves");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function compChoices(){
    const choices=["r","p","s"];
    return(choices[(Math.floor(Math.random()*choices.length))]);
    // random number between 0 to 3
    //Math.floor to get int value
}
//compChoices();
function convert(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
}
function showMessage(user,comp,winner){
   if(user==="r") return( convert(user)+" beats "+convert(comp)+". "+winner+" win");
   if(user==="p") return( convert(user)+" covers "+convert(comp)+". "+winner+" win");
   if(user==="s") return( convert(user)+" cuts "+convert(comp)+". "+winner+" win");
}
function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")},1500);
    const mes=showMessage(userChoice,compChoice,"You")+"🔥";
    message_p.innerHTML=mes;
}
function lose(userChoice,compChoice){
    compScore++;
    compScore_span.innerHTML=compScore;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")},1500);
    const mess =showMessage(compChoice,userChoice,"Computer")+"s"+" 😞" ;
    message_p.innerHTML = mess;
}
function draw(userChoice,compChoice){
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("grey-glow")},1500);
   message_p.innerHTML = convert(userChoice)+" draws with "+convert(compChoice);
}  
function getEmoji(choice){
    if(choice==="r") return "✊ ";
    if(choice==="p") return "✋ ";
    if(choice=="s") return "✌ ";
    
}

function showAction(userChoice,compChoice){
    userEmoji = getEmoji(userChoice);
    compEmoji = getEmoji(compChoice);
    action_p.innerHTML="You:"+convert(userChoice)+userEmoji +" "+" Computer: "+convert(compChoice)+compEmoji+"\n Wait!!";
    setTimeout(function(){action_p.innerHTML="Make Ur Move"},3000);
    clearTimeout();
}
function game(userChoice){
    const compChoice=compChoices();
    showAction(userChoice,compChoice);
    console.log(compChoice);
    console.log("🔥 "+userChoice );
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click',function(){
        game("r");
        
        //console.log("rock");
    })
    paper_div.addEventListener('click',function(){
        game("p");
        //console.log("paper");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
        //console.log("scissors");
    })
    
    }
main();