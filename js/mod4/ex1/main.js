var myPromise = function(age) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            if (age >= 18) {
                resolve(true);
            }
            reject(false);
        }, 2000);
    });
}

myPromise(90)
    .then(function(response) {
        return console.log("Maior que 18 anos");
    })
    .catch(function(error) {
        return console.log("Menor que 18 anos");
    })