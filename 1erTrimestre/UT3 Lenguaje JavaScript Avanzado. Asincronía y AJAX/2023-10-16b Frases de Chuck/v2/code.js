document.addEventListener('DOMContentLoaded',setup);

function setup(_){
    const joke = getJoke();
    showJoke(joke);
}

function getJoke(){
    let url = 'https://api.chucknorris.io/jokes/random';
    /* AJAX Asynchonous JavaScript and XML */
    /*  
        CRUD            SQL         HTTP
        Create      =>  insert  <->  POST
        Retrieve    =>  select  <->  GET
        Update      =>  update  <->  PUT
        Delete      =>  delete  <->  DELETE
    */
    
    /* Fetch devuelve un objeto de la calse promise */
    /* Una promesa es una pieza de codigo que se reproducira en el futuro */
    /* En este caso, al llegar el codigo a la linea 22, pasa dierctamente a linea 31, es decir, recorre el resto de codigo antes de entrar en el fetchx */
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            let joke = data.value;
            traductionEngToSpa(joke);
        })
        .catch(alert);

    
}

function traductionEngToSpa(jokeInEnglish){
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${jokeInEnglish}`
    
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            let jokeInSpanish = data[0][0][0];
            showJoke(jokeInSpanish);
        })
        .catch(alert);
}

function showJoke(joke){
    console.log(joke);
    const nParragraph = document.getElementById('tParWord').textContent = joke;
}