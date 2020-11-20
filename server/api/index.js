const express = require('express');
const router = express.Router();
const Pokemon = require('./models/pokemon.js');

router.get('/pokemon', (req,res) => {
    const pokemon = await Pokemon.find().exec();
    res.status(200).json({pokemon});

});
router.post('/pokemon', (req, res) => {
    const { pokemon } = req.body;
    const { name, description, type1, type2, image, moves } = pokemon
    if ((!name || !description || !type1 || !image || !moves) || moves.length > 4) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const newPokemon = await Pokemon.create(pokemon);
        res.status(200).json({ pokemon: newPokemon });
    }
});

// router.get('/pokemon', (req,res) => {
//     const pokemon = [
//         {
//             name: 'Pikachu',
//             description: 'the pika pokemon',
//             type1: 'Electric',
//             type2: null,
//             image: 'google.com',
//             moves: [
//                 {
//                     name: 'Scratch',
//                     type: 'Normal',
//                     power: 30,
//                 }
//             ]
//         },
//         {
//             name: 'Snorlax',
//             description: 'the chad pokemon',
//             type1: 'Normal',
//             type2: null,
//             image: 'google.com',
//             moves: [
//                 {
//                     name: 'Surf',
//                     type: 'Water',
//                     power: 90,
//                 }
//             ]
//         }
//     ]

//     res.status(200).json({pokemon});
// });
// router.post('/pokemon', (req, res) => {
//     const {pokemon} = req.body;
//     //set all vars of pokemon to reqpective body
//    // const {name, description, }
//     res.status=(200).json({pokemon});
// });


module.exports = router;