function calc(){
  const mealTot = parseInt(document.getElementById("total").value)
  const taxRate = parseInt(document.getElementById("rate").value)
  const tipNum = mealTot * (taxRate/100)
  document.getElementById('tip').innerHTML = tipNum.toFixed(2)
  document.getElementById('tax').innerHTML = mealTot * (.055)
  document.getElementById('final').innerHTML = mealTot + (mealTot * (taxRate/100)) + (mealTot * (.055))
}
