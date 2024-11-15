import { useState } from 'react';
import { Voucher, Sale } from '../types/voucher';

export function useVoucherManagement() {
  const defaultVouchers: Voucher[] = [
    {
      id: '1',
      description: '50% Discount Voucher',
      price: 20,
      image: 'https://via.placeholder.com/150',
      used: false,
    },
    {
      id: '2',
      description: 'Free Shipping Voucher',
      price: 10,
      image: 'https://via.placeholder.com/150',
      used: false,
    },
    {
      id: '3',
      description: 'Buy One Get One Free',
      price: 15,
      image: 'https://via.placeholder.com/150',
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
