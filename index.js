function fetchData() {
    var search = document.querySelector('input[type="text"]').value.toLowerCase();
    var apiURL = `https://hp-api.onrender.com/api/characters`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            var filteredData = data.filter(character => character.name.split(' ')[0].toLowerCase() === search);
            if (filteredData.length > 0) {
                var character = filteredData[0];
                document.getElementById('img').innerHTML = `<img src="${character.image}" alt="Character Image" height="200px" width="200px" id="img">`;
                document.getElementById('name').innerHTML = `<h3>Name: ${character.name}</h3>`;
                document.getElementById('dateOfBirth').innerHTML = `<h5>Birthday: ${character.dateOfBirth}</h5>`;
                document.getElementById('house').innerHTML = `<h5>House: ${character.house}</h5>`;
                document.getElementById('patronus').innerHTML = `<h5>Patronus: ${character.patronus} </h5>`
                document.getElementById('ancestry').innerHTML = `<h5>Ancestry: ${character.ancestry} </h5>`;
                document.getElementById('species').innerHTML = `<h5>Species: ${character.species} </h5>`;
                document.getElementById('actor').innerHTML = `<h5>Actor: ${character.actor}</h5>`;
               
                document.getElementById('characterBox').style.display = 'block'; 
            } else {
               
                alert("Character not found!");
            }
        });
}

document.getElementById('enterBtn').addEventListener('click', fetchData);

// Allowing Enter key to trigger search
document.querySelector('input[type="text"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchData();
        document.querySelector('input[type="text"]').value = '';
        document.getElementById('searchBox').style.top = '1000px';
    }
});