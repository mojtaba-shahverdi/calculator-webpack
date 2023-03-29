class CalculatorLogic {
    static multiple = (x,y) => {
        return x*y
    }
    static divide = (x,y) => {
        return x/y
    }
    static minus = (x,y) => {
        return x-y
    }
    static plus = (x,y) => {
        return x+y
    }
    static handleOperation = (method,x,y) => {
        const result = CalculatorLogic[method](x,y)
        return parseFloat(result.toPrecision(12))
    }
}

export default CalculatorLogic