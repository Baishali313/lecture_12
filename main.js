// Function to add user data and handle buttons
function addAppointmentToList(appointment) {
  const ulElement = document.getElementById("l");
  const newAppointment = document.createElement('li');

  // Create the list item content
  newAppointment.textContent = `${appointment.NAME} - ${appointment.EMAIL} - ${appointment.PHONE}`;

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

    // Handle edit logic here
  });

  deletebtn.addEventListener("click", function() {
    ulElement.removeChild(newAppointment);

    // Make Axios DELETE request to remove the appointment data
    axios.delete(`https://crudcrud.com/api/ab7b2f0037474b6ea1d51fb3b3d43093/appointmentData/${appointment._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// Fetch and display existing appointments when DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/ab7b2f0037474b6ea1d51fb3b3d43093/appointmentData")
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

