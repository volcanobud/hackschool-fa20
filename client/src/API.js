import axios from 'axios';
const serverURL = "http://localhost:5000/api";
const API = {
    getPokemon: function(){
        return axios.get('${serverURL}/pokemon');


    },
    
    createPokemon: function(pokemon){
        return axios.post('${serverURL}/pokemon', pokemon);
    
    }


}
export default API;
