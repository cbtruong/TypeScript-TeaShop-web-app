type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  productImages: Array<string>;
};

type Category = {
  name: string;
  state: boolean;
};

type Voucher = {
  name: string;
  type: string;
  discount_percent: number;
  discount_value: number;
  min_cart_value: number;
  start_date: Date;
  end_date: Date;
};

export { type Product, type Category, type Voucher };
