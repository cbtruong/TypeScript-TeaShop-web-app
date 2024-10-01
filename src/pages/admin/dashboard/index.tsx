import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, TimePicker } from 'antd';
import { useState } from 'react';

const { Option } = Select;

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

interface Product {
  name: string;
  sku: string;
  price: number;
  sold: number;
}

const products: Product[] = [
  {
    name: 'Tea Name',
    sku: 'A0B1C066',
    price: 396.84,
    sold: 6690,
  },
  {
    name: 'Tea Name',
    sku: 'A0B1C066',
    price: 396.84,
    sold: 6690,
  },
  {
    name: 'Tea Name',
    sku: 'A0B1C066',
    price: 396.84,
    sold: 6690,
  },
  {
    name: 'Tea Name',
    sku: 'A0B1C066',
    price: 396.84,
    sold: 6690,
  },
];

const DashBoard = () => {
  const [type, setType] = useState<PickerType>('time');
  return (
    <div className="w-full space-y-5">
      <div className="mt-10 flex flex-row justify-between">
        <div className="w-[370px] h-32 rounded-[10px] border flex flex-col justify-center items-center">
          <h3 className="text-h3 font-semiBold">Total Orders</h3>
          <h1 className="text-h1 font-semibold">0</h1>
        </div>
        <div className="w-[370px] h-32 rounded-[10px] border flex flex-col justify-center items-center">
          <h3 className="text-h3 font-semiBold">Total Member</h3>
          <h1 className="text-h1 font-semibold">0</h1>
        </div>
        <div className="w-[370px] h-32 rounded-[10px] border flex flex-col justify-center items-center">
          <h3 className="text-h3 font-semiBold">Total Visitors</h3>
          <h1 className="text-h1 font-semibold">0</h1>
        </div>
        <div className="w-[370px] h-32 rounded-[10px] border flex flex-col justify-center items-center">
          <h3 className="text-h3 font-semiBold">Revenue</h3>
          <h1 className="text-h1 font-semibold">0</h1>
        </div>
      </div>
      <div className="border rounded-[10px] p-5 space-y-5">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-h3">Finance</h3>
          <div className="flex flex-row items-center space-x-5">
            <p>Sort by</p>
            <PickerWithType type={type} onChange={(value) => console.log(value)} />
            <Select value={type} onChange={setType}>
              <Option value="time">Time</Option>
              <Option value="date">Date</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
              <Option value="quarter">Quarter</Option>
              <Option value="year">Year</Option>
            </Select>
          </div>
        </div>
        <div className='flex flex-row items-center space-x-10'>
          <div className='flex flex-col space-y-2'>
            <p className='text-normal font-bold'>Income</p>
            <div className='flex flex-row items-center space-x-5'>
              <p className='text-h3 font-bold'>$75,124.00</p>
              <div className='border rounded-[10px] p-1 flex flex-row items-center text-green-500 space-x-2'>
                <p className='text-normal'>0.00%</p>
                <i className='bx bxs-up-arrow text-normal font-bold'></i>
              </div>
            </div>
          </div>
          <div className='mt-5 border h-14'></div>
          <div className='flex flex-col space-y-2'>
            <p className='text-normal font-bold'>Expenses</p>
            <div className='flex flex-row items-center space-x-5'>
              <p className='text-h3 font-bold'>$75,124.00</p>
              <div className='border rounded-[10px] p-1 flex flex-row items-center text-green-500 space-x-2'>
                <p className='text-normal'>0.00%</p>
                <i className='bx bxs-up-arrow text-normal font-bold'></i>
              </div>
            </div>
          </div>
          <div className='mt-5 border h-14'></div>
          <div className='flex flex-col space-y-2'>
            <p className='text-normal font-bold'>Balance</p>
            <div className='flex flex-row items-center space-x-5'>
              <p className='text-h3 font-bold'>$75,124.00</p>
              <div className='border rounded-[10px] p-1 flex flex-row items-center text-red-500 space-x-2'>
                <p className='text-normal'>0.00%</p>
                <i className='bx bxs-down-arrow text-normal font-bold'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-60 border'>Chart</div>
      </div>
      <div className='flex flex-row justify-between space-x-10'>
        <div className='w-2/6 border rounded-[10px] px-5 py-2 space-y-5'>
          <p className='text-h3 font-bold'>Recent Order</p>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row space-x-10'>
              <img src='https://via.placeholder.com/50' alt='product' className='w-16 h-14 rounded-[10px]' />
              <div className='flex flex-col justify-between'>
                <p className='text-normal font-bold'>Tea Name</p>
                <p className='text-small text-gray'>1 second ago</p>
              </div>
            </div>
            <p className='text-normal text-blue-500 font-bold'>$13.00</p>
          </div>
        </div>
        <div className='w-4/6 px-5 py-2'>
          <div className='flex flex-row justify-between'>
            <p className='text-h3 font-bold'>Top Products</p>
            <button className='text-normal text-blue-500 font-bold'>View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-gray-500"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-gray-500"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-gray-500"
                  >
                    Sold
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-gray-500"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-gray-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src='https://via.placeholder.com/50' alt='product' className='w-16 h-14 rounded-[10px]' />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {product.sku}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {product.sold}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      ${(product.price * product.sold).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-gray-900 hover:text-gray-700">
                        •••
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;