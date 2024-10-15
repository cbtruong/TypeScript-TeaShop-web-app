import Search, { SearchProps } from "antd/es/input/Search";
import { Table, TableProps, notification, Modal, DatePicker, Button } from "antd";
import { User } from "../../../query/user/type";
import columns from "./columns";
import { useState, useEffect, useRef } from "react";
import confirm from "antd/es/modal/confirm";
import moment from "moment";
import UserForm from "./UserForm";

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const onChange: TableProps<User>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const BlogManage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | User;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [productList, setProductList] = useState<User[]>([]);

  const timeoutRef = useRef(setTimeout(() => { }, 0));

  const [filters, setFilters] = useState({
    start: 0,
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (modalEdit.data) {
      setModalEdit({
        isOpen: false,
        data: undefined,
      });
      return;
    }
    setIsModalOpen(false);
  };

  const onChange: TableProps<User>["onChange"] = (pagination) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }, 1500);
  };

  const showModalEdit = (isOpen: boolean, data: User) => {
    setModalEdit({
      isOpen,
      data,
    });
  };

  const showDeleteConfirm = (_id: string) => {
    confirm({
      title: "Bạn có chắc muốn xóa dữ liệu này?",
      content: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
      okText: "Xóa luôn sợ gì",
      okType: "danger",
      maskClosable: true,
      closable: true,
      // onOk() {
      //   deleteActivity({ _id })
      //     .then(() => {
      //       notification.success({ message: "Xóa thành công" });
      //     })
      //     .catch(() => {
      //       notification.error({
      //         message: "Xóa thất bại ! Kiểm tra lại nha !",
      //       });
      //     });
      // },
      cancelText: "Hủy",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-end my-4 space-x-2">
        <DatePicker.RangePicker
          placeholder={["", "Hôm nay"]}
          allowEmpty={[false, true]}
          onChange={(date) => {
            if (!date) return;

            if (date[0]) {
              setFilters((prev) => ({
                ...prev,
                start: moment(date[0]?.toString()).valueOf(),
              }));
            }

            if (date[1]) {
              setFilters((prev) => ({
                ...prev,
                end: moment(date[1]?.toString()).valueOf(),
              }));
            }
          }}
        />
        <Search
          placeholder="search..."
          allowClear
          className="w-[300px]"
          onSearch={onSearch}
        />
        <Button onClick={showModal}>Add new</Button>
        <Modal
          title={modalEdit.isOpen ? "Edit Product" : "Add Product"}
          open={isModalOpen || modalEdit.isOpen}
          onCancel={closeModal}
          cancelButtonProps={{
            className: "hidden",
          }}
          okButtonProps={{
            className: "hidden",
          }}
        >
          <UserForm initForm={modalEdit.data} />
        </Modal>
      </div>
      <Table
        columns={columns(showModalEdit, showDeleteConfirm)}
        dataSource={[...productList].map((item, index) => ({
          ...item,
          key: index,
        }))}
        pagination={{
          pageSize: 5,
          total: productList.length,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default BlogManage;