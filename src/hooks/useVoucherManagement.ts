import { useState } from 'react';
import { Voucher, Sale } from '../types/voucher';

export function useVoucherManagement() {
  const defaultVouchers: Voucher[] = [
    {
      id: '1',
      description: '50% Discount Voucher',
      price: 20,
      image: 'https://placehold.co/200',
      used: false,
    },
    {
      id: '2',
      description: 'Get a Free Pumpkin',
      price: 15,
      image: 'http://localhost:5173/pumpkin.jpg',
      used: false,
    },
    {
      id: '3',
      description: 'Free Shipping Voucher',
      price: 10,
      image: 'https://placehold.co/200',
      used: false,
    },
    
  ];

  const [vouchers, setVouchers] = useState<Voucher[]>(defaultVouchers);
  const [sales, setSales] = useState<Sale[]>([]);

  const addVoucher = (voucher: Voucher) => {
    setVouchers([...vouchers, voucher]);
  };
  const buyVoucher = (voucher: Voucher) => {
    setSales([
      ...sales,
      { voucherId: voucher.id, date: new Date().toISOString(), used: false },
    ]);
  };

  const markSaleAsUsed = (saleIndex: number) => {
    setSales(
      sales.map((sale, index) =>
        index === saleIndex ? { ...sale, used: true } : sale
      )
    );
  };

  return {
    vouchers,
    sales,
    addVoucher,
    buyVoucher,
    markSaleAsUsed,
  };
}
