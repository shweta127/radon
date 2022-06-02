const trim=function(){
    let nameTrim=" functionup "
    console.log(nameTrim.trim())
}

const lowerCase1=function(){
    let nameLowerCase1="SHWETA"
    console.log("ToLowerCase: "+ nameLowerCase1.toLowerCase())
}
const upperCase1=function(){
    let nameUpperCase="shweta"
    console.log("ToUpperCase: "+ nameUpperCase.toUpperCase())
}

module.exports.trim = trim
module.exports.lowerCase1 = lowerCase1
module.exports.upperCase1 = upperCase1