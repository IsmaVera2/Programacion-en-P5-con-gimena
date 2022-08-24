let botonizquierdo;
let botonderecho;
let cantidad = prompt("Cuantas veces se va a repetir?");
let dogma = ["A", "U", "G", "C"];
let cadenarandom = [];
let numaleatorio = 0;
let tablaBoton = 0;
function setup() {
    createCanvas(600, 600);
    background(200);
    ellipse(130, height / 2, 150, 150);
    ellipse(300, height / 2, 150, 150);
    ellipse(470, height / 2, 150, 150);
    botonizquierdo = createButton("<--");
    botonizquierdo.position(0, height / 2);
    botonizquierdo.mousePressed(izquierdo);
    botonderecho = createButton("-->");
    botonderecho.position(width - 34, height / 2);
    botonderecho.mousePressed(derecho);
}
function izquierdo() {
    if (tablaBoton > 3) {
        tablaBoton = tablaBoton - 3;
    }
}
function derecho() {
    tablaBoton = tablaBoton + 3;
}

function draw() {
    numeroaleatorio = random(0, 3);
    if (cantidad % 3 != 0) {
        cantidad = prompt(
            "La cantidad de veces que se tiene que repetir tiene que ser multiplo de 3, porfavor vuelva a colocar un valor"
        );
    }
    for (let i = 0; i < cantidad; i++) {
        cadenarandom.push(dogma[Math.ceil(numeroaleatorio)]);
        numeroaleatorio = random(-1, 3);
    }

    background(200);

    ellipse(130, height / 2, 150, 150);
    ellipse(300, height / 2, 150, 150);
    ellipse(470, height / 2, 150, 150);
    textSize(60);
    text(cadenarandom[0 + tablaBoton], 110, height / 2 + 20);
    text(cadenarandom[1 + tablaBoton], 280, height / 2 + 20);
    text(cadenarandom[2 + tablaBoton], 450, height / 2 + 20);
}
