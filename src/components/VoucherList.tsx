import { Voucher } from '../types/voucher';
import VoucherCard from './VoucherCard';

interface VoucherListProps {
  vouchers: Voucher[];
  onBuy: (voucher: Voucher) => void;
  onMarkAsUsed: (voucherId: string) => void;
}

function VoucherList({ vouchers, onBuy, onMarkAsUsed } : VoucherListProps) {
  return (
    <div>
      {vouchers.map(voucher => (
        <VoucherCard
          key={voucher.id}
          voucher={voucher}
          onBuy={onBuy}
          onMarkAsUsed={onMarkAsUsed}
        />
      ))}
    </div>
  );
};

export default VoucherList;