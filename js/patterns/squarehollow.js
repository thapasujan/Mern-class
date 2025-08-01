let size = 5;

for (let i = 1; i <= size; i++) {
    let row = "";

    for (let j = 1; j <= size; j++) {
        // Print * on the borders
        if (i === 1 || i === size || j === 1 || j === size) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}