var countrySelect = document.getElementById("countrySelect");
var courseSelect = document.getElementById("courseSelect");
var userName = document.getElementById("userName");
var fatherName = document.getElementById("fatherName");
var userEmail = document.getElementById("userEmail");
var userPhoneNumber = document.getElementById("userPhoneNumber");
var loader = document.getElementById("loader");

function userData() {
  if (countrySelect.value === "Select Country") {
    return Swal.fire({
      icon: "error",
      text: "Please select your country name!",
    });
  }

  if (courseSelect.value === "Select Course") {
    return Swal.fire({
      icon: "error",
      text: "Please select your course name!",
    });
  }

  if (!userName.value) {
    return Swal.fire({
      icon: "error",
      text: "Please enter your name!",
    });
  }

  if (!fatherName.value) {
    return Swal.fire({
      icon: "error",
      text: "Please enter your father name!",
    });
  }
  if (!userEmail.value) {
    return Swal.fire({
      icon: "error",
      text: "Please enter your correct email!",
    });
  }
  if (!userPhoneNumber.value) {
    return Swal.fire({
      icon: "error",
      text: "Please enter your phone number!",
    });
  } else {
    loader.style.display = "block";
    setTimeout(() => {
      console.log(
        countrySelect.value,
        courseSelect.value,
        userName.value,
        fatherName.value,
        userEmail.value,
        userPhoneNumber.value
      );
      loader.style.display = "none";
      countrySelect.value = "Select Country";
      courseSelect.value = "Select Course";
      userName.value = "";
      userEmail.value = "";
      userPhoneNumber.value = "";
      fatherName.value = "";
    }, 2000);
  }
}
