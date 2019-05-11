document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a Ajax e imprimir resultados
function cargarNombres(e){
e.preventDefault();

//Leer las variables
const origen = document.getElementById('origen');
const origenSeleccionado = origen.options[origen.selectedIndex].value;

const genero = document.getElementById('genero');
const generoSeleccionado = genero.options[genero.selectedIndex].value;

const cantidad = document.getElementById('numero').value;

let url = '';
url += 'https://uinames.com/api/?';

//Si hay origen agregarlo a la URL
if(origenSeleccionado !== ''){
    url += `region=${origenSeleccionado}&`;
}
//Si hay un genero, agregarlo a la URL
if(generoSeleccionado !== ''){
    url += `gender=${generoSeleccionado}&`;
}
//Si hay una cantidad, agregarlo a la URL
if(cantidad !== ''){
    url += `amount=${cantidad}&`;
}

//Crear Fetch
fetch(url)
.then(res => res.json())
.then(data => {
    let html = `<h2>Nombres Generados</h2>`;
    html += `<ul class="lista">`;
    data.forEach(nombre => {
        html += `
        <li>${nombre.name}</li>
        `;
    })
    html += `</ul>`;
    document.querySelector('#resultado').innerHTML = html;
})
.catch(error => console.log(error))
//Con funciones convencionales
/*
.then(function(res){
    return res.json();
})
.then(function(data){
    let html = `<h2>Nombres Generados</h2>`;
    html += `<ul class="lista">`;
    data.forEach(function(nombre) {
        html += `
        <li>${nombre.name}</li>
        `;
    })
    html += `</ul>`;
    document.querySelector('#resultado').innerHTML = html;
})
.catch(function(error){
    console.log(error);
})
----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
//Conectar con AJAX

//Iniciar XMLHTTPRequest
const xhr = new XMLHttpRequest();
//Abrimos la conexion
xhr.open('GET', url, true);
//Datos e impresion del template
xhr.onload = function() {
    if(this.status === 200){
        const nombres = JSON.parse(this.responseText);
        //Generar Template
        let htmlNombres = '<h2>Nombres Generados</h2>';

        htmlNombres += '<ul class="lista">';
        nombres.forEach(function(nombre){
            htmlNombres += `
            <li>${nombre.name}        
            `;
        })
        
        htmlNombres += '</ul>'
        document.getElementById('resultado').innerHTML = htmlNombres;
    }
}
*/
}

