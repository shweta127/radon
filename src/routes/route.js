const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { Router } = require('express');

const router = express.Router();


//4
router.get("/sol4", function(req,res){
    let a= [ {
        id: 1, name: "The Shining"}, 
        { id: 2,name: "Incendies"}, 
        { id: 3, name: "Rang de Basanti"}, 
        {  id: 4,  name: "Finding Nemo"}];

        res.send(a)
    })


//5
router.get('/films/:indexNumber', function(req, res){
    let films=[{
        "id": 1,
        "name": "The Shining"
    },{
        "id": 2,
        "name": "Incedies"
    },{
        "id":3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Nemo"
    }]

    let movieIndex=req.params.indexNumber;
    let finalMovie="";
    if(movieIndex<films.length){
        finalMovie=films[movieIndex];
    } else {
        finalMovie=("the movie with index no. doesnt exist")
    }
    console.log(films.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movies name is '+req.params.moviesName)
    res.send(finalMovie)
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