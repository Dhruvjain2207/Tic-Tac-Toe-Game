let boxes=document.querySelectorAll(".box");
let body=document.querySelector("body");
let h1=document.querySelector("h1");
let btnX=document.querySelector(".X");
let btnO=document.querySelector(".O");
let h3=document.querySelector("h3");
let reset=document.querySelector(".reset");




btnO.addEventListener("click",()=>{
    turnO=true;
    btnO.classList.add("none");
    btnX.classList.add("none");
    h3.innerText="";
});
btnX.addEventListener("click",()=>{
    turnO=false;
    btnX.classList.add("none");
     btnO.classList.add("none");
     h3.innerText="";
})


for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O";
            turnO=false;
            box.disabled=true;
            winner();
        }else{
            box.innerText="X";
            turnO=true;
             box.disabled=true;
             winner();
        }
    })
}

let winningPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 let winner= ()=>{
    for(let pattern of winningPatterns){
    console.log(pattern[0],pattern[1],pattern[2]);
    console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]],);
    let val1=boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;

    if(val1!="" && val2!="" && val3!=""){
        if(val1==val2 && val2==val3){
            let h2=document.createElement("h2");
            h2.innerText=`Winner is ${val1}`
            h1.appendChild(h2);
            for(box of boxes){
                box.disabled=true;
            }
        }
        
    }
}


 }
 reset.addEventListener("click",()=>{
    for(box of boxes){ //   clear boxes
        box.innerText="";
        box.disabled=false;
    }
    document.querySelector("h2").remove(); // remove winner line
     btnX.classList.remove("none");
        btnO.classList.remove("none");
        h3.innerText="Choose";
 })
