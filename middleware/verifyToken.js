const jwt = require('jsonwebtoken');

verifyUserToken = (req, res, next) => {
    //let token = req.headers.token;
    const token = req.header('authorization');
    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
        req.user = decoded;
        next();
    }
    );
};

verifyFurnishiUserToken = (req, res, next) => {
    //let token = req.headers.token;
    const token = req.header('authorization');
    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
        req.furnishiUser = decoded;
        next();
    }
    );
};

const authJwt = {
    verifyUserToken: verifyUserToken,
    verifyFurnishiUserToken: verifyFurnishiUserToken
};
module.exports = authJwt;