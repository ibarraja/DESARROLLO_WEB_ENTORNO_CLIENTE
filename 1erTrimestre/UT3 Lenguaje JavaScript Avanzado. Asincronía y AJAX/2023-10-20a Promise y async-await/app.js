// fetch devuelve una promesa, then y catch

function getNumberSeven(){
    return 7;
}

console.clear();

console.log(getNumberSeven());

function getNumberSevenAsPromise(){
    const promise = new Promise(function(resolve,reject){
        // //calculo largo
        // setTimeout(function(){
            if (true) {
                resolve(7);
            } else {
                reject('There is a problem');
            }
        // },5000)

    });
    
    return promise;
}

getNumberSevenAsPromise()
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

console.log('🏁');


//Sugar syntax
async function getNumberAsAsync(){
    if (true)
        return 7;
    else
        throw new Error ('there is a problem');

}
// O lo que es lo mismo:
function getNumberSevenAsPromise(){
    const promise = new Promise(function(resolve,reject){
        resolve(7);
    })
    return promise;
};

const number = await getNumberAsAsync();
console.log(number);

    


