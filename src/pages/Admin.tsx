import VoucherForm from '../components/VoucherForm';
import VoucherList from '../components/VoucherList';
import SalesList from '../components/SalesList';
import { Voucher, Sale } from '../types/voucher';

type AdminPageProps = {
  vouchers: Voucher[];
  sales: Sale[];
  onAddVoucher: (voucher: Voucher) => void;
  onMarkAsUsed: (voucherId: string) => void;
};

function Admin({ vouchers, sales, onAddVoucher, onMarkAsUsed } : AdminPageProps) {
  return (
    <div>
      <h2>Admin Page</h2>
      <VoucherForm onAddVoucher={onAddVoucher} />
      <VoucherList vouchers={vouchers} onBuy={() => {}} onMarkAsUsed={onMarkAsUsed} />
      <h3>Sales</h3>
      <SalesList sales={sales} />
    </div>
  );
};

export default Admin;
