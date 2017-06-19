function buildAWall(input) {
    input = input.map(Number);//parse all the elements in the array to Numbers (from Strings)

    let concrete = [];
    while (true) {
        let buildOn = false;
        let dailyConcrete = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== 30) {
                dailyConcrete += 195;
                input[i]++;
                buildOn = true;
            }
        }
        if (!buildOn) {
            break;
        } else {
            concrete.push(dailyConcrete);
        }
    }
    let sumOfConcrete = concrete.reduce((a, b)=>a + b);//to get the sum we are using .reduce
    console.log(concrete.join(", "));
    console.log(sumOfConcrete * 1900 + " pesos");
}

//buildAWall([
//    "21",
//    "25",
//    "28"
//]);


buildAWall([
    "17",
    "22",
    "17",
    "19",
    "17"
]);