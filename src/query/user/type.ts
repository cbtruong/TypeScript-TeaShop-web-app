type User ={
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  types_customer: string;
  role: string;
  status_active: boolean;
  address: string;
  phone: string;
  create_date: Date;
  end_date: Date;
  state: string;
  google_id: string;
  title: string;
}

type userVoucher = {
  user_id: string;
  voucher_id: string;
}

export {
  type User,
  type userVoucher,
}