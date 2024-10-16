import { ReactNode } from "react";  
import DashBoard from "../pages/admin/dashboard";
import ProductManage from "../pages/admin/product";
import CustomerManage from "../pages/admin/customer";
import OrderManage from "../pages/admin/order";
import SettingManage from "../pages/admin/setting";
import BlogManage from "../pages/admin/blog";
import VoucherManage from "../pages/admin/voucher";

const createRoute  = (path: string, element: ReactNode) => ({
  path,
  element,
});

const AdminRoutes = [
  createRoute('', <DashBoard />),
  createRoute('/admin/product', <ProductManage />),
  createRoute('/admin/customer', <CustomerManage />),
  createRoute('/admin/order', <OrderManage />),
  createRoute('/admin/setting', <SettingManage />),
  createRoute('/admin/blog', <BlogManage />),
  createRoute('/admin/voucher', <VoucherManage />),
];

export default AdminRoutes;