import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    console.log(this.props.active);
    return (
      <div>
        <aside className="main-sidebar main-success sidebar-light-secondary elevation-4">
          {/* Brand Logo */}
          <a href="/dashboard" className="brand-link">
            <img
              src="dist/img/logo1.jpg"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            &nbsp;&nbsp;&nbsp;
            <span className="brand-text font-weight-bold"> Anthony</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) 
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                  </div>
                  <div className="info">
                    <a href="#" className="d-block">Senthil</a>
                  </div>
                </div>
               * Sidebar user panel (optional) */}
            <br />
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}

                <li className="nav-item">
                  {this.props.active == "Dashboard" ? (
                    <Link to="/dashboard" className="nav-link active">
                      {" "}
                      <i className="nav-icon fas fa-sticky-note" />
                      <p>Dashboard </p>
                    </Link>
                  ) : (
                    <Link to="/dashboard" className="nav-link ">
                      {" "}
                      <i className="nav-icon fas fa-sticky-note" />
                      <p>Dashboard </p>
                    </Link>
                  )}
                </li>

                <li className="nav-item">
                  {this.props.active == "Profile" ? (
                    <Link to="/profile" className="nav-link active">
                      {" "}
                      <i className="nav-icon fas fa-user-circle" />
                      &nbsp;
                      <p>
                        My Profile
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  ) : (
                    <Link to="/profile" className="nav-link ">
                      {" "}
                      <i className="nav-icon fas fa-user-circle" />
                      &nbsp;
                      <p>
                        My Profile
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  )}
                </li>

                <li className="nav-item has-treeview">
                  {this.props.active == "Parents"  ? (
                    <Link to="/parents" className="nav-link active">
                      <i className="nav-icon fas fa-users" />
                      &nbsp;
                      <p>
                        Parents Details
                        <i className="fas fa-angle-right right" />
                        <span className="badge badge-info right"></span>
                      </p>
                    </Link>
                  ) : (
                    <Link to="/parents" className="nav-link ">
                      <i className="nav-icon fas fa-users" />
                      &nbsp;
                      <p>
                        Parents Details
                        <i className="fas fa-angle-right right" />
                        <span className="badge badge-info right"></span>
                      </p>
                    </Link>
                  )}
                </li>

                <li className="nav-item has-treeview">
                  {this.props.active == "ChangePassword" ? (
                    <Link to="/changepassword" className="nav-link active">
                      <i className="nav-icon fas fa-key" />
                      &nbsp;
                      <p>
                        Change Password
                        <i className="right fas fa-angle-right" />
                      </p>
                    </Link>
                  ) : (
                    <Link to="/changepassword" className="nav-link ">
                      <i className="nav-icon fas fa-key" />
                      &nbsp;
                      <p>
                        Change Password
                        <i className="right fas fa-angle-right" />
                      </p>
                    </Link>
                  )}
                </li>

                <li className="nav-item has-treeview">
                  {this.props.active == "Living" ? (
                    <Link to="/living" className="nav-link active" >
                      <i className="nav-icon fas fa-map-marker" />
                      &nbsp;
                      <p>
                        Living Preferences
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  ) : (
                    <Link to="/living" className="nav-link ">
                      <i className="nav-icon fas fa-map-marker" />
                      &nbsp;
                      <p>
                        Living Preferences
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  )}
                </li>

                <li className="nav-item has-treeview">
                  {this.props.active == "Wallet" ? (
                    <Link to="/wallet" className="nav-link active">
                      <i className="nav-icon fas fa-rupee-sign" />
                      &nbsp;
                      <p>
                        Invoice/Bills
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  ) : (
                    <Link to="/wallet" className="nav-link ">
                      <i className="nav-icon fas fa-rupee-sign" />
                      &nbsp;
                      <p>
                        Invoice/Bills
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  )}
                </li>

                <li className="nav-item has-treeview">
                  {this.props.active == "FileUpload" ? (
                    <Link to="/fileupload" className="nav-link active">
                      <i className="nav-icon fas fa-user" />
                      &nbsp;
                      <p>
                        Notification
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  ) : (
                    <Link to="/fileupload" className="nav-link">
                      <i className="nav-icon fas fa-user" />
                      &nbsp;
                      <p>
                        Notification
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  )}
                </li>


                <li className="nav-item has-treeview">
                  {this.props.active == " Logout" ? (
                    <Link to="/login" className="nav-link ">
                      <i className="nav-icon fas fa-unlock-alt" />
                      &nbsp;
                      <p>
                        Logout
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  ) : (
                    <Link to="/login" className="nav-link ">
                      <i className="nav-icon fas fa-unlock-alt" />
                      &nbsp;
                      <p>
                        Logout
                        <i className="fas fa-angle-right right" />
                      </p>
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
