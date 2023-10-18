import axios from "axios";
import React, { useState } from "react";
import "./BlogCard.css";

const BlogCard = ({
  BlogDetails,
  id,
  img,
  date,
  likes,
  dislikes,
  title,
  description,
}) => {
  const [book, setBook] = useState({
    id,
    img,
    date,
    likes,
    dislikes,
    title,
    description,
  }); 
  const [like,setlike] = useState(0)

  return (
   
    <>
      <div       
        data-aos="zoom-in-right"
        className="d-flex text-center " style={{ width: "40%", height:"20%"}}
      >
        <div
          class="card  bg-info mt-5 shadow m-2 "       
        >
          <div class="view overlay">
            <img class="card-img-top" src={img} alt="Card image cap" style={{ width: "50%", }}/>
          </div>

          <div class="card-body bg-light">
            <h5 className="card-title text-danger"> {title}</h5>

            <hr />
            <h6 className="card-text"> {description}</h6>

            <p class="card-text ">{date}</p>           
            <br></br> 
            <span class="m-2" style={{ float:"right"}}><i class="fa-solid fa-thumbs-up" ></i></span>

            <span  className="m-2" style={{color:" #00d9ff" , float:"right"}}><i class="fa-regular fa-thumbs-down"></i></span>
            <button className="btn btn-rounded mb-3 text-info"  onClick={BlogDetails}>Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
