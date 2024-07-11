// import styles from "./page.module.css";

"use client";
import '../style.css'
import 'bootstrap/dist/css/bootstrap.css';
import dynamic from 'next/dynamic'
import $ from 'jquery';
import { useState } from 'react';
import { useEffect } from 'react';


function Lives(props){
  return(
    <div className=''><h2 style={{color:'white'}}>{props.lives}</h2></div>
  )
}


function Points(props){

return(
    <div className='points'><h2 style={{color:'white'}}>{props.points}</h2></div>
  )
  

}
function Player(props)
{
return(

  <div className={props.player} value={props.position} hidden= {props.hidden} zIndex= {props.zIndex} style={props.color}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-sunglasses-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.2 4.2 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A3 3 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
</svg></div>)

}


function Enemy(props)
{
return(

  <div className={props.enemy} value={props.position} style={props.color}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5"/>
</svg></div>)
}

function Blocks(props){


    return <div className={props.class} onKeyDown={props.handleKeyPress} value={props.number} data-xcoordinate = {props.xcord} data-ycoordinate = {props.ycord}>
  <Player player = {props.player} hidden = {props.hidden}  color = {props.color} zIndex = {props.zIndex}/>
  <Enemy enemy = {props.enemy} color = {props.enemycolor} />
  {/* <Points points = {props.points} /> */}
 <div className= 'blank'></div>
</div>
}



export default function Grid() {

const [playerPosition,setPlayerPosition] = useState({x:2,y:2})
const [enemyPosition,setEnemyPosition] = useState({x:1,y:1})
let blocks = [{number:1,x:1,y:1,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:2,x:2,y:1,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:3,x:3,y:1,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:4,x:4,y:1,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:5,x:5,y:1,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:6,x:1,y:2,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:7,x:2,y:2,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:8,x:3,y:2,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:9,x:4,y:2,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:10,x:5,y:2,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:11,x:1,y:3,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:12,x:2,y:3,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:13,x:3,y:3,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:14,x:4,y:3,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:15,x:5,y:3,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:16,x:1,y:4,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:17,x:2,y:4,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:18,x:3,y:4,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:19,x:4,y:4,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:20,x:5,y:4,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:21,x:1,y:5,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:22,x:2,y:5,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:23,x:3,y:5,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:24,x:4,y:5,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"},{number:25,x:5,y:5,color:'blue',zIndex:'1', enemyColor:'blue', enemyZindex:"1"}]
const [caught,setCaught] = useState(false)

const [points, setPoints] = useState(0)
const [lives, setLives] =  useState(8);



function moveEnemy(player){

  let enemyY = enemyPosition.y
  let enemyX = enemyPosition.x

if (player.x > enemyX) {
  if(enemyX < 5)
    {enemyX += 1}
else{enemyX = 1;
};
}


else if(player.x < enemyX){
  if(enemyX > 1)
    {enemyX -= 1}
else{enemyX = 5;
};
}

else if(player.y > enemyY){
  if(enemyY < 5)
    {enemyY += 1}
else{enemyY = 1;
};
}

else if(player.y < enemyY){
  if(enemyY > 1)
    {enemyY -= 1}
else{enemyY = 5;
};
}
// console.log(enemyX + ' x' + enemyY + " y")


    setEnemyPosition({x:enemyX,y:enemyY});


}
 const handleKeyPress = (e)=>{
  e.preventDefault()

let newX = playerPosition.x
let newY = playerPosition.y

switch(e.key){

case "Enter":

  break;

case "ArrowDown":
  if(newY < 5)
    {newY += 1}
else{newY = 1;
};
break;

case "ArrowUp":
  if(newY > 1)
    {newY -= 1}
else{newY = 5;
};
break;

case "ArrowRight":
  if(newX < 5)
    {newX += 1}
else{newX = 1;
};
break;

case "ArrowLeft":
  if(newX > 1)
    {newX -= 1}
else{newX = 5;
};
break;

}

setPlayerPosition({x:newX, y:newY})
 }


function startOver(){

setPlayerPosition({x:2, y:2})
setEnemyPosition({x:1, y:1})
setCaught(false)
}


function checkCaught(){


  if(playerPosition.x === enemyPosition.x && playerPosition.y === enemyPosition.y){
console.log("hi") 
 setCaught(true)
  
  // console.log(" caught!!!")
 }



 if(caught === true && lives >0){

setLives(lives - 1)
       
     console.log("caught here")
   
     startOver() 
     console.log("Hey ")
     }

 }



useEffect(() => {

  setTimeout(() => {


    // setInterval()
  moveEnemy(playerPosition) 
checkCaught()

  ;
  }, 1000);

  
},[enemyPosition]);

  

  


function move(char,color,charColor,charZindex){

let activeBlock 

  for(let i = 0;i<blocks.length;i++){
    
    if(char.x == blocks[i].x && char.y == blocks[i].y){
    
    for(let si = 0;si<blocks.length;si ++){
    
    if(activeBlock === blocks[si].number){
    blocks[si][charColor] = "blue"
    blocks[si][charZindex] = "1"
    }
    }
    
    blocks[i][charColor] = color
    blocks[i][charZindex] = "3"
    
    activeBlock = blocks[i].number 
    
    
    
    }
    
    }

}
move(playerPosition,'white',"color","zIndex")
move(enemyPosition,"red","enemyColor","enemyZindex")


  return (


 <>
 <div className='top'><Lives lives = {lives}/> </div>

 
<div className="grid" tabIndex='0' autoFocus onKeyDown={handleKeyPress}>

{blocks.map((block)=><Blocks number={block.number} points = {points} xcord={block.x} ycord={block.y} key={block.number} class = {"blocks" +" "} enemy ={'enemy'} player = {'p'+block.number + " " + "player"} enemycolor = {{color:block.enemyColor,zIndex:block.enemyZindex}}  color = {{color: block.color,zIndex:block.zIndex}}/>)}
</div>

<div className='bottom'>hey</div>

 </>


  );
}
