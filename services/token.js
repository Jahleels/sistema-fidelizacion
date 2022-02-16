var jwt = require('jsonwebtoken');

module.exports = {
    encode: async(user) => {
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            password: user.password,
            roll: user.roll
        }, 
        'AlejandroRuttoUnHombreJustoYHonesto',
        {
            expiresIn: 86400
        });
        return token;
    }
}