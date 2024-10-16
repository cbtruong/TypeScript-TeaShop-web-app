type Voucher = {
  id: string;
  name: string;
  type: string;
  discountPercent: number;
  discountValue: number;
  minCartValue: number;
  startDate: Date;
  endDate: Date;
};

export type { Voucher };
