const trim=function(){
    let nameTrim=" functionup "
    console.log(nameTrim.trim())
}

const lowercase=function(){
    let nameLowerCase="SHWETA"
    console.log("ToLowerCase: "+ nameLowerCase.toLowerCase())
}
const upperCase=function(){
    let nameUpperCase="shweta"
    console.log("ToUpperCase: "+nameUpperCase.toUpperCase())
}

module.exports.trim = trim
module.exports.lowercase=lowercase
module.experts.uppercase=uppercase