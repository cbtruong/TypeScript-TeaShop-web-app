import { Order } from "../../../query/order/type"; // Adjust the import path based on your file structure
import { TableColumnsType, Button } from "antd";
import { Link } from 'react-router-dom';

const columns = (
  showModalEdit: (isOpen: boolean, data: Order) => void,
  showDeleteConfirm: (id: string) => void
): TableColumnsType<Order> => [
  {
    title: "Order ID",
    dataIndex: "id",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "User ID",
    dataIndex: "user_id",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Recipient Address",
    dataIndex: "recipient_address",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Phone Number",
    dataIndex: "recipient_phone_number",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Status",
    dataIndex: "status_order",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Payment Method",
    dataIndex: "payment_methods",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Total Amount",
    dataIndex: "total_amount",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Create Date",
    dataIndex: "create_date",
    align: "center",
    render: (value) => <p>{new Date(value).toLocaleString()}</p>, // Format the date as needed
  },
  {
    title: "Action",
    dataIndex: "action",
    align: "center",
    render(_, record) {
      return (
        <div className="flex flex-row justify-center space-x-3">
          <Button
            onClick={() => {
              showModalEdit(true, record);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              showDeleteConfirm(record.id);
            }}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

export default columns;
