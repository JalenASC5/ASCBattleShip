
function setup(){
    createCanvas(1300,1000);
    background("black");
    stroke("black");
    strokeWeight(2);
 }

let alphabet = ["A","B","C","D","E","F","G","H","I","J","K"];
let numberList = ['1','2','3','4',"5",'6','7','8','9','10'];
let x = 400;
let y = 100;
let z = 50;
let i = 50;
let j = 50;

//let supRandomX = Math.floor(random(0,1)*10)*50;
//let supRandomY = Math.floor(random(0,1)*10)*50;
rect(400 + i * k, 140, i, j);
function coordinates(){
    textSize(32);
    fill("blue");
    rect(x,y,i,j);
    for (let k = 0; k <=9; k++){
        rect(330,150 + z * k ,70 , j);;
    }
    rect(330,150,70,j);
    for (let k = 0; k <11; k++){
        fill(0, 102, 153);
        text(alphabet[k],415 + i * k, 140);
    }
    for (let k = 0; k <=9; k++){
        text(numberList[k],350, 190 + i * k);
    }
     fill("white");
}

function superGrid(){
    rect(x,y+z,50,50);
    rect(x,y+z*2,i,j);
    rect(x,y+z*3,i,j);
    rect(x,y+z*4,i,j);
    rect(x,y+z*5,i,j);
    rect(x,y+z*6,i,j);
    rect(x,y+z*7,i,j);
    rect(x,y+z*8,i,j);
    rect(x,y+z*9,i,j);
    rect(x,y+z*10,i,j);
}
function battleShip(){
    fill("blue");
    rect(650,500,i,j);
}
function draw(){ 
    battleShip();  
    coordinates();  
    superGrid();
    if (x == 900){
        x -= 50;
    }
    if (x >= 400){
        x += 50;
    }
}