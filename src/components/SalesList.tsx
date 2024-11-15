import { Sale, Voucher } from '../types/voucher';
import styles from './SalesList.module.css';

interface SalesListProps {
  sales: Sale[];
  vouchers: Voucher[];
  markSaleAsUsed: (saleIndex: number) => void; 
}

function SalesList({ sales, vouchers, markSaleAsUsed }: SalesListProps) {
  return (
    <div>
      <h2>Sales</h2>
      <ul className={styles.list}>
        {sales.map((sale, index) => {
          const voucher = vouchers.find(v => v.id === sale.voucherId);
          return (
            <li key={index} className={styles.listItem}>
              <p>
                <strong>{voucher?.description || 'Unknown Voucher'}</strong> purchased on {new Date(sale.date).toLocaleDateString()}
              </p>
              {sale.used ? (
                <span className={styles.used}>Used</span>
              ) : (
                <button
                  onClick={() => markSaleAsUsed(index)} 
                  className={styles.button}
                >
                  Mark as used
                </button>

              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SalesList;