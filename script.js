// inputs
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
// buttons
const addBtn = document.getElementById('add-btn')
const subtractBtn = document.getElementById('subtract-btn')
// paragraphs
const resultParagraph = document.getElementById('result')

function add(a, b) {
  return a + b;
}

function subtract(num1, num2) {
  return num1-num2;
}

// on click event handlers
// what do we do when the button is clicked
addBtn.onclick = function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);

  if(isNaN(val1)) {
    console.log(`there is an error in val1`)
    input1.className = "wrong";
  }
  if(isNaN(val2)) {
    console.log(`there is an error in val2`)
    input2.className = "wrong";
  }

  const result = add(val1, val2)
  console.log(result)
  resultParagraph.textContent = "Result is: " + result;
}

subtractBtn.onclick = function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const result = subtract(val1, val2)
  console.log(result)
  resultParagraph.textContent = "Result is: " + result;
}

