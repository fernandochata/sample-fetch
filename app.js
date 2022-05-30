/**
 * * https://rickandmortyapi.com/documentation/
 * 
 * name	    string	        The name of the character.
 * status	string	        The status of the character ('Alive', 'Dead' or 'unknown').
 * species	string	        The species of the character.
 * gender	string	        The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
 * image	string (url)	Link to the character's image. All images are 300x300px
 * 
 * TODO: fix the logo
 */

window.onload = changeCharacter();

async function changeCharacter() {
    
    document.getElementById("character").innerHTML = "<h1>Loading...</h1>";
    
    const numberOfCharacters =
    await fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((data) => {
            return data.info.count;
        })

    const id =  Math.floor(Math.random() * numberOfCharacters + 1);
      
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
            return `
            <h1>${data.name}</h1>
            <p>Specie: ${data.species}</p>
            <p>Gender: ${data.gender}</p>
            <p>Status: ${data.status}</p>
            <img class="avatar" src="${data.image}" alt="${data.name}">
            `
        })
        .catch((err) => console.error(err));

    document.getElementById("character").innerHTML = response;
}

