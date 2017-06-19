function arithmephile(input) {
    let numbers = input.map(Number);
    let biggestProduct = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (currentNumber >= 0 && currentNumber < 10) {
            let currentProduct = 1;
            for (let j = i + 1; j <= i + currentNumber; j++) {
                let currentMultiplier = input[j];
                currentProduct *= currentMultiplier;
            }
            if (currentProduct > biggestProduct) {
                biggestProduct = currentProduct;
            }
        }
    }
    console.log(biggestProduct);
}

//arithmephile([
//    "10",
//    "20",
//    "2",
//    "30",
//    "44",
//    "3",
//    "56",
//    "20",
//    "24"
//]);

arithmephile([
    "100",
    "200",
    "2",
    "3",
    "2",
    "3",
    "2",
    "1",
    "1"
]);