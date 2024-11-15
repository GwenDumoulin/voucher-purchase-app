import { Voucher } from '../types/voucher';
import styles from './VoucherCard.module.css';

interface VoucherCardProps {
  voucher: Voucher;
  buyVoucher: (voucher: Voucher) => void;
}

function VoucherCard({ voucher, buyVoucher} : VoucherCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.divImg}><img src={voucher.image} alt={voucher.description} className={styles.image} /></div>
      <h3 className={styles.title}>{voucher.description}</h3>
      <p className={styles.price}>Price: ${voucher.price}</p>
      <button onClick={() => buyVoucher(voucher)} className={styles.button}>Buy</button>
    </div>
  );
}

export default VoucherCard;