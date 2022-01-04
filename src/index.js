module.exports = function toReadable(number) {
    let units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    function word2Didg(number) {
        const checker = number % 10;
        const interim = Math.floor(number / 10);
        if (number < 20) {
            return units[number];
        } else if (checker === 0) {
            return dozens[interim];
        } else {
            return dozens[interim] + " " + toReadable(checker);
        }
    }
    function word3Didg(number) {
        const checker = number % 100;
        const interim = Math.floor(number / 100);
        return checker === 0
            ? units[interim] + " hundred"
            : units[interim] + " hundred " + word2Didg(checker);
    }

    switch (("" + number).length) {
        case 1:
            return units[number];
        case 2:
            return word2Didg(number);
        case 3:
            return word3Didg(number);
        default:
            return null;
    }
};
