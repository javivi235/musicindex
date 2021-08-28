
import Config from '../config/config.json'

function getAuthor(){

    return Config.about.author

}

function getPhone(){

    return Config.about.cellphone

}
    
function getMail(){
    
    return Config.about.mail

}

function getLocation(){
    
    return Config.about.location

}

export {getAuthor, getPhone, getMail, getLocation}


