var contenido = document.getElementById("contenido");
async function paises(){
    try{
        var res = await fetch("https://restcountries.com/v3.1/all");
        var dato = await res.json();
        
        for (i= 0; i <= 250; i++){
            console.log(dato[i].name.common)
            contenido.innerHTML += `
        <div id="tarjeta" class="card">
            <div  class="card-header">
                <img src="${dato[i].flags.svg}"  alt="" width="270px" height="180px">
            </div>
            <div class="card-body">
                <h5 class="card-title">${dato[i].name.common}</h5>
                <h5>Continente: ${dato[i].region}</h5>
                <h5>Capital: ${dato[i].capital[0]}</h5>
            </div>
        </div>
        `
        i++;
        }    

    }catch(err){
        console.log(err)

    }
}
paises()