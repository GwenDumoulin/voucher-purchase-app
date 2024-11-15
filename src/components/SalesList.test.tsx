import { render, screen, fireEvent } from '@testing-library/react';
import SalesList from './SalesList';
import { Sale, Voucher } from '../types/voucher';
import '@testing-library/jest-dom';

// Mock 
const vouchers: Voucher[] = [
  {
    id: '1',
    description: 'Discount Voucher',
    price: 10,
    image: 'https://example.com/voucher1.jpg',
    used: false,
  },
  {
    id: '2',
    description: 'Summer Sale Voucher',
    price: 20,
    image: 'https://example.com/voucher2.jpg',
    used: false,
  },
];

const sales: Sale[] = [
  {
    voucherId: '1',
    date: '2024-11-15',
    used: false,
  },
  {
    voucherId: '2',
    date: '2024-11-14',
    used: true,
  },
];

// Mock function
const markSaleAsUsedMock = jest.fn();

test('should render SalesList with multiple sales', () => {
  render(
    <SalesList sales={sales} vouchers={vouchers} markSaleAsUsed={markSaleAsUsedMock} />
  );

  // Check each sales
  sales.forEach((sale, index) => {
    // Check voucher description
    const voucherDescription = screen.getByText(vouchers[index].description);
    expect(voucherDescription).toBeInTheDocument();

    // Check date
    const dateRegex = new RegExp(new Date(sale.date).toLocaleDateString().split('/').join('\\/'));
    const saleDate = screen.getByText(dateRegex);
    expect(saleDate).toBeInTheDocument();

    // Check if used
    if (sale.used) {
      const usedElements = screen.getAllByText(/Used/i);
      expect(usedElements.length).toBeGreaterThan(0); 
    } else {
      const button = screen.getByRole('button', { name: /Mark as used/i });
      expect(button).toBeInTheDocument();
    }
  });
});

test('should call markSaleAsUsed when the "Mark as used" button is clicked', () => {
  render(
    <SalesList sales={sales} vouchers={vouchers} markSaleAsUsed={markSaleAsUsedMock} />
  );

  // Check "Mark as used" 
  const button = screen.getByRole('button', { name: /Mark as used/i });
  fireEvent.click(button);

  // Check markSaleAsUsed function
  expect(markSaleAsUsedMock).toHaveBeenCalledWith(0);
});
