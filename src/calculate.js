class Calculate{

static calculate(nubmerOne, numberTwo, operation) {
        
    switch (operation) {
            case '+':
                return nubmerOne + numberTwo
            case '-':
                return nubmerOne - numberTwo

            case '*':
                return nubmerOne * numberTwo
            case '/':
                return nubmerOne / numberTwo

            default:
                throw "invalid operator"
        }
}
}

module.exports = Calculate