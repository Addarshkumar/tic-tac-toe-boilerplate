let winningConditions=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

let boxElement=document.querySelectorAll(".box");
for(elem of boxElement){
    elem.addEventListener("click",handleClick);
}

let click=0;
let isWon=false;
let xAttempts=[];
let oAttempts=[];

function handleClick(event){
      let id=event.target.id;
      let ptag=document.createElement("p")
      ptag.style.color="#FAB201"
      ptag.textContent="X"
      boxElement[id-1].appendChild(ptag)
      
      if(click%2==0){
        ptag.textContent="x"
        click++;
        xAttempts.push(parseInt(id));
        result(xAttempts,"x")

      }
      else {
        ptag.textContent="o"
        click++
        oAttempts.push(parseInt(id))
        result(oAttempts,"o")
      }
      if(click==9 && isWon==false){
        resultBox.style.visibility="visible"
        messageBox.textContent=" it's a Draw"
      }

    }


    let resultBox=document.getElementById("result")
    let messageBox=document.getElementById("message")
    let resetButton=document.getElementById("button")


    function result(playerArray , player){
        console.log(player,playerArray)
        for(let i=0;i<winningConditions.length;i++){
            // console.log(winningConditions[i])
            let check = true;
            for(let j=0;j<winningConditions[i].length;j++){
                if(playerArray.includes(winningConditions[i][j])== false){
                    check = false;
                    break;
                }
            }
            if(check==true){
                isWon=true;
                resultBox.style.visibility = "visible";
                messageBox.textContent = player + " Won the match"
                // console.log(player , "won the match")
                 }
            }
    
    }

     resetButton.onclick=()=>{
        location.href="./index.html"
    }

