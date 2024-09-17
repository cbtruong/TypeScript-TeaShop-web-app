import { Product } from "../../../query/product/type";
import { TableColumnsType, Button } from "antd";
import { Link } from 'react-router-dom';

const columns = (
  showModalEdit: (isOpen: boolean, data: Product) => void,
  showDeleteConfirm: (_id: string) => void
): TableColumnsType<Product> => [
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
      title: "Price",
      dataIndex: "price",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Color",
      dataIndex: "color",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Collection",
      dataIndex: "collection",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Size",
      dataIndex: "size",
      align: "center",
      render: (value) => <p>{value}</p>
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