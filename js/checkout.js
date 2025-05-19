
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Validate fields entered by the user: name, phone, password, and email
 if (fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
    fName.classList.add("is-invalid");
    fName.classList.remove("is-valid");
    error++;
  } else {
    fName.classList.remove("is-invalid");
    fName.classList.add("is-valid");
  }

  // Validación Apellidos
  if (fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
    fLastN.classList.add("is-invalid");
    fLastN.classList.remove("is-valid");
    error++;
  } else {
    fLastN.classList.remove("is-invalid");
    fLastN.classList.add("is-valid");
  }

  // Validación Email
  if (
    fEmail.value.length < 3 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)
  ) {
    fEmail.classList.add("is-invalid");
    fEmail.classList.remove("is-valid");
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
    fEmail.classList.add("is-valid");
  }


  // Validación Teléfono
  if (!/^\d{9}$/.test(fPhone.value)) {
    fPhone.classList.add("is-invalid");
    fPhone.classList.remove("is-valid");
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
    fPhone.classList.add("is-valid");
  }

  // Validación Password
  if (
    fPassword.value.length < 4 ||
    fPassword.value.length > 8 ||
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value)
  ) {
    fPassword.classList.add("is-invalid");
    fPassword.classList.remove("is-valid");
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
    fPassword.classList.add("is-valid");
  }


  // Validación Dirección
  if (fAddress.value.length < 3) {
    fAddress.classList.add("is-invalid");
    fAddress.classList.remove("is-valid");
    error++;
  } else {
    fAddress.classList.remove("is-invalid");
    fAddress.classList.add("is-valid");
  }

  // Resultado
  if (error > 0) {
    alert("There are errors in the form.");
  } else {
    alert("Valid form.");
  }
}
