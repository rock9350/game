let main = document.getElementById("main");
let bomb ;
let forReset = [];
function makeDiv(){
    
  
  for (let i = 1; i <= 81; i++) {
    let button = document.createElement("button");
    button.style.width="25px";
    button.style.height="25px";
    button.setAttribute("value",`${i}`);
    button.setAttribute("id",`${i}`);
    main.appendChild(button);
    button.addEventListener("click",startPlay)
  }
   bomb = makeRoundNo();
 
}

let score = 0 ;

function startPlay(event){
  let but = document.querySelectorAll("button");
  forReset.push(event.target.value);
  
   document.getElementById("result").innerText="GAME START";
  let change =   checkNo(event.target.value);
  console.log(change);
  if(change == 0){
     let loss = 0 ;
  for (let i = 0; i < bomb.length; i++) {
    if(bomb[i]==event.target.value){
      document.getElementById(`${event.target.value}`).style.backgroundColor="red";
      loss++;
      document.getElementById("result").innerText="game over";
      for (let i = 0; i < but.length; i++) {
        but[i].removeEventListener("click",startPlay);
        
      }
    }
  }
  if(loss == 0){
     document.getElementById(`${event.target.value}`).style.backgroundColor="green";
     score++;
  }
  document.getElementById("score").innerText=score;
  }

}


makeDiv();
let checkNo_arr = [-1];
function checkNo(n){
  
  let c = 0;
  for (let i = 0; i < checkNo_arr.length; i++) {
    if(n==checkNo_arr[i]){
        c++;
        return 1;
    }
  }
  if(c==0){
    checkNo_arr.push(n);
    return 0;
  }
  
}







 function makeRoundNo(){
  let arr = [];
  for (let i = 1; i <= 10; i++){
    let no = Math.ceil(Math.random()*81);
     if(!arr.includes(no)){
      arr.push(no);
     }
      
     if(arr.length < 10){
       i--
     }else{
      return arr;
     }
  }
 
}

function reset(){
  score=0;
  document.getElementById("result").innerText="";
  document.getElementById("score").innerText="0";
   let but = document.querySelectorAll("button");
   for (let i = 0; i < but.length; i++) {
        but[i].addEventListener("click",startPlay);
        if(forReset.includes(but[i].value)){
        
          but[i].style.backgroundColor=null;
        }
      }
      
}