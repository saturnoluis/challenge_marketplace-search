export default function PriceTag({ className = '', currency = 'ARS', amount, decimals }) {
  const price = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals
  }).format(amount);
  
  return (
    <data className={className} value={amount}>
      {price}
    </data>
  );
}