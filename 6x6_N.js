let computer=[],human=[],level=0;
tiles=['r1c1', 'r1c2', 'r1c3', 'r1c4','r1c5','r1c6','r2c1','r2c2','r2c3','r2c4','r2c5','r2c6','r3c1','r3c2','r3c3','r3c4','r3c5','r3c6','r4c1','r4c2','r4c3','r4c4','r4c5','r4c6','r5c1','r5c2','r5c3','r5c4','r5c5','r5c6','r6c1','r6c2','r6c3','r6c4','r6c5','r6c6'];
temp=new Array(36).fill(0);
seqflag=new Array(36).fill(0);
const start=document.querySelector('.js-start');
start.addEventListener('click',startGame);
const info=document.querySelector('.js-info');
const heading=document.querySelector('.js-heading');
const tileBox=document.querySelector('.js-box');

function startGame(){
 Name=prompt("Please Enter your name");
// Now name is stored

const display=document.querySelector('.display');

display.textContent="Welcome "+Name;  
console.log("Game started");
start.classList.add('hidden');
info.classList.remove('hidden');
info.textContent="Computer's Turn";

nextRound();
}

function nextRound(){
  /*
var keys=​Object​.​keys​(​localStorage​)​; 
 ​if(keys​.​includes​(​name​)​)​{ 
var value=parseInt​(​localStorage​.​getItem​(​name​)​)​; 
if(score​ ​>​ ​value​)​{
  localStorage​.​setItem​(​name​,​String​(​score​)​)​;}}
else{localStorage​.​setItem​(​name​,​String​(​score​)​)​;}
*/

if(level==36){console.log("Win!");
temp=new Array(36).fill(0);}
level+=1;
tileBox.classList.add('unclickable');
info.textContent="Computer's Turn";
heading.textContent = `Level ${level} of 36`;
const next = [...computer];
next.push(nextStep());
computer=[...next];
playRound(next);
setTimeout(()=>{humanTurn(level);},
level * 1000+500);
}

function nextStep(){
console.log("Returning random\nLevel ",level,"Starting...");
while(true){
 ran_index=Math.floor(Math.random()*tiles.length);
if(seqflag[ran_index]==0){seqflag[ran_index]=1;break;}}
console.log(tiles[ran_index]);
return tiles[ran_index];
}

function playRound(next){
  next.forEach((t, index) => {
    setTimeout(() => {
      activateTile(t);
    }, (index+1)*600);
  });
}

function activateTile(t){
  console.log("Tiles activating");
const tile = document.querySelector(`[data-tile='${t}']`);
tile.classList.add('activated');
setTimeout(()=>{tile.classList.remove('activated');},300);
}

function humanTurn(level) {
temp = new Array(36).fill(0);
console.log("Your turn");
tileBox.classList.remove('unclickable');
info.textContent=`Your turn`;
}

tileBox.addEventListener('click',event =>{
 const {tile}=event.target.dataset;
console.log("i am",tile);
  if (tile) handleClick(tile);
});

function handleClick(tile){
  console.log("inside handleclick");
  human.push(tile);
  a1=tiles.indexOf(tile);
  flag=true;
  if(temp[a1]==1) flag=false; else temp[a1]=1; 
  if(seqflag[a1]!=temp[a1]) flag=false;
  if (!flag){
    
    var keys=Object.keys(localStorage);
if(keys.includes(Name))
{
  var value=parseInt(localStorage.getItem(Name));

  if(level>value)
  {
    localStorage.setItem(Name,String(level));
    }
 
     
}
   else{localStorage.setItem(Name,String(level));}
  
    
    
    
    
    resetGame(`Better luck Next Time! Game over, you pressed the wrong tile/repeated tile,Your Score is ${10*level} `); 
    console.log('You has pressed incorrect tile/ repeated tile henceGame over!');
    return;}
  if (human.length==computer.length) {
    if (human.length==36) {
      resetGame('Congrats! You Passed all Levels,Dont forget to Give Treat When we meet at campus!');
      return;}human=[];
    setTimeout(() => {nextRound();},1000);return;}
    info.textContent=`Your turn`;
}

function resetGame(text){
  
  alert(text);
//Name=prompt("Please Enter your name");
seqflag=new Array(36).fill(0);

computer=[];human=[];
level=0;
start.classList.remove('hidden'); 
info.classList.add('hidden');
tileBox.classList.add('unclickable');}
