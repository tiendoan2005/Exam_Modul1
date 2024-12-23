function Avg() {
    let sl;
    do {
        sl = parseInt(prompt("Số lượng phần tử: "));
        if (sl <= 0 || sl > 50) {
            alert("Vui lòng nhập đúng số lượng phần tử!");
        }
    } while (sl <= 0 || sl > 50);

    let arr = [];
    for (let i = 0; i < sl; i++) {
        let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1)));
        arr.push(num);
    }

    document.getElementById("resultArr").innerHTML = "Array = [" + arr.join(" ") + "]";

    let sum = 0, count = 0;
    for (let num of arr) {
        if (num % 3 === 0) {
            sum += num;
            count++;
        }
    }

    let avg = count > 0 ? sum / count : 0;
    document.getElementById("resultAvg").innerHTML = avg.toFixed(1);
}

Avg();
