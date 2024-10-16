import { Voucher } from "../../../query/voucher/type";
import { TableColumnsType, Button } from "antd";
import { Link } from 'react-router-dom';
import moment from "moment";

const columns = (
  showModalEdit: (isOpen: boolean, data: Voucher) => void,
  showDeleteConfirm: (_id: string) => void
): TableColumnsType<Voucher> => [
    {
        title: "Image",
        dataIndex: "images",
        align: "center",
        render: (value) => {
          return (
            <img
              src={value[0]}
              alt="activities"
              className="object-center h-8 w-8"
            />
          );
        },
      },
      {
        title: "Name",
        dataIndex: "name",
        filters: [],
        filterMode: "tree",
        filterSearch: true,
        align: "center",
        onFilter: (value, record) => record.name.startsWith(value as string),
        render(value, record) {
          return (
            <Link to={`/activities/${record.id}`} className="underline">
              {value}
            </Link>
          );
        },
      },
  {
    title: "Type",
    dataIndex: "type",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Discount Percent",
    dataIndex: "discountPercent",
    align: "center",
    render: (value) => <p>{value}%</p>,
  },
  {
    title: "Discount Value",
    dataIndex: "discountValue",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Min Cart Value",
    dataIndex: "minCartValue",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    align: "center",
    render: (value) => <p>{moment(value).format('YYYY-MM-DD')}</p>,
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    align: "center",
    render: (value) => <p>{moment(value).format('YYYY-MM-DD')}</p>,
  },
  {
    title: "",
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
            Sửa
          </Button>
          <Button
            onClick={() => {
              showDeleteConfirm(record.id);
            }}
          >
            Xóa
          </Button>
        </div>
      );
    },
  },
];

export default columns;
