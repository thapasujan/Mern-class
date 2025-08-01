let size = 5;
for (let i = 1 ; i <= size; i++){
    let row = ""
    for (let j = 1; j <= size - 1; j++){
        row += " ";
    }

    for (let k = 1; k <= i; k++){
        row += "* ";
    }

    console.log(row);
}