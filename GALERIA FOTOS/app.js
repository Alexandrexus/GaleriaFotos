const mainZone = document.querySelector(".main_zone");
const viajesNav = document.querySelector("#viajes_nav");
const animalesNav = document.querySelector("#animales_nav");
const parquesNav = document.querySelector("#parques_nav");

// viajesNav.addEventListener("click",render(baseFotografiasAnimales))


let baseFotografiasAnimales = [];
let baseFotografiasViajes = [];
let baseFotografiasParques = [];

//Base de Fotos Animales
baseFotografiasAnimales.push({
    nombre: "oso kchero",
    imagen: "./oso kchero.jpg",
    descripcion: "esta es una descripcion del oso kchero",
}
)

//Base de Fotos Viajes
baseFotografiasViajes.push({
    nombre: "oso kchero",
    imagen: "./cancun.jpg",
    descripcion: "esta es una descripcion del oso kchero",
}
)

//Base de Fotos Parques
baseFotografiasParques.push({
    nombre: "oso kchero",
    imagen: "./xcaret.jpg",
    descripcion: "esta es una descripcion del oso kchero",
}
)


{/* <figure class="card_container">
    <p class="card_tittle">un titulo</p>
    <img class="card_image" src="./oso kchero.jpg" alt="una imagen">
    <p class="card_description">Una descripcion</p>
</figure> */}

function renderAnimals (arr) {
for(elemento of arr){
    //sections
    const sectionAnimales = document.createElement("section");
    sectionAnimales.classList.add("section_cards","section_cards_animales","inactive");   //animales

    //figure
    const cardContainer = document.createElement("figure");
    cardContainer.classList.add("card_container");

    //titulo <p></p>
    const cardTittle = document.createElement("p");
    cardTittle.classList.add("card_tittle");
    cardTittle.textContent = elemento.nombre;

    //img 
    const cardImage = document.createElement("img");
    cardImage.classList.add("card_image");
    cardImage.setAttribute("src",elemento.imagen);


    //descripcion <p></p>
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card_description")
    cardDescription.textContent = (elemento.descripcion);

    //anidacion de etiquetas animales
    cardContainer.append(cardTittle,cardImage,cardDescription);
    sectionAnimales.appendChild(cardContainer);
    mainZone.appendChild(sectionAnimales)
}}


function renderViajes (arr) {
    for(elemento of arr){
        //sections

        const sectionViajes = document.createElement("section");
        sectionViajes.classList.add("section_cards","section_cards_viajes","inactive")   //viajes

        //figure
        const cardContainer = document.createElement("figure");
        cardContainer.classList.add("card_container");
    
        //titulo <p></p>
        const cardTittle = document.createElement("p");
        cardTittle.classList.add("card_tittle");
        cardTittle.textContent = elemento.nombre;
    
        //img 
        const cardImage = document.createElement("img");
        cardImage.classList.add("card_image");
        cardImage.setAttribute("src",elemento.imagen);
    
    
        //descripcion <p></p>
        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card_description")
        cardDescription.textContent = (elemento.descripcion);
    
        //anidacion de etiquetas animales
        cardContainer.append(cardTittle,cardImage,cardDescription);
        sectionViajes.appendChild(cardContainer);
        mainZone.appendChild(sectionViajes)
    }}
    

    function renderParques (arr) {
        for(elemento of arr){
            //sections      
            const sectionParques = document.createElement("section");
            sectionParques.classList.add("section_cards","section_cards_parques","inactive")   //parques
        
            //figure
            const cardContainer = document.createElement("figure");
            cardContainer.classList.add("card_container");
        
            //titulo <p></p>
            const cardTittle = document.createElement("p");
            cardTittle.classList.add("card_tittle");
            cardTittle.textContent = elemento.nombre;
        
            //img 
            const cardImage = document.createElement("img");
            cardImage.classList.add("card_image");
            cardImage.setAttribute("src",elemento.imagen);
        
        
            //descripcion <p></p>
            const cardDescription = document.createElement("p");
            cardDescription.classList.add("card_description")
            cardDescription.textContent = (elemento.descripcion);
        
            //anidacion de etiquetas animales
            cardContainer.append(cardTittle,cardImage,cardDescription);
            sectionParques.appendChild(cardContainer);
            mainZone.appendChild(sectionParques)
        }}
        



renderViajes(baseFotografiasViajes)
renderAnimals(baseFotografiasAnimales)
renderParques(baseFotografiasParques)

// function showBase(){
//     if(sectionAnimales.classList.contain("inactive") && sectionParques.classList.contain("inactive")){
//         sectionViajes.classList.remove("inactive");

//     }else if(sectionViajes.classList.contain("inactive") && sectionParques.classList.contain("inactive")){
//         sectionAnimales.classList.remove("inactive");

//     }else if(sectionViajes.classList.contain("inactive") && sectionParques.classList.contain("inactive")){
//         sectionAnimales.classList.remove("inactive");}

// }

function showAnimales(){
    if(sectionAnimales.classList.contain("inactive"))
    sectionAnimales.classList.remove("inactive")
    sectionParques.classList.add("inactive");
    sectionViajes.classList.add("inactive");
}

viajesNav.addEventListener("click",showAnimales)