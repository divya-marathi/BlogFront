import logo from "./logo.svg";
import "./App.css";
import CreateBlog from "./Components/createBlog";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBlogs from "./Components/AllBlogs";
import Navigator from "./Components/Navigator.js";
import BlogDetails from "./Components/BlogDetails";
import Login from "./Components/SigninAndLogin/Login";
import Signin from "./Components/SigninAndLogin/Signin";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <Navigator/>
        <Routes>
          <Route path="/" index element={<AllBlogs />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/signin" element={< Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
