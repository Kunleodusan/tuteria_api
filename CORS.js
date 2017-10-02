/**
 * Created by kunle on 10/2/17.
 */
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
}