function taskOne(base, increment) {
    base = Number(base);
    increment = Number(increment);

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = base % 2 === 0 ? 4 : 1;
    let steps = Math.ceil(base / 2);
    for (let i = 1; i < steps; i++) {
        if (i % 5 === 0 && i != 0) {
            lapis += base * base - (base - 2) * (base - 2);
        } else {
            marble += base * base - (base - 2) * (base - 2);
        }
        stone += (base - 2) * (base - 2);
        base -= 2;
    }

    gold = Math.ceil(gold * increment);
    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapis = Math.ceil(lapis * increment);
    let height = Math.floor(steps * increment);

    console.log(`Stone required: ${stone}\nMarble required: ${marble}\nLapis Lazuli required: ${lapis}\nGold required: ${gold}\nFinal pyramid height: ${height}\n`);

}


//taskOne(11, 1);
//taskOne(11,0.75);
//taskOne(12, 1);
taskOne(23, 0.5);