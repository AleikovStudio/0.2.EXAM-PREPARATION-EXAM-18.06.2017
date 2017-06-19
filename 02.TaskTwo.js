function taskTwo(inputArr) {
    //let nums = [];
    //let oper = [];
    //for (let i of inputArr) {
    //   name
    //}
    //let nums = [];

    //while (true) {
    //    if (inputArr.length == 2) {
    //        if (Number.isInteger(inputArr[1])) {
    //            return "Error: too many operands!";
    //        } else {
    //            return "Error: not enough operands!"
    //        }
    //    }
    //    if (inputArr.length > 1) {
    //        if (Number.isInteger(inputArr[0]) && Number.isInteger(inputArr[1]) && !Number.isInteger(inputArr[2])) {
    //            let a = inputArr.shift();
    //            let b = inputArr.shift();
    //            let op = inputArr.shift();
    //            inputArr.unshift(solve(a, b, op));
    //            console.log(inputArr);
    //        }
    //    } else {
    //        //console.log(inputArr[0]);
    //        return inputArr[0];
    //    }
    //}

    //let nums = [];
    let i = 2;
    while (inputArr.length > 1) {
        if (inputArr.length > 2) {
            //for (let i = 2; i < inputArr.length; i++) {
            if (!Number.isInteger(inputArr[i])) {
                let result = solve(inputArr[i - 2], inputArr[i - 1], inputArr[i]);

                if (isNaN(result)) {
                    return "Error: too many operands!";
                }

                inputArr.splice(0, 3, result);
                console.log(result);
            }
        }
        else {
            console.log(inputArr);
        }
        i++;
    }


    function solve(a, b, operator) {
        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                return a / b;
            case "*":
                return a * b;
                break;
        }
    }
}


//taskTwo([3,
//        4,
//        '+']
//);

taskTwo([31,
        2,
        '+',
        11,
        '/']
);

//taskTwo([5,
//        3,
//        4,
//        '*',
//        '-']
//);