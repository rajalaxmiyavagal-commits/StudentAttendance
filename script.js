function markAttendance(name, status) {
    const records = document.getElementById("records");
    const item = document.createElement("li");

    item.textContent = name + " - " + status;
    records.appendChild(item);
}