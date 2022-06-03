const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { Router } = require('express');

const router = express.Router();

router.get("/solution1", function (req, res) {
    var a = [1,2,3,5,6,7], count = a[a.length - 1];
    var missing = [];
    for ( var i = 1; i <= count; i++ ) {
        if (a.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    console.log(missing.toString());
    res.send('done')
    })
    //2
router.get("/solution2", function (req, res) {
    var a = [33, 34, 35, 37, 38], count = a[a.length - 1];
    var missing = [];
    for ( var i = 33; i <= count; i++ ) {
        if (a.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    console.log(missing.toString());
    res.send('done')
    })
    router.get('/movies', function(req, res){
        // console.log('The request objects is '+ JSON.stringify(req.params))
        // console.log('Movies name is '+req.params.moviesName)
        let movies=["‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’"]
        console.log(movies)
        res.send('done')
        
    })
    //2 & 3
router.get('/movies/:indexNumber', function(req, res){
    let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let movieIndex=req.params.indexNumber
    let finalMovie=""
    if(movieIndex<movies.length){
        finalMovie=movies[movieIndex];
    } else {
        finalMovie=("the movie with index no. doesnt exist")
    }
    console.log(movies.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movies name is '+req.params.moviesName)
    res.send(finalMovie)
})
router.get('/animals/:indexNumber', function(req,res){
    let animals=["cat","dog","lion","cheetah","bear","elephant"]
    let animalsIndex=req.params.indexNumber;
    let animalFinal=""
    if(animalsIndex<animals.length){
        animalFinal=animals[animalsIndex];
    }else{
        animalFinal=('the animal not present')
    }
    console.log(animals.length)
    console.log('the object requested is'+JSON.stringify(req.params))
    console.log('animal name is'+req.params.animalsNames)
    res.send(animalFinal)
})



module.exports = router;