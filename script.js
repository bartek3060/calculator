const resultDiv = document.querySelector('.result')
const clearAllButton = document.querySelector('.clearAll')
const clearLastButton = document.querySelector('.clearOne')
const procenttButton = document.querySelector('.procent')
const divisionButton = document.querySelector('.division')
const sevenButton = document.getElementById('7')
const eightButton = document.getElementById('8')
const nineButton = document.getElementById('9')
const multiplyButton = document.querySelector('.multiply')
const fourButton = document.getElementById('4')
const fiveButton = document.getElementById('5')
const sixButton = document.getElementById('6')
const submissionButton = document.querySelector('.submission')
const oneButton = document.getElementById('1')
const twoButton = document.getElementById('2')
const threeButton = document.getElementById('3')
const additionButton = document.querySelector('.addition')
const moreButton = document.querySelector('.more')
const zeroButton = document.getElementById('0')
const pointerButton = document.querySelector('.pointer')
const equalButton = document.querySelector('.equal')
const allNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.operator')
const darkMode = document.querySelector('#darkMode')
darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('active')
    document.body.classList.toggle('active')
    resultDiv.classList.toggle('active')
    equalButton.classList.toggle('active')
})

let num1;
let num2 = ""
let result = 0
let valuesToCalculate = ""
let currectOperator = ''
allOperators.forEach((div) => {
    div.addEventListener('click', displayCurrentOperator)
})
allNumbers.forEach((div) => {
    div.addEventListener('click', displayCurrentValues)
})
clearAllButton.addEventListener('click', removeAll)
equalButton.addEventListener('click', makeCalculation)
procenttButton.addEventListener('click', procentFunction)
clearLastButton.addEventListener('click', clearLast)

function procentFunction() {


}

function displayCurrentOperator(e) {
    if (resultDiv.textContent == 0) {
        return
    } else {
        if (valuesToCalculate[valuesToCalculate.length - 1] == '+' || valuesToCalculate[valuesToCalculate.length - 1] == '-' || valuesToCalculate[valuesToCalculate.length - 1] == '/' || valuesToCalculate[valuesToCalculate.length - 1] == '*') {
            return
        } else {
            num1 = valuesToCalculate

            resultDiv.textContent += e.currentTarget.textContent
            currectOperator = e.currentTarget.id
            valuesToCalculate += e.currentTarget.id
            console.log(valuesToCalculate)
        }
    }
}

function displayCurrentValues(e) {
    if (resultDiv.textContent == 0) {
        resultDiv.textContent = e.currentTarget.id
        valuesToCalculate += e.currentTarget.id
    } else {
        resultDiv.textContent += e.currentTarget.id
        valuesToCalculate += e.currentTarget.id
    }
    if (valuesToCalculate.includes('+') || valuesToCalculate.includes('-') || valuesToCalculate.includes('/') || valuesToCalculate.includes('*')) {
        num2 += e.currentTarget.id
    }

}

function removeAll() {
    valuesToCalculate = ""
    resultDiv.textContent = '0'
    num1 = ""
    result = 0

}

function clearLast() {
    if (valuesToCalculate == result) {
        removeAll()
        return
    }

    if (valuesToCalculate.includes('+') || valuesToCalculate.includes('-') || valuesToCalculate.includes('/') || valuesToCalculate.includes('*')) {
        valuesToCalculate = valuesToCalculate.substr(0, valuesToCalculate.length - 1)
        num2 = num2.substr(0, num2.length - 1)
        resultDiv.textContent = valuesToCalculate

    } else
        valuesToCalculate = valuesToCalculate.substr(0, valuesToCalculate.length - 1)
    console.log(valuesToCalculate)
    resultDiv.textContent = valuesToCalculate

}

function makeCalculation() {
    if (num2 != Number(num2)) {
        return
    } else {


        const operation = currectOperator
        if (operation == '+') {
            if (result == 0) {
                result = Number(num1) + Number(num2)

                resultDiv.textContent = result
            } else {
                result = result + Number(num2)
                resultDiv.textContent = result
            }

        } else if (operation == '-') {
            if (result == 0) {
                result = Number(num1) - Number(num2)

                resultDiv.textContent = result
            } else {
                result = result - Number(num2)
                resultDiv.textContent = result
            }

        } else if (operation == '/') {
            if (num2 == 0) {
                alert("You can't divide by 0")
                return
            }
            if (result == 0) {
                result = Number(num1) / Number(num2)

                resultDiv.textContent = result
            } else {
                result = result / Number(num2)
                resultDiv.textContent = result
            }

        } else {
            if (num2 == 0) {
                alert("You can't multiply by 0")
                return
            }
            if (result == 0) {
                result = Number(num1) * Number(num2)

                resultDiv.textContent = result
            } else {
                result = result * Number(num2)
                resultDiv.textContent = result
            }

        }
        num2 = ""
        valuesToCalculate = result
    }
}