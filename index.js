const containerX=1000;
const containerY=600;
var direccionX=1;
var direccionY=1
var puntuacion1=0;
var puntuacion2=0;
window.onload=()=>{
    
    const player1=document.getElementById("player1");
    const player2=document.getElementById("player2");
    
    window.requestAnimationFrame(movimientoPelota);
    
    document.body.addEventListener("keydown", (event)=> {
        if ((event.key == "w" || event.key == "W") && parseInt(player1.getAttribute("y"))>0) {
            let PlayerY=parseInt(player1.getAttribute("y"));
            player1.setAttribute("y",PlayerY-10);
        }else if((event.key == "s" || event.key == "S") && parseInt(player1.getAttribute("y"))<500){
            let PlayerY=parseInt(player1.getAttribute("y"));
            player1.setAttribute("y",PlayerY+10);
        }
        if ((event.key == "ArrowUp") && parseInt(player2.getAttribute("y"))>0) {
            let PlayerY=parseInt(player2.getAttribute("y"));
            player2.setAttribute("y",PlayerY-10);
        }else if((event.key == "ArrowDown") && parseInt(player2.getAttribute("y"))<500){
            let PlayerY=parseInt(player2.getAttribute("y"));
            player2.setAttribute("y",PlayerY+10);
        }
      });
}


function movimientoPelota(){
    const pelota=document.getElementById("pelota");
    const pelotaX=parseInt(pelota.getAttribute("cx"));
    const pelotaY=parseInt(pelota.getAttribute("cy"));
    const velocidadX=5;
    const velocidadY=1;
    if(pelotaX <= 15){
       direccionX=1
    }else if(pelotaX>=(containerX-15)){
       direccionX=-1
    }
    if(pelotaY <= 15){
        direccionY=1
    }else if(pelotaY>=(containerY-15)){
       direccionY=-1
    }else if(pelotaX<=parseInt(player1.getAttribute('x'))+35 && pelotaY>=parseInt(player1.getAttribute('y')) && pelotaY<=parseInt(player1.getAttribute('y'))+100){
        direccionX=1;
    }else if(pelotaX>=parseInt(player2.getAttribute('x'))-15 && pelotaY>=parseInt(player2.getAttribute('y')) && pelotaY<=parseInt(player2.getAttribute('y'))+100){
        direccionX=-1;

    }

    const nuevaX=pelotaX+velocidadX*direccionX;
    const nuevaY=pelotaY+velocidadY*direccionY;
    pelota.setAttribute("cx",nuevaX);
    pelota.setAttribute("cy",nuevaY);
    window.requestAnimationFrame(movimientoPelota);
}
