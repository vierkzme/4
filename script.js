function TampilkanData() {
  const editForm = document.querySelector("#editForm");

  //ambil data
  document.getElementById("nameInput").value =
    localStorage.getItem("name") || document.getElementById("name").textContent;
  document.getElementById("roleInput").value =
    localStorage.getItem("role") || document.getElementById("role").textContent;
  document.getElementById("availabilityInput").value =
    localStorage.getItem("availability") ||
    document.getElementById("availability").textContent;
  document.getElementById("ageInput").value =
    localStorage.getItem("age") || document.getElementById("age").textContent;
  document.getElementById("locationInput").value =
    localStorage.getItem("location") ||
    document.getElementById("location").textContent;
  document.getElementById("experienceInput").value =
    localStorage.getItem("experience") ||
    document.getElementById("experience").textContent;
  document.getElementById("emailInput").value =
    localStorage.getItem("email") ||
    document.getElementById("email").textContent;

  //display atau none form edit
  if (editForm.style.display === "none" || editForm.style.display === "") {
    editForm.style.display = "block";
  } else {
    editForm.style.display = "none";
  }
}

//ketika diklik
document.getElementById("editBtn").addEventListener("click", TampilkanData);

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //ambil nilai input form
  const name = document.getElementById("nameInput").value;
  const role = document.getElementById("roleInput").value;
  const availability = document.getElementById("availabilityInput").value;
  const age = document.getElementById("ageInput").value;
  const location = document.getElementById("locationInput").value;
  const experience = document.getElementById("experienceInput").value;
  const email = document.getElementById("emailInput").value;

  //save ke local
  localStorage.setItem("name", name);
  localStorage.setItem("role", role);
  localStorage.setItem("availability", availability);
  localStorage.setItem("age", age);
  localStorage.setItem("location", location);
  localStorage.setItem("experience", experience);
  localStorage.setItem("email", email);

  //renew text
  document.getElementById("name").textContent = name;
  document.getElementById("role").textContent = role;
  document.getElementById("availability").textContent = availability;
  document.getElementById("age").textContent = age;
  document.getElementById("location").textContent = location;
  document.getElementById("experience").textContent = experience;
  document.getElementById("email").textContent = email;

  //hide form setelah submit
  document.getElementById("editForm").style.display = "none";
});

//load data
window.onload = function () {
  if (localStorage.getItem("name")) {
    document.getElementById("name").textContent = localStorage.getItem("name");
  }
  if (localStorage.getItem("role")) {
    document.getElementById("role").textContent = localStorage.getItem("role");
  }
  if (localStorage.getItem("availability")) {
    document.getElementById("availability").textContent =
      localStorage.getItem("availability");
  }
  if (localStorage.getItem("age")) {
    document.getElementById("age").textContent = localStorage.getItem("age");
  }
  if (localStorage.getItem("location")) {
    document.getElementById("location").textContent =
      localStorage.getItem("location");
  }
  if (localStorage.getItem("experience")) {
    document.getElementById("experience").textContent =
      localStorage.getItem("experience");
  }
  if (localStorage.getItem("email")) {
    document.getElementById("email").textContent =
      localStorage.getItem("email");
  }
};
