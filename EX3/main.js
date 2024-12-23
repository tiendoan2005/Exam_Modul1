// Hàm kiểm tra năm nhuận
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

function isValidDateFormat(input) {
    if (input.length !== 7) {
        return false;
    }

    if (input.charAt(2) !== '/') {
        return false;
    }
    let month = input.slice(0, 2);
    let year = input.slice(3, 7);

    if (isNaN(month) || isNaN(year)) {
        return false;
    }

    if (parseInt(month) < 1 || parseInt(month) > 12) {
        return false;
    }

    return true;
}

function daysInMonth() {
    let input = document.getElementById("monthYear").value;

    if (!isValidDateFormat(input)) {
        alert("Định dạng nhập vào không hợp lệ! Vui lòng nhập theo định dạng MM/yyyy. Ví dụ: 02/2024.");
        return;
    }
    let month = parseInt(input.slice(0, 2), 10);
    let year = parseInt(input.slice(3, 7), 10);

    let days;
    switch (month) {
        case 1: // Tháng 1
        case 3: // Tháng 3
        case 5: // Tháng 5
        case 7: // Tháng 7
        case 8: // Tháng 8
        case 10: // Tháng 10
        case 12: // Tháng 12
            days = 31;
            break;
        case 4: // Tháng 4
        case 6: // Tháng 6
        case 9: // Tháng 9
        case 11: // Tháng 11
            days = 30;
            break;
        case 2: // Tháng 2
            if (isLeapYear(year)) {
                days = 29;
            } else {
                days = 28;
            }
            break;
    }

    document.getElementById("result").innerHTML = "Số ngày trong tháng " + month + "/" + year + " là: " + days + " ngày.";
}