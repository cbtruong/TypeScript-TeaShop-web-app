import { User } from "../../../query/user/type";
import { TableColumnsType, Button } from "antd";
import { Link } from 'react-router-dom';

const columns = (
  showModalEdit: (isOpen: boolean, data: User) => void,
  showDeleteConfirm: (_id: string) => void
): TableColumnsType<User> => [
    {
      title: "First Name",
      dataIndex: "first_name",
      filters: [],
      filterMode: "tree",
      filterSearch: true,
      align: "center",
      onFilter: (value, record) => record.title.startsWith(value as string),
      render(value, record) {
        return (
          <Link to={`/activities/${record.id}`} className="underline">
            {value}
          </Link>
        );
      },
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Image",
      dataIndex: "image",
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
      title: "Types Customer",
      dataIndex: "types_customer",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Role",
      dataIndex: "role",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Status Active",
      dataIndex: "status_active",
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
  ]

export default columns;