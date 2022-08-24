let img;
let img2;
let img3;
let img4;
let checkbox;
let botonizquierdo;
let botonderecho;

let slider;
function preload() {
    img4 = loadImage(
        "https://image.shutterstock.com/image-illustration/3d-rendering-x-chromosomes-isolated-260nw-1370220329.jpg"
    );
    img3 = loadImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Oy4U1dVNeZb7CAl4qVVzvJb7L4-i2oxO2Ky612vWY_Stj7AXTAStcNzK92Q0FUswu1A&usqp=CAU"
    );
    img2 = loadImage(
        "https://image.shutterstock.com/image-vector/nucleosome-structure-basic-repeating-unit-260nw-2103228377.jpg"
    );
    img = loadImage(
        "https://media.istockphoto.com/photos/blue-chromosome-dna-and-gradually-glowing-flicker-light-matter-when-picture-id1297146235?k=20&m=1297146235&s=612x612&w=0&h=8U25giWNwomC3yh_4cfWA4qu8NqEtfIDUjXjPdxDSRA="
    );
}
function setup() {
    createCanvas(850, 600);
    background(255);
    slider = createSlider(0, 400);
    slider.position(200, 450);
    slider.style("width", "415px");
    fill(255);
    checkbox = createCheckbox("Información", false);
    checkbox.position(50, 210);
    botonizquierdo = createButton("↤");
    botonizquierdo.position(160, 60);
    botonizquierdo.mousePressed();
    botonderecho = createButton("↦");
    botonderecho.position(620, 60);
    botonderecho.mousePressed();
}
function draw() {
    let val = slider.value();
    let val2 = slider.value();
    if (val > 0 && val < 100) {
        val2 = map(val, 0, 100, 3, 30);
        background(255);
        fill(0);
        textSize(30);
        text("Primer Nivel: Molécula de ADN", 195, 80);
        fill(0);
        textSize(20);
        text("Escala: " + Math.ceil(val2) + " nano metros", 305, 500);
        image(img, 200, 100, 420, 345);
        if (checkbox.checked()) {
            textSize(15);
            text(
                "La información en el ADN se \n almacena como un código \n compuesto por cuatro bases \n químicas, adenina (A), \n guanina (G), citosina (C) y \n timina (T). El ADN humano \n consta de unos 3 mil millones \n de bases, y más del 99 por \n ciento de esas bases son \n iguales en todas las personas.",
                630,
                190
            );
        }
    } else if (val > 100 && val < 200) {
        val2 = map(val, 100, 200, 30, 300);
        background(255);
        image(img2, 200, 100, 420, 345);
        fill(0);
        textSize(30);
        text("Segundo Nivel: Nucleosoma", 210, 80);
        textSize(20);
        text("escala: " + Math.ceil(val2) + " nano metros", 305, 500);
        if (checkbox.checked()) {
            textSize(15);
            text(
                "Un nucleosoma único consta \n de alrededor de 150 pares de \n bases de secuencia de ADN \n enrollado alrededor de un  \n centro de proteínas llamadas \n histonas. Al formar los \n cromosomas, los nucleosomas \n se pliegan repetidamente sobre \n sí mismos para estrechar y \n empaquetar el ADN  \n condensado.",
                630,
                190
            );
        }
    } else if (val > 200 && val < 300) {
        val2 = map(val, 200, 300, 300, 700);
        background(255);
        image(img3, 200, 100, 420, 345);
        fill(0);
        textSize(30);
        text("Tercer Nivel: Solenoide", 250, 80);
        textSize(20);
        text("escala: " + Math.ceil(val2) + " nano metros", 305, 500);
        if (checkbox.checked()) {
            textSize(15);
            text(
                "En biología, el solenoide se \n refiere a la estructura \n cuaternaria de los niveles de \n estructuras del ADN que \n consiste en el enrollamiento de \n un conjunto de nucleosomas. \n El solenoide, a su vez, también \n se enrosca formando la \n cromatina: la sustancia del \n núcleo celular.",
                630,
                190
            );
        }
    } else if (val > 300 && val < 400) {
        val2 = map(val, 300, 400, 700, 1400);
        background(255);
        image(img4, 200, 100, 420, 345);
        fill(0);
        textSize(30);
        text("Cuarto Nivel: Cromosoma", 235, 80);
        textSize(20);
        text("escala: " + Math.ceil(val2) + " nano metros", 305, 500);
        if (checkbox.checked()) {
            textSize(15);
            text(
                "Los cromosomas son \n estructuras que se encuentran \n en el centro (núcleo) de las \n células que transportan \n fragmentos largos de ADN. \n El ADN es el material que \n contiene los genes y es el pilar \n fundamental del cuerpo humano. \n Los cromosomas también \n contienen proteínas que ayudan \n al ADN a existir en la forma \n apropiada.",
                630,
                190
            );
        }
    }
}
