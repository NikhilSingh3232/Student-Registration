document.getElementById("submit").addEventListener("click", addStudent);

function addStudent() {
    // Get input elements
    const student_name = document.getElementById("name");
    const branch = document.getElementById("branch");
    const email = document.getElementById("email");
    const reg = document.getElementById("reg");

    // Validate input values
    if (!student_name.value || !branch.value || !email.value || !reg.value) {
        alert("Please fill out all fields!");
        return;
    }

    // Get the table
    const table = document.getElementById("student-table");

    // Create a new row
    const row =document.createElement("tr");
    row.innerHTML = `
        <td>${student_name.value}</td>
        <td>${branch.value}</td>
        <td>${email.value}</td>
        <td>${reg.value}</td>
        <td>
            <button class="action-btn reset-btn">Reset</button>
            <button class="action-btn delete-btn">Delete</button>
        </td>
    `;
    table.appendChild(row);

    // Add event listeners for reset and delete buttons
    row.querySelector(".reset-btn").addEventListener("click", () => resetRow(row));
    row.querySelector(".delete-btn").addEventListener("click", () => deleteRow(row));

    // Clear form inputs
    student_name.value = "";
    branch.value = "";
    email.value = "";
    reg.value = "";
}

function resetRow(row) {
    // Reset row cells to empty
    const cells = row.querySelectorAll("td");
    cells[0].innerText = "";
    cells[1].innerText = "";
    cells[2].innerText = "";
    cells[3].innerText = "";
}

function deleteRow(row) {
    // Remove the row from the table
    row.remove();
}
