import { render, screen, fireEvent } from '@testing-library/react';
import VoucherCard from './VoucherCard';
import { Voucher } from '../types/voucher';
import '@testing-library/jest-dom';

describe('VoucherCard', () => {
  const voucher: Voucher = {
    id: '1',
    description: 'Discount Voucher',
    price: 50,
    image: 'https://example.com/voucher.png',
    used: false,
  };

  it('should render the voucher card correctly', () => {
    render(<VoucherCard voucher={voucher} buyVoucher={() => {}} />);

    // Check image
    const image = screen.getByAltText('Discount Voucher');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', voucher.image);

    // Check title and price
    expect(screen.getByText('Discount Voucher')).toBeInTheDocument();
    expect(screen.getByText(/Price: \$/)).toBeInTheDocument();

    // Check Button
    expect(screen.getByRole('button', { name: /Buy/i })).toBeInTheDocument();
  });

  it('should call buyVoucher when "Buy" button is clicked', () => {
    const buyVoucherMock = jest.fn();

    render(<VoucherCard voucher={voucher} buyVoucher={buyVoucherMock} />);

    // Fake click on Button
    fireEvent.click(screen.getByRole('button', { name: /Buy/i }));

    // Check 'buyVoucher' function 
    expect(buyVoucherMock).toHaveBeenCalledTimes(1);
    expect(buyVoucherMock).toHaveBeenCalledWith(voucher);
  });
});
