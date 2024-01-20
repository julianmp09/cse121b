/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = "Julian Martinez";
const currentYear = new Date().getFullYear();
const profilePicture = "./images/julian-perfil.jpeg";


/* Step 3 - Element Variables */
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
const nameElement = document.querySelector("#name");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `${fullname}`);



/* Step 5 - Array */
const food = ["seafood","sushi", "pasta", "arepas", "tacos"];
foodElement.innerHTML = food;
let newFood = "chocolate";
food.push(newFood);
foodElement.innerHTML += `<br>${food}`;
food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;





