
var contenido = document.getElementById("contenido");
var contenido1 = document.getElementById("contenido1");
var select = document.getElementById("select");
var select1 = document.getElementById("select1");
async function selectP(){
    try{
        var res = await fetch("https://restcountries.com/v3.1/all");
        var dato = await res.json();
        i = 0
        
        console.log(dato[i].name.common)
        console.log(dato[i].region)
        console.log(dato[i].flags.svg)
        console.log(dato[i].capital[0])
        
        for (i= 0; i <= 250; i++){
            select.innerHTML += `
            <option value="${i}" >${dato[i].name.common}</option>
            `
            select1.innerHTML += `
            <option value="${i}" >${dato[i].name.common}</option>
            `
            i++;
        }
        
        

    }catch(err){
        console.log(err)

    }


}
async function pais(indice){
    try{
        var res = await fetch("https://restcountries.com/v3.1/all");
        var dato = await res.json();
        console.log(dato[indice].name.common)
        console.log(dato[indice].region)
        console.log(dato[indice].flags.svg)
        console.log(dato[indice].capital[0])
            contenido.innerHTML = `
        <div id="tarjeta" class="card">
            <div class="card-header">
                <img src="${dato[indice].flags.svg}"  alt="" width="270px" height="180px">
            </div>
            <div class="card-body">
                <h5 class="card-title">${dato[indice].name.common}</h5>
                <h5>Continente: ${dato[indice].region}</h5>
                <h5>Capital: ${dato[indice].capital[0]}</h5>
            </div>
        </div>
        `
        

    }catch(err){
        console.log(err)

    }
}
async function pais2(indice1){
    try{
        var res = await fetch("https://restcountries.com/v3.1/all");
        var dato = await res.json();
        console.log(dato[indice1].name.common)
        console.log(dato[indice1].region)
        console.log(dato[indice1].flags.svg)
        console.log(dato[indice1].capital[0])
            contenido1.innerHTML = `
        <div id="tarjeta" class="card">
            <div class="card-header">
                <img src="${dato[indice1].flags.svg}"  alt="" width="270px" height="180px">
            </div>
            <div class="card-body">
                <h5 class="card-title">${dato[indice1].name.common}</h5>
                <h5>Continente: ${dato[indice1].region}</h5>
                <h5>Capital: ${dato[indice1].capital[0]}</h5>
            </div>
        </div>
        `
        

    }catch(err){
        console.log(err)

    }
}
selectP()
function selectPais() {
    var cod = document.getElementById("select").value;
    var cod2 = document.getElementById("select1").value;
    pais(cod);
    pais2(cod2)
};