// Arreglo de colores
/* const colors = [
    "rgb(34, 153, 84)",
    "rgb(16, 40, 236)",
    "rgb(236, 16, 46)",
    "rgb(124, 89, 209)",
    "rgb(15, 221, 231)",
    "rgb(95, 106, 106)"
]; */
let colors = [];
// Declaramos variables contenedora de todos los cuadrados en el html
let cuadrados = document.querySelectorAll(".square");
// Color elegido por la máquina desde el arreglo de colores
let pickedColor;
// Color aleatorio mostrado en pantalla dentro del título
let colorDisplay = document.querySelector("#colorDisplay");

// donde se guarda el valor que presiona el usuario
let clickedColor;
// mensaje de avance del juego
let message = document.querySelector("#message");
// cambiar el color de fondo del título por el "correcto"
let h1 = document.querySelector("h1");
colors = generateRandomColors(6);
let reset = document.querySelector("#reset");
// botones easy y hard
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

// Aquí creamos cuadrados
for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    // al hacer click en un cuadrado, se ejecuta función
    cuadrados[i].addEventListener("click", function () {
        // se le asigna a la variable clickedColor el valor seleccionado por el usuario
        clickedColor = colors[i];

        // Compara picked y clicked color, ejecuta correcto o incorrecto 
        if (pickedColor === clickedColor) {
            //llamamos a la función changeColors
            changeColors(pickedColor);
            message.textContent = "¡Correcto!";
            h1.style.backgroundColor = clickedColor;
        } else {
            cuadrados[i].style.backgroundColor = "#232323";
            message.textContent = "Inténtalo nuevamente";
        }
    })
};

// función para cambiar los colores de todos los cuadrados por uno ganador
function changeColors(color) {
    for (let i = 0; i < cuadrados.length; i++) {
        // damos color de fondo a cada cuadrado desde el arreglo
        cuadrados[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var pickRandomColor = Math.floor(Math.random() * colors.length);
    // Color elegido por la máquina desde el arreglo de colores
    pickedColor = colors[pickRandomColor];
    return pickedColor;

};

// Para generar y devolver un color aleatorio.
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + ", " + g + ", " + b + ")");
};
// Generar 3 o 6 colores para cuadrados para easy o hard mode
function generateRandomColors(cantidadColores) {
    let newColors = [];
    for (let i = 0; i < cantidadColores; i++) {
        newColors.push(randomColor());

    }
    console.log(newColors);
    return newColors;
}

reset.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];

    }
    message.textContent = "";

})

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
})

easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
})


