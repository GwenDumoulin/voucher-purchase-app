import VoucherForm from '../components/VoucherForm';
import SalesList from '../components/SalesList';
import { useVouchers } from '../contexts/VoucherContext';


function Admin() {
  const { vouchers, sales, addVoucher, markSaleAsUsed } = useVouchers();
  return (
    <div>
      <h2>Admin Page</h2>
      <VoucherForm addVoucher={addVoucher} />
      <SalesList sales={sales} vouchers={vouchers} markSaleAsUsed={markSaleAsUsed} />
    </div>
  );
};

export default Admin;
