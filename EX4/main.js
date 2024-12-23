let workers = [];
let workerCount = 0;

function addWorker(name, dob, address, salary, position) {
    workers.push({
        index: ++workerCount,
        name: name,
        dob: dob,
        address: address,
        salary: salary,
        position: position
    });
    displayWorkers();
}

function displayWorkers() {
    const workerList = document.getElementById("workerList");
    workerList.innerHTML = "";
    workers.sort((a, b) => a.name.localeCompare(b.name));

    workers.forEach(worker => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${worker.index}</td>
            <td>${worker.name}</td>
            <td>${worker.dob}</td>
            <td>${worker.address}</td>
            <td>${worker.salary}</td>
            <td>${worker.position}</td>
        `;

        workerList.appendChild(row);
    });
}
addWorker("Trương Tấn B", "11-11-1998", "Đà Nẵng", 2000, "Abc");
addWorker("Trương Tấn A", "11-11-1997", "Quảng Nam", 2000, "Abc");
addWorker("Trương Tấn C", "11-11-1999", "Đà Huế", 2000, "Abc");
