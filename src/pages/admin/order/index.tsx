import Search, { SearchProps } from "antd/es/input/Search";
import { Table, TableProps, notification, Modal, DatePicker, Button } from "antd";
import { Order } from "../../../query/order/type"; // Adjust the import path based on your file structure
import columns from "./columns"; // Make sure to create a columns file for orders
import { useState, useEffect, useRef } from "react";
import confirm from "antd/es/modal/confirm";
import moment from "moment";
import OrderForm from "./OrderForm";

const onSearch: SearchProps["onSearch"] = (value, _e) => 
  console.log("Search value:", value);

const onChange: TableProps<Order>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("Table parameters:", pagination, filters, sorter, extra);
};

const OrderManage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | Order;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [orderList, setOrderList] = useState<Order[]>([]);

  const timeoutRef = useRef(setTimeout(() => {}, 0));

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

  const handleTableChange: TableProps<Order>["onChange"] = (pagination) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const handleSearch: SearchProps["onSearch"] = (value) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }, 1500);
  };

  const showModalEdit = (isOpen: boolean, data: Order) => {
    setModalEdit({
      isOpen,
      data,
    });
  };

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: "Are you sure you want to delete this order?",
      content: "You will not be able to recover this order after deletion!",
      okText: "Yes, delete it",
      okType: "danger",
      maskClosable: true,
      closable: true,
      // onOk() {
      //   deleteOrder({ id })
      //     .then(() => {
      //       notification.success({ message: "Deleted successfully" });
      //     })
      //     .catch(() => {
      //       notification.error({
      //         message: "Deletion failed! Please try again.",
      //       });
      //     });
      // },
      cancelText: "Cancel",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-end my-4 space-x-2">
        <DatePicker.RangePicker
          placeholder={["Start Date", "End Date"]}
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
          placeholder="Search orders..."
          allowClear
          className="w-[300px]"
          onSearch={handleSearch}
        />
        <Button onClick={showModal}>Add New</Button>
        <Modal
          title={modalEdit.isOpen ? "Edit Order" : "Add Order"}
          open={isModalOpen || modalEdit.isOpen}
          onCancel={closeModal}
          cancelButtonProps={{
            className: "hidden",
          }}
          okButtonProps={{
            className: "hidden",
          }}
        >
          <OrderForm initForm={modalEdit.data} />
        </Modal>
      </div>
      <Table
        columns={columns(showModalEdit, showDeleteConfirm)}
        dataSource={[...orderList].map((item, index) => ({
          ...item,
          key: index,
        }))}
        pagination={{
          pageSize: 5,
          total: orderList.length,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default OrderManage;
