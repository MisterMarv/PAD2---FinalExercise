// Primeira Questão

function someFun(value, callback) {
  callback(value.someProperty)

  return 1
}

// Segunda Questão

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

// Terceira Questão

function calculator(firstNum, secondNum) {
  return callback => callback(firstNum, secondNum)
}

// Quarta Questão

//Neste caso seria exibido no console, na seguinte ordem: 4 1 5 1.

// Quinta Questão

function mathTable(mathNum) {
  for (let numProcess = 1; numProcess <= 10; numProcess++) {
    console.log(`${mathNum} X ${numProcess} = ${mathNum * numProcess}`)
  }
}
