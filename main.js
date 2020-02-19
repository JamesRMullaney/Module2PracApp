function calc(){
  const mealTot = parseInt(document.getElementById("total").value)
  const taxRate = parseInt(document.getElementById("rate").value)
  document.getElementById('tip').innerHTML = mealTot * (taxRate/100)
  document.getElementById('tip').innerHTML = mealTot * (5.5/100)
  document.getElementById('final').innerHTML = mealTot + (mealTot * (taxRate/100) + (mealTot * (5.5/100)))
}
