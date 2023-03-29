import CalculatorLogic from "./calculatorLogic"
class CalculatorView {
    #operator = null
    #y = 0
    #x = 0
    #screen = 0 

    pressNumber = (number) => {
        if (this.#operator) {
            this.#y = Number(`${this.#y}${number}`)
            this.#screen = this.#y
            this.handleUpdateScreen()
            return
        }
        this.#x = Number(`${this.#x}${number}`)
        this.#screen = this.#x
        this.handleUpdateScreen()
    }

    handleUpdateScreen = () => {
        document.getElementById('screen').innerHTML = this.#screen
    }

    pressDot = () => {
        if (this.#operator) {
            this.#y = `${this.#y}.`
            return
        }
        this.#x = `${this.#x}.`
    }

    pressOperator = (newOperator) => {
        this.#operator = newOperator
        document.getElementById(newOperator).classList.add('active')
    }

    handleClearOperatorButtons = () => {
        document.querySelectorAll('.operator').forEach((node) => {
            node.classList.remove('active')
        })
    }

    handleClear = () => {
        this.#x = 0;
        this.#operator = null
        this.#screen = this.#x
        this.handleUpdateScreen()
        this.handleClearOperatorButtons();
    }

    handleEval = () => {
        let result = CalculatorLogic.handleOperation(this.#operator, this.#x, this.#y)
        this.#x = result;
        this.#y = 0;
        this.#screen = this.#x
        this.handleUpdateScreen()
        this.handleClearOperatorButtons()
        this.#operator = null
    }

}

export default CalculatorView