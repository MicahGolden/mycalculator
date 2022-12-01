class Calculator {
  constructor
  (prevOperationText,currOperationText){ //turns the previous operation and current operation into an object.
    this.prevOperationText = prevOperationText
    this.currOperationText = currOperationText
    this.clear()
  }
  //Functions
  inputNumber(number) { //function that adds numbers to equation
    if(number === `.` && this.currOperation.includes(`.`)) return //If there is a dot, then DO NOT!
    this.currOperation = this.currOperation.toString() + number.toString() //stringifys the equation
  }
  whichOperation(operation){
    if (this.currOperation === '') return //if there is no entry, do not show
    this.operation = operation
    this.prevOperation = this.currOperation
    this.currOperation = ''
  }
  clear() { //clear function
    this.currOperation = '' 
    this.prevOperation = ''
    this.operation = undefined
  }
  compute(){
    let computation // computation is defined as whatever the operation between the prev and curr Operation are.
    const prev = parseFloat(this.prevOperation) //prev is the current previous number
    const curr = parseFloat(this.currOperation) //curr is the current operative number
    //if (isNaN(prev) || isNaN(curr)) return //if either is not a number, return
    switch (this.operation) {
      case '+':
          computation = prev + curr //add
          break
      case '-':
          computation = prev - curr //subtract
          break
      case '*':
          computation = prev * curr //multiply
          break
      case '/':
          computation = prev / curr //divide
          break
          case 'x²':
          computation = prev * prev //square
            break
      default:
        return
          
    }
    this.currOperation = computation // the current operation is the computation
    this.operation = undefined
    this.prevOperation = '' //empties the prev operation after done
  }
  updateDisplay(){ //updates display
    this.currOperationText.innerText = this.currOperation
    this.prevOperationText.innerText = this.prevOperation
  }
}



//selector variables
const numberButtons = document.querySelectorAll('[data-number]') 
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const prevOperationText = document.querySelector('[data-prev-Operation]')
const currOperationText = document.querySelector('[data-curr-Operation]')

const calculator = new Calculator(prevOperationText, currOperationText)

//Number Buttons Add their number to the equation
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.inputNumber(button.innerText) 
    calculator.updateDisplay()
  })
})
//The Operation Buttons Tell The Calculator what their symbol is.
operationButtons.forEach(button => {
  button.addEventListener('click', () => { //upon clicking it 
    calculator.whichOperation(button.innerText)
     //the click sends the symbol to the calculator.
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
