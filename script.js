class Calculator {
  constructor(prevOperationText,currOperationText){ //turns the previous operation and current operation into an object.
    this.prevOperationText = prevOperationText
    this.currOperationText = currOperationText
    this.clear()
  }
  
  appendNumber(number) { //function that adds numbers to equation
    this.currOperation = this.currOperation.toString() + number.toString() //stringifys the equation
  }
  chooseOperation(operation){
    if (this.currOperation === '') return //if there is no entry, do not show
    this.operation = operation
    this.prevOperation = this.currOperation
    this.currOperation = ''
  }
  
  clear() {
    this.currOperation = ''
    this.prevOperation = ''
    this.operation = undefined
  }
  compute(){
    let computation // computation is defined as whatever the operation between the prev and curr Operation are.
    const prev = parseFloat(this.prevOperation)
    const curr = parseFloat(this.currOperation)
    if (isNaN(prev) || isNaN(curr)) return
    switch (this.operation) {
      case '+':
          computation = prev + curr
          break
      case '-':
          computation = prev - curr
          break
      case '*':
          computation = prev * curr
          break
      case '/':
          computation = prev / curr
          break
          case '^2':
          computation = prev * prev //have to input 0 for it to work
            break
      default:
        return
          
    }
    this.currOperation = computation
    this.operation = undefined
    this.prevOperation = ''
  }
  updateDisplay(){
    this.currOperationText.innerText = this.currOperation
    this.prevOperationText.innerText = this.prevOperation
  }
}



const numberButtons = document.querySelectorAll('[data-number]') //selects ALL elements with the tag data-number and stores it as a variable
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const prevOperationText = document.querySelector('[data-prev-Operation]')
const currOperationText = document.querySelector('[data-curr-Operation]')

const calculator = new Calculator(prevOperationText, currOperationText)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText) 
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => { //upon clicking it 
    calculator.chooseOperation(button.innerText) //the operation is = the number on the button
    calculator.updateDisplay() // update the calculator
  })
})

equalsButton.addEventListener('click', button => { //upon clicking it 
  calculator.compute() //computate the equation
  calculator.updateDisplay()
})

clearButton.addEventListener('click', button => { //upon clicking it 
  calculator.clear() //clear the data stored by the calc
  calculator.updateDisplay() 
})