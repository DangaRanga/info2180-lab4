// Ensure that the window loads before executing code
window.addEventListener('load', function(){
    let searchButton = document.getElementById('search');
    searchButton.addEventListener('click', loadPHP);
});

/**
 * 
 * @param {*} heroData 
 * @param {*} targetDiv 
 */
function displayHeroData(heroData, targetDiv){
    // Clear innerHTML if data is already there
    if(targetDiv.innerHTML !== ''){
        targetDiv.innerHTML = '';
    }
    if(typeof(heroData) !== 'string'){
        let nameHeader = document.createElement('h2');
        let name = document.createTextNode(heroData.name);
        nameHeader.appendChild(name);
        targetDiv.appendChild(nameHeader);
        let aliasHeader = document.createElement('h3');
        let alias = document.createTextNode(`A.K.A ${heroData.alias}`);
        aliasHeader.appendChild(alias);
        targetDiv.appendChild(aliasHeader);
        let biographyArea = document.createElement('p');
        let biography = document.createTextNode(heroData.biography);
        biographyArea.appendChild(biography);
        targetDiv.appendChild(biographyArea);
    }else{
        targetDiv.innerHTML = heroData;
    }
}

/**
 * 
 * @param {*} data 
 */
function displayHeroes(data){
    result = document.getElementById('result');
    if(typeof(data) === 'string'){
        result.innerHTML = data;
    }else{
        console.log(data);
        displayHeroData(data, result);
    }
}


/**
 * 
 */
async function fetchData(formData){
    if(formData !== ''){
        const response = await fetch('superheroes.php',{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
        const myJSON = await response.json();
        return myJSON;
    }else{
        const response = await fetch('superheroes.php');
        if(response.ok){
            return response.text();
        }else{
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
    }
}   

/**
 * 
 * @param {*} event 
 */
async function loadPHP(event){
    event.preventDefault();
    let form = document.getElementById('superhero');
    try{
        const phpData = await fetchData(form.value);
        const heroes =  displayHeroes(phpData);
        }catch (error){
            console.log('There was an error: ' + error);
        }
    }   