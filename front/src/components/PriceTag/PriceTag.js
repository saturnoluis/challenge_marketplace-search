export default function PriceTag({ currency, amount, decimals }) {
  const price = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals
  }).format(amount);
  
  return (
    <data className='PriceTag' value={amount}>
      {price}
    </data>
  );
}