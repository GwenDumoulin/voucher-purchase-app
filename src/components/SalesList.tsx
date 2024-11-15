import { Sale } from '../types/voucher';

interface SalesListProps {
  sales: Sale[];
}

function SalesList({ sales } : SalesListProps) {
  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>Voucher {sale.voucherId} purchased on {sale.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;