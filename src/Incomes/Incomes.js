function validateForm() {
    let salaryTitle = document.getElementById("salarytitle").value;
    let salaryAmount = document.getElementById("salaryamount").value;
    let salaryDate = document.getElementById("salarydate").value;
    let salaryCategory = document.getElementById("salarycategory").value;

    if (salaryTitle === "" || salaryAmount === "" || salaryDate === "" || salaryCategory === "Select Option") {
        alert("Please fill out all fields!");
        return false;
    }

    showalert();
    return true;
}

function showalert() {
    alert("Income Added Successfully....!!");
}