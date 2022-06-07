const BookModel= require("../models/userModel")

const createBook1= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

// Get All the Book Details ----------------------------------------
const getBookData1= async function (req, res) {
 
    let allBooks= await BookModel.find()
    
    res.send({msg: allBooks})
}

// Get BookNAme and AuthorNAme --------------------------------------
const bookList= async function (req, res) {
 
    let allBooks= await BookModel.find().select({bookName: 1, authorName:1, _id:0})
    
    res.send({msg: allBooks})
}

//Get Year ------------------------------------------------
const getBooksInYear= async function (req, res) {
    let year = req.query.year
    let allBooks= await BookModel.find({year}).select({bookName: 1, _id:0})
    
    res.send({msg: allBooks})
}

// Get Particular Books


// Get Books whose price is INR 100, INR 200, INR 500
const getXINRBooks= async function (req, res) {
   
    let allBooks= await BookModel.find({"price.indianPrice" :{$in: ["INR 100", "INR 200", "INR 500"]}}).select({bookName: 1, price: 1, _id:0})
    
    res.send({msg: allBooks})
}

// Get Random Book-------------------------------------------
const getRandomBooks = async function (req, res) {
        
    let allBooks= await BookModel.find({$or:[{"totalPages":{$gt:500}},{"stockAvailable":{$eq:true}}]}).select({bookName: 1, _id: 0})



    res.send({msg: allBooks})
}

module.exports.createBook1= createBook1

module.exports.getBookData1 = getBookData1

module.exports.bookList= bookList

module.exports.getBooksInYear=getBooksInYear

module.exports.getXINRBooks=getXINRBooks

module.exports.getRandomBooks =getRandomBooks 


