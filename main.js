// Function to submit the form
function submitForm(event) {
  event.preventDefault();
  addUserData();
}

// Function to add user data and handle buttons
function addUserData() {
  const ulElement = document.getElementById("l");
  const newAppointment = document.createElement('li');

  // Create the list item content
  newAppointment.textContent = `${document.getElementById("name").value} - ${document.getElementById("email").value} - ${document.getElementById("phone").value}`;

  ulElement.appendChild(newAppointment);

  const editbtn = document.createElement('button');
  const deletebtn = document.createElement('button')

  editbtn.textContent = "Edit";
  deletebtn.textContent = 'Delete';
  newAppointment.appendChild(editbtn);
  editbtn.classList.add('editButton');
  newAppointment.appendChild(deletebtn);
  deletebtn.classList.add("deleteButton");

  editbtn.addEventListener("click", function() {
    ulElement.removeChild(newAppointment);
    // Handle edit logic here
  });

  deletebtn.addEventListener("click", function() {
    ulElement.removeChild(newAppointment);
  });

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const user = {
    NAME: name.value,
    EMAIL: email.value,
    PHONE: phone.value
  };

  // Make Axios POST request to save the user data
  axios.post("https://crudcrud.com/api/ab7b2f0037474b6ea1d51fb3b3d43093/appointmentData", user)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      document.body.innerHTML += "<h4> Something went wrong </h4>";
      console.log(err);
    });
}

// Add event listener to the form submit button
//const submitButton = document.getElementById("addAppointment");
//submitButton.addEventListener("click", submitForm);

// Fetch and display existing appointments when DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/ab7b2f0037474b6ea1d51fb3b3d43093/appointmentData")
    .then((response) => {
      console.log(response);
      // Process the response and display existing appointments here
    })
    .catch((error) => {
      console.log(error);
    });
});
