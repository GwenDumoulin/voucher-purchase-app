import VoucherForm from '../components/VoucherForm';
import SalesList from '../components/SalesList';
import { Voucher, Sale } from '../types/voucher';

type AdminPageProps = {
  vouchers: Voucher[];
  sales: Sale[];
  onAddVoucher: (voucher: Voucher) => void;
  onMarkSaleAsUsed: (saleIndex: number) => void; 
};

function Admin({ vouchers, sales, onAddVoucher, onMarkSaleAsUsed } : AdminPageProps) {
  return (
    <div>
      <h2>Admin Page</h2>
      <VoucherForm onAddVoucher={onAddVoucher} />
      <h3>Sales</h3>
      <SalesList sales={sales} vouchers={vouchers} onMarkSaleAsUsed={onMarkSaleAsUsed} />
    </div>
  );
};

export default Admin;
