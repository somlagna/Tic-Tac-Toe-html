console.log("Welcome to Tic Tac Toe")
let turn="X"
let gameOver=false

const changeTurn =()=>{
    return turn==="X"?"0": "X"
}

const checkWin=()=>{
    let boxText=document.getElementsByClassName('boxtext');
   let wins=[
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [2,5,8],
       [1,4,7],
       [0,3,6],
       [0,4,8],
       [2,4,6]
   ]
   wins.forEach(e=>{
       if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[2]].innerText===boxText[e[1]].innerText)&&(boxText[e[0]].innerText!=='')){
           document.querySelector('.info').innerText=boxText[e[0]].innerText +" WON"
           gameOver=true
           document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='200px'
       }
   })
}

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxText =element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            }
            
        }

        
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    gameOver=false
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='0px'
    
})