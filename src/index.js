module.exports = function reverse (n) {
    let positive = Math.abs(n),
        positiveString = positive.toString(),
        result = positiveString.split('').reverse().join('');

    if (result[0] == '0'){
        return (result.slice(1, result.length))
    } else return (result);
}
