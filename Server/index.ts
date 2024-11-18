import dotenv from 'dotenv'
let key = {
    srcDir :'../../template/sample',
    destDir:'../../template',
    jwtConfig:{
        expireDuration :process.env.JWT_EXPIRE_DURATION || '1h',
        secretekey: process.env.JWT_SECRETE_KEY
    }
}


export default key;