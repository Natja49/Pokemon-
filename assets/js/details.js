let pokemon = new URLSearchParams(window.location.search).get("Pokemon");

 

fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon}`)
.then(r => r.json())
.then(data => {
    document.getElementById("pointDeVie").textContent += data.stats.HP;
    document.getElementById("attaque").textContent += data.stats.attack;
    document.getElementById("defense").textContent += data.stats.defense;
    document.getElementById("attaqueSpeciale").textContent += data.stats.special_attack;
    document.getElementById("defenseSpeciale").textContent += data.stats.special_defense;
    document.getElementById("#vitesse").textContent += data.stats.speed;
});


    
   
