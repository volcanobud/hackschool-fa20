import React from 'react';
import Navbar from '../Components/navbar/index';
import Type from '../Components/Type';
import './style.css';

const createPokemon = () => {
return (
<div>
<Navbar/>
<form className = "create-page">
    <div className = "pokemon-form">
        <h2>Create a Pokemon</h2>
        <div className = "form-row">
            <label for = "name">Name</label>
            <input id = "name" name = "name" required></input>
            <button>Generate Random Name</button>
        </div>
        <div className = "form-row">
            <label for = "desc">Description</label>
            <input id = "desc" required></input>
        </div>
        <div className = "form-row">
            <label for = "type1" name = "type1">Type 1</label>
            <Type id ="type1" />
            <label for = "type2" name = "type2">Type 2</label>
            <Type id ="type2" />
        </div>
        <div className = "form-row">
            <label for = "move1">Move 1</label>
            <input id = "move1" name = "move1" required></input>
            <label for="move1type">Type</label>
            <Type id = "move1type" />
            <label for="move1power">Power</label>
            <input type="number" id="move1power" name = "move1power" min="0" max="100" value = "0"></input>
        </div>
        <div class = "form-row">
            <label for = "move2">Move 2</label>
            <input id = "move2" name = "move2" required></input>
            <label for="move2type">Type</label>
            <Type id = "move2type" />           
            <label for="move1power">Power</label>
            <input type="number" id="move2power" name = "move2power" min="0" max="100" value = "0"></input>
        </div>
        <div className = "form-row">
            <label for = "move2">Move 3</label>
            <input id = "move2" name = "move3" required></input>
            <label for="move2type">Type</label>
            <Type id = "move3type" />          
            <label for="move1power">Power</label>
            <input type="number" id="move2power" name = "move3power" min="0" max="100" value = "0"></input>
        </div>
        <div className = "form-row">
            <label for = "move2">Move 3</label>
            <input id = "move2" name = "move3" required></input>
            <label for="move2type">Type</label>
            <Type id = "move4type" />          
            <label for="move1power">Power</label>
            <input type="number" id="move2power" name = "move3power" min="0" max="100" value = "0"></input>
        </div>
        <input type = "submit" value = "Submit"></input>
    </div>
</form>
</div>
)
}

export default createPokemon;

  
