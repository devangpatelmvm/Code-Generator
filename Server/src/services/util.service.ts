import jwt from 'jsonwebtoken';


class UtilService {
    static generateJwtToken = async (data: any, secretekey: any, expireDuration = '1h') => {

        return jwt.sign(data, secretekey, { expiresIn: expireDuration })
    }

    static verifyUserAccessToken = async (token: any, secretkey: any) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secretkey, (err: any, data: any) => {
                if (err) {
                    reject(err)
                }
                resolve(data);
            })
        })
    }
}

export default UtilService;