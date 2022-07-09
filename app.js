const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
const lives =document.getElementById("attemptCount");
var live=10;
var inputValue;
var guess=1
let randonNumber=Math.round(Math.random()*100);
console.log(randonNumber);
submitButton.onclick=()=>{                    //fetch values using ()=>
    
    inputValue=document.getElementById("textBox").value;
    console.log(inputValue);
    live--;

if (inputValue == randonNumber)
    {    
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS ");
    }

else if(live==0){
    {    
        alert("OOPS!!! YOU LOST THE GAME. TRY AGAIN");
    }
}
else if(inputValue > randonNumber){
      Text=`Your guess is  high. ${live} remaining`;
}
else if(inputValue < randonNumber){
    Text=`Your guess is  low. ${live} remaining`;
}
console.log(live);
console.log(Text);
message.style.display = "inherit";
message.innerHTML = Text;
lives.innerHTML = live;
}