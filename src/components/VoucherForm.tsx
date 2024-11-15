import { useState } from 'react';
import { Voucher } from '../types/voucher';

interface VoucherFormProps {
  onAddVoucher: (voucher: Voucher) => void;
}

function VoucherForm({ onAddVoucher } : VoucherFormProps) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState('');
  const [id] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVoucher: Voucher = {
      id: id || Math.random().toString(36).substr(2, 9),  
      description,
      price,
      image,
      used: false,
    };
    onAddVoucher(newVoucher);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Voucher Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Voucher</button>
    </form>
  );
};

export default VoucherForm;