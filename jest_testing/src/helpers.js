//the function we are testing
//exports allows us to export the function

exports.sum2 = function (a, b) {
    return a + b;
}

exports.sumMore = function (...args) {
    return args.reduce((acc, e) => acc + e)
}