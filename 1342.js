/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps  = (num) => {
    let counter = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
            counter++;
        } else {
            num -= 1;  // -= 1 works much faster than --
            counter++;
        };
    }
    return counter;
};