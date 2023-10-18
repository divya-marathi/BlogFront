import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navigator() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top navcol text-white "
        style={{
          float: "right",
          marginBottom: "2em",
          background:
            "linear-gradient(to right, rgba(133, 0, 0, 0.959), #00446e)",
        }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Blogs
                </Link>
              </li>
              {/* <li className="nav-item text-right">
                                <Link to='/register' className="nav-link " aria-current="page">Sign up</Link>
                            </li> */}
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link to="//blogs/:blogId/save" className="nav-link">
                  Saved Blogs
                </Link>
              </li>
            </ul>
            <button className="nav-item  btn btn-buy btn-warning text-end">
              <Link to="/login" className="nav-link">
                Log In
              </Link>
            </button>
            <button className="nav-item m-2 btn btn-buy  text-end">
              <Link to="/signin" className="nav-link">                
              </Link>
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navigator;
