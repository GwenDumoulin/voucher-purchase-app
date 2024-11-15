import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home';
import Admin from './pages/Admin';
import Header from './components/Header';
import { Voucher, Sale } from './types/voucher';
import './App.css'

function App() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);

  const addVoucher = (voucher: Voucher) => {
    setVouchers([...vouchers, voucher]);
  };

  const buyVoucher = (voucher: Voucher) => {
    setSales([...sales, { voucherId: voucher.id, date: new Date().toISOString(), used: false }]);
  };

  const onMarkSaleAsUsed = (saleIndex: number) => {
    setSales(sales.map((sale, index) =>
      index === saleIndex ? { ...sale, used: true } : sale
    ));
  };

  return (
    <Router>
      <div>
        <Header />
        <h1>Voucher Purchase</h1>
        <Routes>
          <Route path="/" element={<Home vouchers={vouchers} onBuy={buyVoucher} />} />
          <Route
            path="/admin"
            element={
              <Admin
                vouchers={vouchers}
                sales={sales}
                onAddVoucher={addVoucher}
                onMarkSaleAsUsed={onMarkSaleAsUsed}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
