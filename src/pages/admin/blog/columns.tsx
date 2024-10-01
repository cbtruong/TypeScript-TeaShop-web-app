import { Blog } from "../../../query/blog/type";
import { TableColumnsType, Button } from "antd";
import { Link } from 'react-router-dom';

const columns = (
  showModalEdit: (isOpen: boolean, data: Blog) => void,
  showDeleteConfirm: (_id: string) => void
): TableColumnsType<Blog> => [
    {
      title: "Image",
      dataIndex: "blog_image",
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
      title: "Total View",
      dataIndex: "total_view",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Total Comment",
      dataIndex: "total_comment",
      align: "center",
      render: (value) => <p>{value}</p>
    },
    {
      title: "Total Like",
      dataIndex: "total_like",
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