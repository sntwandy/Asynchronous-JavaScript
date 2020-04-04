const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (api) => {
    try{
        const data = await fetchData(api);
        const character = await fetchData(`${api}${data.results[0].id}`);
        const origin = await fetchData(`${character.origin.url}`);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    }catch(error){
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');