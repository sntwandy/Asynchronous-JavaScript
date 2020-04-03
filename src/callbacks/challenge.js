// Import dependencies 'XMLHttpRequest'.
const XMLHttpRequest = import('xmlhttprequest').XMLHttpRequest;

// Create a Fn to fetch the data using 'XMLHttpRequest'.
function fetchData(urlApi, callback){
    // Create 'XMLHttpRequest' instance = 'xhttp'.
    let xhttp = new XMLHttpRequest();
    // Create the petition to the API, with 'open', parameters: 'GET', urlAPI, true (activate the asynchronous, by default is 'true').
    xhttp.open('GET', urlApi, true);
    // Now, we check the response state.
    xhttp.onreadystatechange = (event) =>{
        // Check is the 'readyState' is = 4 (Petition to the API is completed).
        if(xhttp.readyState === 4){
            // Check is the status is = 200 (Petition fetch data was success!.)
            if(xhttp.status === 200){
                // We call our 'callback' it recive 'error', data (That is a JSON.parse(xhttp.response.Text)), in this case the 'error' is null, 'cause doesn't need it.
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // In the other case, we create the 'error' and call the 'callback' and recive the 'error' but not the data (null).
                const error = new Error(`Error: ${urlApi}`);
                return callback(error, null);
            }
        }
    }
    // We use the Fn 'send'.
    xhttp.send();
}