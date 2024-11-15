import VoucherList from '../components/VoucherList';
import { useVouchers } from '../contexts/VoucherContext';


function Home() {
  const { vouchers, buyVoucher } = useVouchers();
  return (
    <div>
      <h2>Buy a Voucher</h2>
      <VoucherList vouchers={vouchers} buyVoucher={buyVoucher} />
    </div>
  );
};

export default Home;