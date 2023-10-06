//Requête  vers l'API pour récupérer tous les Pokémons
fetch("https://pokebuildapi.fr/api/v1/pokemon/")
    //Lien
    .then(res=> res.json())
    .then(allPokemon => {

        // All pokemon choisir tout les pokemons / Chargement de la liste (option du select)
        allPokemon.forEach(unPokemon => {
            const PokemonSelection = document.getElementById("pet-pokemon");
            let option = document.createElement("option");

            //Modifier la valeur de l'attribut (valeur nom de chaque du pokemon)
            option.setAttribute('value', unPokemon.name);
            option.textContent = unPokemon.name;
            PokemonSelection.appendChild(option);
        });
    })

//Ajout d'un écouteur sur le bouton
document.querySelector("button[type='submit']").addEventListener("click", (event) => {

    event.preventDefault();
    let valeurPokemon = document.querySelector("#pet-pokemon").value;
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + valeurPokemon)

        .then(response => response.json())
        .then(unPokemon => {

            // Afficher les éléments de l'API
            const paragrapheElement = document.getElementById("element");
            const paragrapheEvolution = document.getElementById("evolution");
            const pokemonImage = document.querySelector(".resultat > img");

            // Si il n'y a pas d'évolution on affiche "Aucune évolution"
            let evolution;
            if (unPokemon.apiEvolutions.length == 0) {
                evolution = "Aucune évolution";
            } else {
                evolution = unPokemon.apiEvolutions[0].name
            }
            
            // Mettre à jour les éléments HTML avec les informations du Pokémon
            document.querySelector("h2").textContent = "Voici les informations de " + valeurPokemon;
            paragrapheElement.textContent = "Element : " + unPokemon.apiTypes[0].name;
            paragrapheEvolution.textContent = "Evolution : " + evolution;
            pokemonImage.setAttribute("src", unPokemon.image);

            /*
                Méthode n° 2 :
                document.querySelector("h2").textContent = `Voici les informations de ${valeurPokemon}`;
                paragrapheElement.textContent = `Element : ${unPokemon.apiTypes[0].name}`;
                paragrapheEvolution.textContent = `Evolution : ${evolution}`;
                pokemonImage.setAttribute("src", unPokemon.image);
            */

            // rendre les changements visibles
            document.querySelector(".resultat").style.visibility = "visible";

            //document.querySelector("#details").addEventListener("click", () => {
                
            document.querySelector("#details").addEventListener("click", () => {

            // quand on declare une variable avec un nom, celui-ci apparait apres avec .append puis avec .toString
                let pokemon = new URLSearchParams();
                pokemon.append("Pokemon", unPokemon.name);
                location.href = "http://localhost/js/Pokemon/details.html?" + pokemon.toString();
            });
    })
});

