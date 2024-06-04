const buttonDiv = document.getElementById(`buttons`)
// have an element to interact with
const multiplyBtn = document.createElement('button')

multiplyBtn.textContent = "multiply"

multiplyBtn.onclick = function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const result = multiply(val1, val2)
  console.log(result)
  resultParagraph.textContent = "Result is: " + result;
}



buttonDiv.appendChild(multiplyBtn)
// functionality of what the element should do

function multiply(num1, num2) {
  return num1*num2;
}