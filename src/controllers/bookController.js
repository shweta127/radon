
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

let createAuthor= async function (req, res){
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
let createBook= async function (req, res){
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

let getBooksbyChetanBhagat=async(req, res)=>{
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData =await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

let authorofBook=async(req, res)=>{
    let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let authorData =await AuthorModel.find({author_id:data.author_id}).select("author_Name")
    let price=data.prices
    res.send({msg:authorData,price})
}
let bookBetween50_100=async(req, res)=>{

}

module.exports. createAuthor=  createAuthor
module.exports.createBook =  createBook
module.exports. getBooksbyChetanBhagat=  getBooksbyChetanBhagat
module.exports. authorofBook= authorofBook



// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

