// Through the normal Function to export 
function add(a, b) {
    return a + b;
}
function subTract(a, b) {
    return a - b;
}

module.exports = {
    addFn :add,
    subFn: subTract
}

// Through arrow Function to export 

// exports.add = (a, b) => a + b;
// exports.sub =(a , b) =>  a-b;
