/* LESSON 3 - Programming Tasks */

/* Profile Object  */

/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Julian Martinez",
    photo: {
        src: "./images/julian-perfil.jpeg",
        alt: "Julian-perfil"
    },
    favoriteFoods: [
        "Sushi",
        "Seafood",
        "pasta",
        "arepas",
        "tacos"
    ],
    hobbies: [
        "Listen to music",
        "Play in the Nintendo Switch",
        "Walk with my wife"
    ],
    placesLived: [],
    
};

myProfile.placesLived.push(
    {
        place: "Buenos Aires, BA, Argentina",
        length:"Present"
    },
    {
        place: "Cordoba, CBA, Argentina",
        length:"1.5 year"
    },
    {
        place: "La rioja, LR, Argentina",
        length:"6 months"
    },
    {
        place: "Puerto Ordaz, POZ, Venezuela",
        length:"19 years"
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hooby => {
    let li = document.createElement("li");
    li.textContent = hooby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").append(dt,dd);
}); 

