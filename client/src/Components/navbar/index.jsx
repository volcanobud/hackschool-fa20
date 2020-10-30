import React from 'react';
import './style.css';

let navbar = () => {
    return( <div id="navbar">
    <div className="title">
        <h1>Pokemon Generator</h1>
    </div>
    <div className="nav-buttons">
        <a href="./createPokemon.html">Create New Pokemon</a>
        <a href="./viewPokemon.html">View All Pokemon</a>
    </div>
</div>)
}

export default navbar;