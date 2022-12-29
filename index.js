let plscore = 0;
let cmpscore =0;


const stat = document.querySelector("#status");
const csco = document.querySelector("#csco");
const psco = document.querySelector("#psco");
const roundsts= document.querySelector("#roundSts");
const GmeSts= document.querySelector("#gameSts");
const reload= document.querySelector("#reload");



const Rock = document.getElementById("rock");
Rock.onclick = roock;
const Paper = document.getElementById("paper");
Paper.onclick = paaper;
const Scissor = document.getElementById("sci");
Scissor.onclick = Sciisor;

function roock(){
    if(( cmpscore < 5)&&(plscore < 5))
    {
     score(assign(compgen(),returnName(1))) 
     card();
    }
    else
    {
        GmeSts.textContent = "Game Over";
        reload.textContent = " Reload Page To Play Again"
    }
}
function paaper(){
  if(( cmpscore < 5)&&(plscore < 5)){
    score(assign(compgen(),returnName(2))) ;
    card();
  }
  else
  {
    GmeSts.textContent = "Game Over";
    reload.textContent = " Reload Page To Play Again"
}
    
}
function Sciisor(){
    if(( cmpscore < 5)&&(plscore < 5)){
        score(assign(compgen(),returnName(3)));
        card();
    }else
    {
        GmeSts.textContent = "Game Over";
        reload.textContent = " Reload Page To Play Again"
    }
   
}
function returnName( PlayerSelection)
{
    let playsel = PlayerSelection
    return playsel;

}
function compgen()
{
     sel = Math.floor( ( Math.random()*3)+1);
    return sel;
}
function assign( sell,playsell)
{
     sel = sell;
     playsel = playsell;

   if(sel == playsel)
   {
    roundsts.textContent ="Its a tie";
     return 2;
   }
   else if(sel == 1 && playsel ==2 )
   {
    roundsts.textContent ="You Win The Round";
    return 1;
   }
   else if(sel == 1 && playsel == 3)
   {
    roundsts.textContent =" You Lose The Round";
    return 0;
   }
   else if(sel ==2 && playsel == 1)
    {
        roundsts.textContent = "You Lose The Round";
        return 0;
    }
    else if(sel ==2 && playsel == 3)
       {
        roundsts.textContent = "You Win The Round";
        return 1;
       }
    else if(sel ==3 && playsel == 1)
     {
        roundsts.textContent = "You Win The Round";
        return 1;
        }
    else if(sel ==3 && playsel == 2)
     {
       roundsts.textContent = "You Lose The Round";
        return 0;
     }
    else
      return 0;
  
   
   
}
function score(skr)
{
    x = skr;
    if( x ==0)
    cmpscore = cmpscore + 1;
    else if( x ==1)
    plscore = plscore + 1 ;
    else{
        cmpscore = cmpscore + 1;
        plscore = plscore + 1 ;

    } 
    csco.textContent = cmpscore;
    psco.textContent = plscore;
}
function card()
{
    if( cmpscore ==5)
     stat.textContent = "Computer Wins The Match";
     else if( plscore ==5)
     stat.textContent = "You win The Match";
     else
      stat.textContent = "Continue Play";
}







