let nameOfPatient = document.getElementById("Name");
let date = document.getElementById("date");
let problem = document.getElementById("Problem");
let submitbtn = document.getElementById("submitbtn");
let downloadbtn = document.getElementById("downloadbtn");
let tbody = document.getElementById("tbody");

const Patients = JSON.parse(localStorage.getItem("Patients") || "[]");

showData();

function showData() {
  let html = "";
  Patients.forEach((element, index) => {
    let dom = `<tr>
  <th scope="row">${index + 1}</th>
  <td>${element.Pname}</td>
  <td>${element.Pdate}</td>
  <td>${element.Pproblem}</td>
  </tr>`;
    html += dom;
  });
  tbody.innerHTML = html;
}

// nameOfPatient.addEventListener('keyup',()=>{
//     console.log(nameOfPatient.value);
// })

function DocsLoad() {
  window.print();
  setInterval(() => {
    localStorage.clear("Patients");
    location.href = "index.html";
  }, 5000);
}
DocsLoad();
