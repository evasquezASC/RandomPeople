let person;
function presentData() {
  const $name = document.getElementById("name");
  const $picture = document.getElementById("picture");
  const $email = document.getElementById("email");
  const $phone = document.getElementById("phone");
  $name.innerText = person.results[0].name.first;
  $picture.src = person.results[0].picture.large;
  $email.innerText = person.results[0].email;
  $phone.innerText = person.results[0].phone;
}
function getData() {
  fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => (person = data))
    .then(() => {
      presentData();
    });
}
setInterval(getData, 3000);