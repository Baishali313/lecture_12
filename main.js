
function submitForm(event){
  event.preventDefault();
  addUserData();
}
  function addUserData() {

    const ulElement=document.getElementById("l");
    const newAppointment= document.createElement('li');

    newAppointment.textContent=document.getElementById("name").value+"-"
    +document.getElementById("email").value+"-"
    +document.getElementById("phone").value;

    ulElement.appendChild(newAppointment);

    const editbtn= document.createElement('button');
    const deletebtn = document.createElement('button')

    editbtn.textContent="Edit";

    deletebtn.textContent='Delete';
    newAppointment.appendChild(editbtn);
    editbtn.classList.add('editButton');
    newAppointment.appendChild(deletebtn);
    deletebtn.classList.add("deleteButton");

    editbtn.addEventListener("click", function() {
      ulElement.removeChild(newAppointment);
      //localStorage.removeItem(user.EMAIL);
      document.getElementById("name").value= obj.name;
      document.getElementById('email').value=obj.email;
      document.getElementById('phone').value=obj.phone;
  });

  deletebtn.addEventListener("click",function(){
      ulElement.removeChild(newAppointment);
     // localStorage.removeItem(user.EMAIL);
  });

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  var user={
     
      NAME: name.value,
      EMAIL:email.value,
      PHONE: phone.value
  }
  axios.post("https://crudcrud.com/api/98a92aad08e94d96b4429f4a0f68458f/appointmentData",user)
  .then((response)=>{
    console.log(response);
  })
  .catch((err)=>{
    document.body.innerHTML=  document.body.innerHTML+ "<h4> Something went wrong </h4>"
    console.log(err);
  })
  //var userJSON= JSON.stringify(user);
  //localStorage.setItem(user.EMAIL, userJSON);











  }