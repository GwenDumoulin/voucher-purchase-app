import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VoucherForm from './VoucherForm';
import '@testing-library/jest-dom';

describe('VoucherForm', () => {
  it('should render the form with inputs and a button', () => {
    render(<VoucherForm addVoucher={() => {}} />);

    expect(screen.getByPlaceholderText(/Voucher Description/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Price/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Image URL/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add a Voucher/i })).toBeInTheDocument();
  });

  it('should allow user to input values and submit the form', async () => {
    const addVoucherMock = jest.fn();

    render(<VoucherForm addVoucher={addVoucherMock} />);

    await userEvent.type(screen.getByPlaceholderText(/Voucher Description/i), 'Discount Voucher');
    await userEvent.type(screen.getByPlaceholderText(/Price/i), '50');
    await userEvent.type(screen.getByPlaceholderText(/Image URL/i), 'https://example.com/voucher.png');

    userEvent.click(screen.getByRole('button', { name: /Add a Voucher/i }));

    await waitFor(() => {
      expect(addVoucherMock).toHaveBeenCalledTimes(1);
      expect(addVoucherMock).toHaveBeenCalledWith({
        id: expect.any(String), 
        description: 'Discount Voucher',
        price: 50,
        image: 'https://example.com/voucher.png',
        used: false,
      });
    });

    expect((screen.getByPlaceholderText(/Voucher Description/i) as HTMLInputElement).value).toBe('');
    expect((screen.getByPlaceholderText(/Price/i) as HTMLInputElement).value).toBe('0');
    expect((screen.getByPlaceholderText(/Image URL/i) as HTMLInputElement).value).toBe('');
  });
});
