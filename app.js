window.addEventListener('load', function(){
    let searchButton = document.getElementById('search')
    searchButton.addEventListener('click', loadPHP);
});

function loadPHP(event){
    event.preventDefault();
    const phpData = fetch('superheroes.php')
    .then(response => {
        if (response.ok){
            return response.text()
        }else{
            console.log('not ok');
            return Promise.reject('that wasn\'t supposed to happen')
        }
    }).then(data =>{
        let text = document.getElementById('data');
        alert(`The heroes are \n ${data}`);
    }).catch(error => console.log('There was an error: ' + error));
    console.log(phpData)

}