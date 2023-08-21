class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge(x, y) {
    if (x.age > y.age) {
      return `${x.firstName} è più vecchio di ${y.firstName}`;
    } else {
      return `${y.firstName} è più vecchio di ${x.firstName}`;
    }
  }
}

const max = new User("Massimo", "Mauro", 28, "Torino");
const stefania = new User("Stefania", "Mauro", 47, "Torino");
// console.log(User.compareAge(max, stefania));

class Pet {
  constructor(petName, petOwner, species, breed) {
    this.petName = petName;
    this.petOwner = petOwner;
    this.species = species;
    this.breed = breed;
  }
  static hasSameOwner(x, y) {
    return x.petOwner === y.petOwner;
  }
}

const pets = [];

const submit = document.getElementById("addPet");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const petName = document.getElementById("pet-name").value;
  const petOwner = document.getElementById("pet-owner").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  pets.push(new Pet(petName, petOwner, species, breed));
  //clear input
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  //   console.log(pets);
});
