import { Blog } from "../../../query/blog/type";
import { TableColumnsType, Button } from "antd";
import { Link } from 'react-router-dom';

const columns = (
  showModalEdit: (isOpen: boolean, data: Blog) => void,
  showDeleteConfirm: (_id: string) => void
): TableColumnsType<Blog> => [
    {
      title: "Title",
      dataIndex: "title",
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
      title: "Description",
      dataIndex: "description",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Content",
      dataIndex: "content",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Blog Status",
      dataIndex: "blog_status",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Create Date",
      dataIndex: "create_date",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "End Date",
      dataIndex: "end_date",
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