function calc(){
  const mealTot = parseInt(document.getElementById("total").value)
  const taxRate = parseInt(document.getElementById("rate").value)
  document.getElementById('tip').innerHTML = mealTot * (taxRate/100)
}
