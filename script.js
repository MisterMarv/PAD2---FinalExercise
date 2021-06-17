// 1° Questão

function someFun(value, callback) {
  callback(value.someProperty)

  return 1
}

// 2° Questão

function someFn(num) {
  const funFunction = (params) => {
    switch (params) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return funFunction
}

// 3° Questão

function calculatorNumbers(firstNum, secondNum) {
  return callback => callback(firstNum, secondNum)
}

// 4° Questão

//Por tratar-se de questão teórica, responderei em comentário. Neste caso seria exibido no console, na seguinte ordem: 4 1 5 1.

// 5° Questão

function mathTable(mathNum) {
  for (let numProcess = 1; numProcess <= 10; numProcess++) {
    console.log(`${mathNum} X ${numProcess} = ${mathNum * numProcess}`)
  }
}
