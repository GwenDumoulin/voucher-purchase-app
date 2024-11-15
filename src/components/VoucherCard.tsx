import { Voucher } from '../types/voucher';
import styles from './VoucherCard.module.css';

interface VoucherCardProps {
  voucher: Voucher;
  onBuy: (voucher: Voucher) => void;
}

function VoucherCard({ voucher, onBuy} : VoucherCardProps) {
  return (
    <div className={styles.card}>
      <img src={voucher.image} alt={voucher.description} className={styles.image} />
      <h3 className={styles.title}>{voucher.description}</h3>
      <p className={styles.price}>Price: ${voucher.price}</p>
      <button onClick={() => onBuy(voucher)} className={styles.button}>Buy</button>
    </div>
  );
}

export default VoucherCard;