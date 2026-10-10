// Integer minor units keep the calculator exact to cents. No currency conversion.
export function cents(text, optional = false) {
  const raw = String(text).trim();
  if (raw === '') return optional ? 0 : null;
  if (!/^(?:\d+(?:[.,]\d{0,2})?|[.,]\d{1,2})$/.test(raw)) throw new Error('Use a positive amount or zero, with up to two decimal places and no thousands separators.');
  const [whole = '', fraction = ''] = raw.replace(',', '.').split('.');
  const amount = Number(whole || '0') * 100 + Number(fraction.padEnd(2, '0'));
  if (!Number.isSafeInteger(amount) || amount > 100000000) throw new Error('Enter an amount no greater than 1,000,000.');
  return amount;
}
export function calculate({sale, cost, postage, fees}) {
  const sold = cents(sale), paid = cents(cost), shipping = cents(postage, true), fee = cents(fees, true);
  if (sold === null || paid === null) return null;
  const deductions = paid + shipping + fee;
  return {profit: sold - deductions, deductions, breakEven: deductions, margin: sold > 0 ? (sold - deductions) / sold * 100 : null};
}
