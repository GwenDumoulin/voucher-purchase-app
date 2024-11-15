import { Voucher } from '../types/voucher';
import VoucherCard from './VoucherCard';
import styles from './VoucherList.module.css';

interface VoucherListProps {
  vouchers: Voucher[];
  buyVoucher: (voucher: Voucher) => void;
}

function VoucherList({ vouchers, buyVoucher}: VoucherListProps) {
  return (
    <div className={styles.list}>
      {vouchers.map(voucher => (
        <div key={voucher.id} className={styles.listItem}>
          <VoucherCard
            voucher={voucher}
            buyVoucher={buyVoucher}
          />
        </div>
      ))}
    </div>
  );
}

export default VoucherList;