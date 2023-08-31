// Function to add user data and handle buttons
function addAppointmentToList(appointment) {
  const ulElement = document.getElementById("l");
  const newAppointment = document.createElement('li');

  // Create the list item content
  newAppointment.textContent = `${appointment.NAME} - ${appointment.EMAIL} - ${appointment.PHONE}`;
  document.getElementById("name").value='';
  document.getElementById("email").value='';
  document.getElementById('phone').value='';

  ulElement.appendChild(newAppointment);

  const editbtn = document.createElement('button');
  const deletebtn = document.createElement('button');

  editbtn.textContent = "Edit";
  deletebtn.textContent = 'Delete';
  newAppointment.appendChild(editbtn);
  editbtn.classList.add('editButton');
  newAppointment.appendChild(deletebtn);
  deletebtn.classList.add("deleteButton");

  editbtn.addEventListener("click", function() {
    ulElement.removeChild(newAppointment);
    axios.delete(`https://crudcrud.com/api/f0abc008bd9d47a2bd18c8360330a519/appointmentData/${appointment._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    document.getElementById("name").value = appointment.NAME;
    document.getElementById("email").value = appointment.EMAIL;
    document.getElementById('phone').value = appointment.PHONE;

    
  });

  deletebtn.addEventListener("click", function() {
    ulElement.removeChild(newAppointment);

    // Make Axios DELETE request to remove the appointment data
    axios.delete(`https://crudcrud.com/api/f0abc008bd9d47a2bd18c8360330a519/appointmentData/${appointment._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  var user = {
    NAME: name.value,
    EMAIL: email.value,
    PHONE: phone.value
  };

  axios.post('https://crudcrud.com/api/f0abc008bd9d47a2bd18c8360330a519/appointmentData', user)
    .then((response) => {
      console.log(response);
      // If successful, add the new appointment to the list
      addAppointmentToList(user);
    })
    .catch((err) => {
      // Display error message
      document.body.innerHTML += "<h4> Something went wrong </h4>";
      console.log(err);
    });

  }
// Attach submitForm function to the form submission
//const submitButton = document.getElementById("addAppointment");
//submitButton.addEventListener("click", submitForm);

// Fetch and display existing appointments when DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/f0abc008bd9d47a2bd18c8360330a519/appointmentData")
    .then((response) => {
      console.log(response);
      // Process the response and display existing appointments here
      const appointments = response.data;
      appointments.forEach(appointment => {
        addAppointmentToList(appointment);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
