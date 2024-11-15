import { Voucher } from '../types/voucher';
import VoucherCard from './VoucherCard';
import styles from './VoucherList.module.css';

interface VoucherListProps {
  vouchers: Voucher[];
  onBuy: (voucher: Voucher) => void;
}

function VoucherList({ vouchers, onBuy}: VoucherListProps) {
  return (
    <div className={styles.list}>
      {vouchers.map(voucher => (
        <div key={voucher.id} className={styles.listItem}>
          <VoucherCard
            voucher={voucher}
            onBuy={onBuy}
          />
        </div>
      ))}
    </div>
  );
}

export default VoucherList;