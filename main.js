canvas=new fabric.Canvas("myCanvas")
blockImgW=30
blockImgH=30
playerX=100
playerY=100
var blockImgObj=""
var playerObj=""
function playerUpdate(){
    fabric.Image.fromURL("imgRoblox.png",function(Img){
        playerObj=Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObj)
    })
}

function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImgObj=Img;
        blockImgObj.scaleToWidth(blockImgW);
        blockImgObj.scaleToHeight(blockImgH);
        blockImgObj.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockImgObj)
    })
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=="80"){
       blockImgW=blockImgW+5;
       blockImgH+=5; 
       document.getElementById("Largura").innerHTML=blockImgW
       document.getElementById("Altura").innerHTML=blockImgH 
    }
    if(e.shiftKey==true && keyPressed=="77"){
        blockImgW=blockImgW-5;
        blockImgH-=5; 
        document.getElementById("Largura").innerHTML=blockImgW
        document.getElementById("Altura").innerHTML=blockImgH 
    }
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="40") {
        down()
    }
    if (keyPressed=="39") {
        right()
    }
    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="87") {
        newImage("wall.jpg")
    }
    if (keyPressed=="71") {
        newImage("ground.png")
    }
    if (keyPressed=="85") {
        newImage("unique.png")
    }
    if (keyPressed=="84") {
        newImage("trunk.jpg")
    }
    if (keyPressed=="89") {
        newImage("yellow_wall.png")
    }
    if (keyPressed=="68") {
        newImage("dark_green.png")
    }
    if (keyPressed=="67") {
        newImage("cloud.png")
    }
    if (keyPressed=="82") {
        newImage("roof.png")
    }
    if (keyPressed=="76") {
        newImage("light_green.png")
    }
}
function  up(){
    if(playerY>=0){
        playerY=playerY-blockImgH;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function down(){
    if(playerY<580){
        playerY=playerY+blockImgH;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function  left(){
    if(playerX>=0){
        playerX=playerX-blockImgW;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function right(){
    if(playerX<980){
        playerX=playerX+blockImgW;
        canvas.remove(playerObj);
        playerUpdate()
    }
}