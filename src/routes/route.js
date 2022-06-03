const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { Router } = require('express');

const router = express.Router();

    let players = [
        
        {
             "name": "manish",
             "dob": "1/1/1995",
             "gender": "male",
             "city": "jalandhar",
             "sports": [
               "swimming" ]
                
        },
        {
            
            "name": "suresh",
            "dob": "1/1/1993",
            "gender": "male",
            "city": "pune",
            "sports": [
              "tennis" ]
               
        },
        {
            
            "name": "riya",
            "dob": "1/2/1994",
            "gender": "female",
            "city": "mumbai",
            "sports": [
              "cricket" ]
               
        }
    ]

router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});



module.exports = router;