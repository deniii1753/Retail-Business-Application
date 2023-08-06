const { getErrorMessage } = require('../utils/errorMapper.js');

module.exports = errorHandler = (error, req, res, next) => {

    const statusCode = error.status || 400;
    res.status(statusCode).json({ message: getErrorMessage(error), statusCode });

};