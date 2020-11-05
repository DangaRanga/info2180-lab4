// Ensure that the window loads before executing code
window.addEventListener('load', function(){
    let searchButton = document.getElementById('search');
    searchButton.addEventListener('click', loadPHP);
});


/**
 * 
 * @param {*} data 
 */
function displayHeroes(data){
    alert(`The heroes are \n ${data}`);
    return data;
}

/**
 * 
 */
async function fetchData(){
    const response = await fetch('superheroes.php');
    if(response.ok){
        return response.text();
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}   

/**
 * 
 * @param {*} event 
 */
async function loadPHP(event){
    event.preventDefault();
    try{
        const phpData = await fetchData();
        const heroes = await displayHeroes(phpData);
        }catch (error){
            console.log('There was an error: ' + error);
        }
    }   