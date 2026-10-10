import {calculate} from './money.mjs';
const form = document.querySelector('#calculator');
const fields = ['sale','cost','postage','fees'];
const inputs = Object.fromEntries(fields.map(name => [name, document.querySelector('#'+name)]));
const currency = document.querySelector('#currency');
const profit = document.querySelector('#profit');
const error = document.querySelector('#error');
const money = n => new Intl.NumberFormat(navigator.language || 'en', {style:'currency', currency:currency.value}).format(n / 100);
function update() {
  fields.forEach(name => inputs[name].removeAttribute('aria-invalid'));
  error.textContent = '';
  let result;
  try {result = calculate(Object.fromEntries(fields.map(name=>[name,inputs[name].value])));}
  catch (e) {error.textContent = e.message; result = null;}
  profit.className = 'profit';
  profit.textContent = result ? money(result.profit) : '—';
  document.querySelector('#result-label').textContent = result ? (result.profit < 0 ? 'Loss on this sale' : result.profit === 0 ? 'Break-even sale' : 'Profit on this sale') : 'Your item profit';
  document.querySelector('#result-help').textContent = result ? 'After the item cost, selling postage and fees you entered.' : 'Enter the sale price and item cost to see your result.';
  for (const name of ['deductions','breakEven']) document.querySelector('#'+name).textContent = result ? money(result[name]) : '—';
  document.querySelector('#margin').textContent = result && result.margin !== null ? new Intl.NumberFormat(navigator.language || 'en',{maximumFractionDigits:1}).format(result.margin)+'%' : '—';
  if (result) profit.classList.add(result.profit < 0 ? 'negative' : 'positive');
}
form.addEventListener('input', update);
form.addEventListener('change', update);
document.querySelector('#example').addEventListener('click',()=>{for(const [name,value] of Object.entries({sale:'30',cost:'12',postage:'3.50',fees:'1.50'})) inputs[name].value=value; update();});
document.querySelector('#clear').addEventListener('click',()=>{for(const name of fields) inputs[name].value='';update();inputs.sale.focus();});
for(const button of form.querySelectorAll('button')) button.disabled=false;
update();
