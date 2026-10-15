import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div>
      <div className="sidebar"></div>
      <Outlet />
    </div>
  );
}
