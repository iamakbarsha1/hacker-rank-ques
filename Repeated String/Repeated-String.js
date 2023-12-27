function repeatedString(s, n) {
    let countA = 0;
    let fullRepeats = Math.trunc(n / s.length);
    let remainder = n % s.length;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "a") {
            countA++;
        }
    }

    countA = countA * fullRepeats;

    if (remainder) {
        for (let i = 0; i < remainder; i++) {
            if (s.charAt(i) === "a") {
                countA++;
            }
        }
    }

    return countA;
}