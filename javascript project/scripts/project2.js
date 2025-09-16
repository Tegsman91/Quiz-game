const amountEl = Number(document.getElementById('amount').value) || 0;
const termEl = Number(document.getElementById('term').value) || 0;
const annualRate = Number(document.getElementById('interest-rate').value) || 0;
const totalEl = document.getElementById('total');
const calculateBtn = document.getElementById('cal-btn');
const typeEl = document.querySelector('input[name="input 1"]:checked').value;
const monthlyEl = document.getElementById('monthly');

calculateBtn.addEventListener('click', calculate);

function formatCurrency(n){
  return '£' + Number(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2});
}

function calculate(){
  const months = Math.max(1, Math.round(termEl * 12));
  const rate = annualRate / 100 / 12;
  let monthly = 0;
  let total = 0;

  if(typeEl === 'interest'){
    monthly = amountEl * rate;
    total = monthly * months;
  }
  else if(rate === 0){
    monthly = amountEl / months;
  }
  else{
    monthly = (amountEl * rate) / (1, Math.pow(1 + rate, - months));
  }
  total = monthly * months;

  monthlyEl.textContent = formatCurrency(monthly);
  totalEl.textContent = formatCurrency(total);
}

calculate();


