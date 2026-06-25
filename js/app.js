document.addEventListener('DOMContentLoaded', () => {
    cargarPersonajes();
})

function cargarPersonajes() {
    const listaPersonajes = document.getElementById('listaPersonajes');

    fetch('https://rickandmortyapi.com/api/character')
    .then(respuesta => respuesta.json())
    .then(datos => {
        listaPersonajes.innerHTML = '';

        datos.results.forEach(personaje => {
            const tarjetaPersonaje = document.createElement('div');
            tarjetaPersonaje.classList.add('card');
            tarjetaPersonaje.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <div>
                <h3>${personaje.name}</h3>
                <p>Status: ${personaje.status}</p>
                <p>Species: ${personaje.species}</p>
                <p>Gender: ${personaje.gender}</p>
                <p>Origin: ${personaje.origin.name}</p>
            <div>
            `;
            listaPersonajes.appendChild(tarjetaPersonaje);
        })
        console.log(datos);
    });
}