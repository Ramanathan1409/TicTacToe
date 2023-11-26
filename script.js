let count=0;
const col = document.querySelectorAll(".col");
const p  = document.querySelector("p");
const board = document.querySelector(".tictactoe");
let x = false;
function clear(){
    
    setTimeout(()=>{
        for(let i=0;i<9;i++){
            col[i].innerText = "";
        }
        p.innerText = "Start the Game"
        x=false;
    },2000);
    count=0;
}
function draw(){
   
    if(count===9 && x===false){
        p.innerText = "It Tie";
        console.log("its tie")
        clear();
    }
    else{
        console.log("lost")
    }
}

col[0].addEventListener("click",(e)=>{

    count+=1;
    console.log(count);
    if(count%2===0){
        col[0].innerText = "O";
    }
    else{
        col[0].innerText = "X";
    }
    if((col[0].innerText===col[1].innerText && col[1].innerText!="") && (col[1].innerText===col[2].innerText)){
            p.innerText = `Game over, ${col[1].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    
    else if((col[0].innerText===col[3].innerText && col[3].innerText!="") && (col[3].innerText===col[6].innerText)){
            p.innerText = `Game over, ${col[6].innerText} is the winnner`
            x=true;
            clear();
    }
    
    else if((col[0].innerText===col[4].innerText && col[4].innerText!="") && (col[4].innerText===col[8].innerText)){
        
            
            p.innerText = `Game over, ${col[8].innerText} is the winnner`
            x=true;
            clear();
    }
    else{
        draw();
        console.log("okay");
    }
    
})

col[1].addEventListener("click",(e)=>{

    count+=1;
    console.log(count);
    if(count%2===0){
        col[1].innerText = "O";
    }
    else{
        col[1].innerText = "X";
    }
    if((col[0].innerText===col[1].innerText && col[1].innerText!="") &&(col[1].innerText===col[2].innerText)){
        
            p.innerText = `Game over, ${col[1].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    
    else if((col[4].innerText===col[1].innerText && col[4].innerText!="") && (col[4].innerText===col[7].innerText)){
        
            
            p.innerText = `Game over, ${col[7].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else{
        draw();
        console.log("okay");
    }
})



col[2].addEventListener("click",(e)=>{
    count+=1;
    console.log(count);
    if(count%2===0){
        col[2].innerText = "O";
    }
    else{
        col[2].innerText = "X";
    }
    if((col[0].innerText===col[1].innerText && col[1].innerText!="") && (col[1].innerText===col[2].innerText)){
    
            p.innerText = `Game over, ${col[1].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[6].innerText===col[4].innerText && col[4].innerText!="")&&(col[4].innerText===col[2].innerText)){
        
            p.innerText = `Game over, ${col[2].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[2].innerText===col[5].innerText && col[5].innerText!="")&&(col[5].innerText===col[8].innerText)){
       
            p.innerText = `Game over, ${col[8].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else{
        draw();
        console.log("okay");
    }
})


col[3].addEventListener("click",(e)=>{
    
    count+=1;
    console.log(count);
    if(count%2===0){
        col[3].innerText = "O";
    }
    else{
        col[3].innerText = "X";
    }
    if((col[3].innerText===col[4].innerText && col[4].innerText!="")&&(col[4].innerText===col[5].innerText)){
       
            p.innerText = `Game over, ${col[5].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[3].innerText===col[0].innerText && col[0].innerText!="")&&(col[0].innerText===col[6].innerText)){
       
            p.innerText = `Game over, ${col[6].innerText} is the winnner`
            x=true;
            clear();
        
    }
    else{
        draw();
        console.log("okay");
    }
})



col[4].addEventListener("click",(e)=>{
    
    count+=1;
    console.log(count);
    if(count%2===0){
        col[4].innerText = "O";
    }
    else{
        col[4].innerText = "X";
    }
    if((col[4].innerText===col[0].innerText && col[0].innerText!="")&&(col[0].innerText===col[8].innerText)){
        
            p.innerText = `Game over, ${col[4].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[4].innerText===col[1].innerText && col[1].innerText!="")&&(col[1].innerText===col[7].innerText)){
         
            p.innerText = `Game over, ${col[4].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[4].innerText===col[3].innerText && col[3].innerText!="")&&(col[3].innerText===col[5].innerText)){
        
            p.innerText = `Game over, ${col[4].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[4].innerText===col[2].innerText && col[2].innerText!="")&&(col[2].innerText===col[6].innerText)){
      
            p.innerText = `Game over, ${col[4].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else{
        draw();
        console.log("okay");
    }
})



col[5].addEventListener("click",(e)=>{
    
    count+=1;
    console.log(count);
    if(count%2===0){
        col[5].innerText = "O";
    }
    else{
        col[5].innerText = "X";
    }
    if((col[2].innerText===col[5].innerText && col[5].innerText!="")&&(col[5].innerText===col[8].innerText)){
         
            p.innerText = `Game over, ${col[5].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[5].innerText===col[4].innerText && col[4].innerText!="")&&(col[4].innerText===col[3].innerText)){
        
            p.innerText = `Game over, ${col[5].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else{
        draw();
        console.log("okay");
    }
})



col[6].addEventListener("click",(e)=>{
    
    count+=1;
    console.log(count);
    if(count%2===0){
        col[6].innerText = "O";
    }
    else{
        col[6].innerText = "X";
    }
    if((col[6].innerText===col[0].innerText && col[0].innerText!="") && (col[0].innerText===col[3].innerText)){
        
            
            p.innerText = `Game over, ${col[6].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[6].innerText===col[7].innerText && col[7].innerText!="") && (col[7].innerText===col[8].innerText)){
        
            
            p.innerText = `Game over, ${col[6].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[6].innerText===col[2].innerText && col[2].innerText!="") && (col[2].innerText===col[4].innerText)){
        
            p.innerText = `Game over, ${col[6].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else{
        draw();
        console.log("okay");
    }
})



col[7].addEventListener("click",(e)=>{
    
    count+=1;
    console.log(count);
    if(count%2===0){
        col[7].innerText = "O";
    }
    else{
        col[7].innerText = "X";
    }
    if((col[7].innerText===col[4].innerText && col[4].innerText!="") && (col[4].innerText===col[1].innerText)){
        
            
            p.innerText = `Game over, ${col[7].innerText} is the winnner`
            x=true;
            clear();
           

        
    }
    else if((col[7].innerText===col[6].innerText && col[6].innerText!="") && (col[6].innerText===col[8].innerText)){
        
            p.innerText = `Game over, ${col[7].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else{
        draw();
        console.log("okay");
    }
})



col[8].addEventListener("click",(e)=>{
    
    count+=1;
    console.log(count);
    if(count%2===0){
        col[8].innerText = "O";
    }
    else{
        col[8].innerText = "X";
    }
    if((col[8].innerText===col[7].innerText && col[7].innerText!="") && (col[7].innerText===col[6].innerText)){
        
            
            p.innerText = `Game over, ${col[8].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[8].innerText===col[5].innerText && col[5].innerText!="") && (col[5].innerText===col[2].innerText)){
        
            
            p.innerText = `Game over, ${col[8].innerText} is the winnner`
            x=true;
            clear();
            
        
    }
    else if((col[8].innerText===col[4].innerText && col[4].innerText!="") && (col[4].innerText===col[0].innerText)){
        
            p.innerText = `Game over, ${col[8].innerText} is the winnner`
            x=true; 
            clear();
        
    }
    else{
        console.log("i am here");
        draw();
    }
}) 





