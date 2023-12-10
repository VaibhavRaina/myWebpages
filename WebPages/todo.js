let arr = [];

while (true) {
    let input = prompt(`What would you like to do`);
    input = input.toLowerCase();

    if (input === 'quit') {
        break;
    }
    else if (input === `new`) {
        input = prompt(`Enter new to-do`)
        arr.push(input);
        console.log(`${input} added to the list`);
    }

    else if (input === `delete`) {
        input = parseInt(prompt(`Which number would you like to delete !!`));
        if (!isNaN(input) && input >= 0 && input < arr.length) {
            console.log(arr.splice(input, 1));
        }
        else {
            input = prompt(`Enter a valid number`)
        }
    }
    else if (input === `list`) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i}:${arr[i]}`);
        }
    }
}

input = console.log(`You Quit !`)