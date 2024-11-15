export interface Voucher {
    id: string;
    image: string;
    description: string;
    price: number;
    used: boolean;
  }
  
  export interface Sale {
    voucherId: string;
    date: string;
    used: boolean;
  }