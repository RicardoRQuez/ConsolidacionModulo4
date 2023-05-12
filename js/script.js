
const characterBlock = document.getElementById("character-block");

function getCharacterData(characterId, tarjeta) {
    const url = "https://swapi.dev/api/people/" + characterId + "/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let nombreStar = data.name;
            let estaturaStar = data.height;
            let pesoStar = data.mass;

            console.log(nombreStar, estaturaStar, pesoStar);

            let tituloNombre = document.getElementById(tarjeta.infoNombre);
            tituloNombre.innerText = nombreStar;

            let estatura = document.getElementById(tarjeta.infoEstatura);
            estatura.innerText = estaturaStar;

            let peso = document.getElementById(tarjeta.infoPeso);
            peso.innerText = pesoStar;
        });
}


const rangoUno = document.getElementById("seccion1-5");
const rangoDos = document.getElementById("seccion6-11");
const rangoTres = document.getElementById("seccion12-17");

rangoUno.addEventListener("mouseover", () => {

    const randomNum = this.generarNumero1(1, 5)

    const tarjeta = { infoNombre: "infoNombre-1-5", infoEstatura: "infoEstatura-1-5", infoPeso: "infoPeso-1-5" }

    getCharacterData(randomNum, tarjeta);

    var para = document.getElementById('tarjeta1-5')
    para.style.display = 'block';

});

rangoDos.addEventListener("mouseover", () => {
    const randomNum = this.generarNumero1(6, 11)

    const tarjeta = { infoNombre: "infoNombre-6-11", infoEstatura: "infoEstatura-6-11", infoPeso: "infoPeso-6-11" }

    getCharacterData(randomNum, tarjeta);

    var para = document.getElementById('tarjeta6-11')
    para.style.display = 'block';
});

rangoTres.addEventListener("mouseover", () => {
    const randomNum = this.generarNumero1(12, 16)

    console.log(randomNum)
    const tarjeta = { infoNombre: "infoNombre-12-17", infoEstatura: "infoEstatura-12-17", infoPeso: "infoPeso-12-17" }

    getCharacterData(randomNum, tarjeta); 

    var para = document.getElementById('tarjeta12-17')
    para.style.display = 'block';
});

function generarNumero1(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}