let nameOfPatient = document.getElementById("Name");
let date = document.getElementById("date");
let problem = document.getElementById("Problem");
let submitbtn = document.getElementById("submitbtn");
let downloadbtn = document.getElementById("downloadbtn");
let tbody = document.getElementById("tbody");
let Amount = document.getElementById("Amount");
let row = document.getElementById("row");

const Patients = JSON.parse(localStorage.getItem("Patients") || "[]");

showData();

submitbtn.addEventListener("click", () => {

  let patientInfo = {
    Pname: nameOfPatient.value,
    Pdate: date.value,
    Pproblem: problem.value,
    Pamount:Amount.value
  };
  Patients.push(patientInfo);
  localStorage.setItem("Patients", JSON.stringify(Patients));
  nameOfPatient.value = "";
  date.value = "";
  problem.value = "";
  Amount.value ="";
  showData();
});

Amount.addEventListener("keyup", () => {
  if (isNaN(Amount.value) == true) {
    alert("Enter Number only");
    Amount.value = "";
  }
});

function showData() {
  let html = "";
  Patients.forEach((element, index) => {
    let dom = `<tr id="row">
  <th scope="row">${index + 1}</th>
  <td>${element.Pname}</td>
  <td>${element.Pdate}</td>
  <td>${element.Pproblem}</td>
  <td>${element.Pamount}</td>
  <td onClick="deleterow(${index})" class="delete">delete</td>
  </tr>`;
    html += dom;
  });
  tbody.innerHTML = html;
}

function deleterow(index){
   console.log(Patients)
  Patients.splice(index,1);
 console.log(Patients)
  localStorage.setItem("Patients",JSON.stringify(Patients));

  showData();
}

downloadbtn.addEventListener("click", () => {
  location.href = "printpage.html";
});

// nameOfPatient.addEventListener('keyup',()=>{
//     console.log(nameOfPatient.value);
// })
