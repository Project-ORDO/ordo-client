import { Outlet } from "react-router-dom";

const AdminLayout = () => (
  <div>
    <h1>Admin Panel</h1>
    <Outlet />
  </div>
);

export default AdminLayout;
