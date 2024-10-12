type Order= {
  id: string;
  user_id: string;
  recipient_address: string;
  recipient_phone_number: string;
  status_order: string;
  payment_methods: string;
  note: string;
  total_amount: number;
  create_date: Date;
  state: string;
}

type OrderDetail = {
  order_id: string;
  product_id: string;
  current_price: number;
  quantity: number;
  create_date: Date;
  end_date: Date;
  state: boolean;
}

export {type Order, type OrderDetail};  