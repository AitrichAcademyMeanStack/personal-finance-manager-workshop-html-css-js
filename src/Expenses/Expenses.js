function validateForm() {
    let expenseTitle = document.getElementById("expenseTitle").value;
    let expenseAmount = document.getElementById("expenseAmount").value;
    let expenseDate = document.getElementById("expenseDate").value;
    let expenseCategory = document.getElementById("expenseCategory").value;
    if (expenseTitle === "" || expenseAmount === "" || expenseDate === "" || expenseCategory === "Select Option") {
        alert("Please fill out all fields!");
        return false;
    }

    showalert();
    return true;
}

function showalert() {
    alert("Expense Added Successfully....!!");
}