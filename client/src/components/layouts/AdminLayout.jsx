import React, { useState, useEffect } from "react";
import { NavLink, Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "../../../src/assets/css/AdminLayout.css"; // keep your path

const SidebarLinks = ({ onClick }) => (
  <ul className="nav nav-pills flex-column w-100">
    <li className="nav-item w-100">
      <NavLink
        to="/admin/users"
        onClick={onClick}
        className={({ isActive }) =>
          `nav-link px-3 py-2 w-100 ${isActive ? "active-link" : "text-white"}`
        }
      >
        <i className="bi bi-people me-2" /> Users
      </NavLink>
    </li>

    <li className="nav-item w-100">
      <NavLink
        to="/admin/contacts"
        onClick={onClick}
        className={({ isActive }) =>
          `nav-link px-3 py-2 w-100 ${isActive ? "active-link" : "text-white"}`
        }
      >
        <i className="bi bi-envelope me-2" /> Contacts
      </NavLink>
    </li>

    <li className="nav-item w-100">
      <NavLink
        to="/admin/services"
        onClick={onClick}
        className={({ isActive }) =>
          `nav-link px-3 py-2 w-100 ${isActive ? "active-link" : "text-white"}`
        }
      >
        <i className="bi bi-gear me-2" /> Services
      </NavLink>
    </li>

    <li className="nav-item w-100">
      <NavLink
        to="/"
        onClick={onClick}
        className={({ isActive }) =>
          `nav-link px-3 py-2 w-100 ${isActive ? "active-link" : "text-white"}`
        }
      >
        <i className="bi bi-house me-2" /> Home
      </NavLink>
    </li>
  </ul>
);

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  if (isLoading) return <h1 className="text-center mt-5">Loading...</h1>;
  if (!user?.isAdmin) return <Navigate to="/" />;

  return (
    <div className="admin-layout">
      {/* Mobile top bar (only on small screens) */}
      <nav className="navbar navbar-dark bg-dark d-md-none">
        <div className="container-fluid">
          <button
            className="btn btn-outline-light"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <i className="bi bi-list fs-4" />
          </button>
          <span className="navbar-brand ms-2">Admin Panel</span>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* Desktop sidebar (visible md+) */}
          <aside className="col-md-3 col-xl-2 px-sm-2 px-0 sidebar d-none d-md-flex flex-column align-items-center align-items-sm-start min-vh-100 text-white">
            <h2 className="fs-4 mb-3 mt-3 text-center w-100">Admin Panel</h2>
            <SidebarLinks />
          </aside>

          {/* Mobile sliding drawer (controlled by React state) */}
          <div className={`mobile-drawer bg-dark text-white ${drawerOpen ? "open" : ""}`}>
            <div className="drawer-inner p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0">Menu</h5>
                <button className="btn-close btn-close-white" onClick={() => setDrawerOpen(false)} aria-label="Close" />
              </div>
              <SidebarLinks onClick={() => setDrawerOpen(false)} />
            </div>
          </div>
          {drawerOpen && <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />}

          {/* Main content */}
          <main className="col py-3 admin-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
