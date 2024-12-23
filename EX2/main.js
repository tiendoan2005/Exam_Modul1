function perfectNumber() {
    let num = parseInt(prompt("Nhập vào số của bạn: "));
    if (num <= 1) return false;

    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== 1 && i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
}

console.log(perfectNumber());
