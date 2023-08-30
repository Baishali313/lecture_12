// Function to submit the form
function submitForm(event) {
  event.preventDefault();
  addNewAppointment();
}
var appointmentData=[];
// Function to add a new appointment and update the list
function addNewAppointment() {
  const ulElement = document.getElementById("l");
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  const newAppointment = document.createElement("li");
  newAppointment.textContent = `${name.value} - ${email.value} - ${phone.value}`;

  const editbtn = document.createElement("button");
  const deletebtn = document.createElement("button");

  editbtn.textContent = "Edit";
  deletebtn.textContent = "Delete";

  newAppointment.appendChild(editbtn);
  newAppointment.appendChild(deletebtn);

  editbtn.addEventListener("click", function () {
    // Handle edit logic here
    name.value = appointmentData[0];
    email.value = appointmentData[1];
    phone.value = appointmentData[2];
  });

  deletebtn.addEventListener("click", function () {
    ulElement.removeChild(newAppointment);
  });

  ulElement.appendChild(newAppointment);
}

// Add event listener to the form submit button
const submitButton = document.getElementById("addAppointment");
submitButton.addEventListener("click", submitForm);

// Make Axios GET request when DOM content is loaded
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/98a92aad08e94d96b4429f4a0f68458f/appointmentData")
    .then((response) => {
      console.log(response);
      // You can process the response and display existing appointments here
    })
    .catch((error) => {
      console.log(error);
    });
});

// Function to handle Axios POST request
function saveAppointmentData(user) {
  axios
    .post(
      "https://crudcrud.com/api/98a92aad08e94d96b4429f4a0f68458f/appointmentData",
      user
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
