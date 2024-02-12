
    function fetchData() {
        let search = document.querySelector('input[type="text"]').value.toLowerCase();
        let apiURL = `https://hp-api.onrender.com/api/characters`;

        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                let filteredData = data.filter(character => character.name.toLowerCase() === search);
                if (filteredData.length > 0) {
                    let character = filteredData[0];
                    document.getElementById('img').innerHTML = `<img src="${character.image}" alt="Character Image" height="100px" width="100px">`;
                    document.getElementById('name').innerHTML = `<h3>Name: ${character.name}</h3>`;
                    document.getElementById('dateOfBirth').innerHTML = `<p>Birthday: ${character.dateOfBirth}</p>`;
                    document.getElementById('house').innerHTML = `<h5>House: ${character.house}</h5>`;
                    document.getElementById('actor').innerHTML = `<h5>Actor: ${character.actor}</h5>`;

                    // Displaying elements
                    document.getElementById('name').style.display = 'block';
                    document.getElementById('age').style.display = 'block';
                    document.getElementById('house').style.display = 'block';
                    document.getElementById('actor').style.display = 'block';
                    document.getElementById('dateOfBirth').style.display = 'block';
                    document.getElementById('box').style.display = 'block';
                } else {
                    // If no matching character found
                    alert("Character not found!");
                }
            });
    }

    document.getElementById('enterBtn').addEventListener('click', fetchData);

    // Allowing Enter key to trigger search
    document.querySelector('input[type="text"]').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            fetchData();
            document.querySelector('input[type="text"]').value = '';
            document.getElementById('searchBox').style.top = '100px';
        }
    });









// function fetchData() {
//     let search = document.getElementById('search').value;
//     let apiURL = `https://hp-api.onrender.com/api/characters`;

//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);

//             document.getElementById('name').innerHTML = `<h3> Name: ${data.name}</h3>`;
//             document.getElementById('age').innerHTML = `<p> Age: ${data.age}</p>`;
//             document.getElementById('dateOfBirth').innerHTML = `<p> Birthday: ${data.dateOfBirth} </p>`;
//             document.getElementById('house').innerHTML = `<h5> House: ${data.house} </h5>`;
//             document.getElementById('actor').innerHTML = ` <h5>  Actor: ${data.actor} </h5>`;
          

//             // Skjuller elementene før man skriver sted
//             document.getElementById('name').style.display = 'block';
//             document.getElementById('age').style.display = 'block';
//             document.getElementById('house').style.display = 'block';
//             document.getElementById('actor').style.display = 'block';
//             document.getElementById('dateOfBirth').style.display ='block';
//         })
    
// }

// document.getElementById('enterBtn').addEventListener('click', fetchData);

// // Gjør at man kan bruke enter tasten på keyboard
// document.getElementById('search').addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         fetchData();
//     }
// });