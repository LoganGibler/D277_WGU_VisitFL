function checkEmails() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  if (input1 !== input2) {
    alert("Emails do not match!");
    return false;
  } else {
    alert("Form fields filled out correctly, form has been submitted.");
    return true;
  }
}
