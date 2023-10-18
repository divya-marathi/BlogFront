import React, { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./AllBlogs.css";
import BlogDetails from "./BlogDetails";
import { useDispatch } from "react-redux";
import { update } from "../Redux/Action";


function AllBlogs() {

const dispatch=useDispatch()


  const [allBlog, setAllBlog] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    FetchAllBlog();
  });

  const FetchAllBlog = async () => {
    await axios.get("https://blogify-pw10.onrender.com/blog").then((res) => {
      setAllBlog(res.data);
    });
  };

  const clickMoreDetails=(book)=>{
    dispatch(update(book))
     navigate('/BlogDetails')
   
  }

  return (
    <div id="large-th">
      <div class="container  shadow border-secondary mt-5">        
        {/* <div class="choose">
          <a href="#list-th">
            <i class="fa fa-th-list" aria-hidden="true"></i>
          </a>
          <a href="..">
            <i class="fa fa-th-large" aria-hidden="true"></i>
          </a>
        </div> */}
        <div  className=" row   p-2  d-flex justify-content-center">
           {/* <h6>Find a Blog</h6> */}
          {allBlog.map((item, id) => 
            <BlogCard 
              title={item.title}
              description={item.description}
              img={item.img}
              id={item._id}
              date={item.date}
              likes={item.likes}
              dislikes={item.dislikes}

              BlogDetails={()=> clickMoreDetails({
                title:item.title,
                description:item.description,
                img:item.img,
                id:item._id,
                date:item.date,
                likes:item.likes,
                dislikes:item.dislikes
                    })}
            />
          )}
        </div>
      </div>
      {/* pagination */}
    </div>
  );
}

export default AllBlogs;
