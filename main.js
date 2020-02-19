function calc(){
  const mealTot = parseInt(document.getElementById("total").value)
  const taxRate = parseInt(document.getElementById("rate").value)
  const tipNum = mealTot * (taxRate/100)
  const taxNum = mealTot * (.055)
  const finalNum = mealTot + (mealTot * (taxRate/100)) + (mealTot * (.055))
  document.getElementById('tip').innerHTML = tipNum.toFixed(2)
  document.getElementById('tax').innerHTML = taxNum.toFixed(2)
  document.getElementById('final').innerHTML = finalNum.toFixed(2)
}
