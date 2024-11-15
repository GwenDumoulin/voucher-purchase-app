import { useState } from 'react'
import VoucherForm from './components/VoucherForm';
import VoucherList from './components/VoucherList';
import SalesList from './components/SalesList'
import { Voucher, Sale } from './types/voucher';
import './App.css'

function App() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);

  const addVoucher = (voucher: Voucher) => {
    setVouchers([...vouchers, voucher]);
  };

  const buyVoucher = (voucher: Voucher) => {
    setSales([...sales, { voucherId: voucher.id, date: new Date().toISOString() }]);
  };

  const markAsUsed = (voucherId: string) => {
    setVouchers(vouchers.map(v => v.id === voucherId ? { ...v, used: true } : v));
  };

  return (
    <div>
      <h1>Voucher Purchase</h1>
      <VoucherForm onAddVoucher={addVoucher} />
      <VoucherList vouchers={vouchers} onBuy={buyVoucher} onMarkAsUsed={markAsUsed} />
      <SalesList sales={sales} />
    </div>
  )
}

export default App
