import UtilService from "../services/util.service";
import config from '../../index'
class AuthMiddleware {
    static userAuthMiddleware = async (req: any, res: any, next: any) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) {
            const error = new Error('Unauthorized');
            //@ts-ignore
            error.status = 401;
            return next(error);
        }
        try {
            const tokenData = await UtilService.verifyUserAccessToken(token, config.jwtConfig.secretekey);
            req.user = tokenData;
            next();
        } catch (error) {
            return res.status(403).json({ status: false, token: 'JWT Expired' });
        }
    }
}

export default AuthMiddleware;