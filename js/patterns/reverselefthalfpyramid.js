let size = 5;
for (let i = size; i >= 1; i--){
    let row = "";
    for (let j = 0; j < size - i; j++){
        row += " ";
    }

    for (let k = 1; k <= i; k++){
        row += "*";
    }
    console.log(row);
}