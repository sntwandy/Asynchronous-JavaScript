// Require dependencies 'XMLHttpRequest'.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Create a Fn to fetch the data using 'XMLHttpRequest'.
const fetchData = urlApi => {
    return new Promise((resolve, reject) => {
        // Create 'XMLHttpRequest' instance = 'xhttp'.
        const xhttp = new XMLHttpRequest();
        // Create the petition to the API, with 'open', parameters: 'GET', urlAPI, true (activate the asynchronous, by default is 'true').
        xhttp.open('GET', urlApi, true);
        // Now, we check the response state.
        xhttp.onreadystatechange = (() => {
            // Check is the 'readyState' is = 4 (Petition to the API is completed).
            if(xhttp.readyState === 4){
                // This is a 'ternario if'.
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error: ', urlApi));
            }
        });
        // We use the Fn 'send'.
        xhttp.send();
    });
}

module.exports = fetchData;