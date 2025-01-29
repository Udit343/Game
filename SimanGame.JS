let gameseq=[];
let userseq=[];

let btns=["blue","red","fuchsia","lawngreen"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
    }
      
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level  ${ level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randBtn=document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randBtn);
}
function checkAns(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,250);
        }

    }else{
        h2.innerText=`Game over , your score  is  ${level} Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "black";

        },50);
        
        reset();
    }

}
function btnpress(){
    console.log(this);
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(bt of allbtn){
    bt.addEventListener("click",btnpress);
}

function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level=0;
}