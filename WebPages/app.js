let input = parseInt(prompt(`Enter the maximum number \n`));
let random=Math.floor(Math.random()*(input+1));
let attempt=0;
 while(!input){
        input = parseInt(prompt(`Enter a valid number \n`));
     }
     input = parseInt(prompt(`Guess number \n`));
     
while(parseInt(input)!==random){
   
    if(input<random){
        input=prompt(`Your Guess is low , Guess again \n`);
        attempt++;
    }
    else if(input>random){
        input=prompt(`Your guess is high , Guess again \n`);
        attempt++;
    }
    else if(input=='q'){
        input = alert(`You Quit, the number is ${random} and total attempts= ${attempt}`);
        break;
        

    }
    else {
        
        input = prompt(`You Guessed Correctly, the number is ${random} and total attempts= ${attempt}`);

        break;
    }
}


