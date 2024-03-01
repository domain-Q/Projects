let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const showWinner = (userwin,userChoice,compchoice)=>{
    if ( userwin){
        userscore++;
        userscorepara.innerText=userscore;
      
        msg.innerText=`you win! your ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor ="green"
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        
        msg.innerText=`you loose!  ${compchoice} beats your ${userChoice}`
        msg.style.backgroundColor ="red"
    }
}

const playGame= (userChoice)=>{
const compchoice =generateCompChoice()
if ( userChoice === compchoice){
    drawGame()
}
else{
    let userwin =true;
    if( userChoice=="rock"){
        //scissors, paper
       userwin= compchoice==="paper"? false:true;
    }
    else if( userChoice==="paper"){
        //scissors, rock
       userwin= compchoice==="scissor"? false:true;
    }
    else{
        //rock paper
        userwin = compchoice==="rock" ? false :true;

    }
    showWinner(userwin , userChoice, compchoice);
}
}



const drawGame = ()=>{
    msg.innerText= `Draw game! `
    msg.style.backgroundColor ="#081b31"
}

const generateCompChoice = ()=>{
//rock paper scissor
let options = ["rock","paper","scissor"];
const random= Math.floor(Math.random()*3)
return options[random];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})