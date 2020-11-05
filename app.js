window.addEventListener('load', function(){
    let searchButton = document.getElementById('search')
    searchButton.addEventListener('click', loadPHP);
});

function fetchData(){
    return fetch('superheroes.php')
    .then(response => {
        if (response.ok){
            return response.text()
        }else{
            console.log('not ok');
            return Promise.reject('that wasn\'t supposed to happen');
        }
    })
}   

function displayHeroes(data){
    alert(`The heroes are \n ${data}`);
    return data;
}

async function loadPHP(event){
    event.preventDefault();
    try{
        const phpData = await fetchData();
        const heroes = await displayHeroes(phpData);
        }catch (error){
            console.log('There was an error: ' + error);
        }
    }   