import { Voucher } from '../types/voucher';

interface VoucherCardProps {
  voucher: Voucher;
  onBuy: (voucher: Voucher) => void;
  onMarkAsUsed: (voucherId: string) => void;
}

function VoucherCard({ voucher, onBuy, onMarkAsUsed } : VoucherCardProps) {
  return (
    <div>
      <img src={voucher.image} alt={voucher.description} width="100" />
      <h3>{voucher.description}</h3>
      <p>Price: ${voucher.price}</p>
      <button onClick={() => onBuy(voucher)}>Buy</button>
      {!voucher.used && <button onClick={() => onMarkAsUsed(voucher.id)}>Mark as used</button>}
    </div>
  );
};

export default VoucherCard;