function fsubmit() {
    let FirstName = document.getElementById('firstname').value;
    let LastName = document.getElementById('lastname').value;
    let Email = document.getElementById('email').value;
    let Reason = document.getElementById('reason').value;
    console.log(FirstName,
        LastName, Email, Reason);
    if (FirstName && LastName && Email && Reason) {
        alert("Form Submitted Successfully");
    } else {
        alert("All fields are required");
    }
}