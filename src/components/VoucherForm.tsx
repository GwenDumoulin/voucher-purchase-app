import { useState } from 'react';
import { Voucher } from '../types/voucher';
import styles from './VoucherForm.module.css';

interface VoucherFormProps {
  addVoucher: (voucher: Voucher) => void;
}

function VoucherForm({ addVoucher }: VoucherFormProps) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVoucher: Voucher = {
      id: Math.random().toString(36).substr(2, 9),
      description,
      price,
      image,
      used: false,
    };
    addVoucher(newVoucher);
    setDescription('');
    setPrice(0);
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Voucher Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add a Voucher</button>
    </form>
  );
}

export default VoucherForm;