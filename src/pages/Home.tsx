import VoucherList from '../components/VoucherList';
import { Voucher } from '../types/voucher';

type HomePageProps = {
  vouchers: Voucher[];
  onBuy: (voucher: Voucher) => void;
};

function Home({ vouchers, onBuy } : HomePageProps) {
  return (
    <div>
      <h2>Buy a Voucher</h2>
      <VoucherList vouchers={vouchers} onBuy={onBuy} />
    </div>
  );
};

export default Home;