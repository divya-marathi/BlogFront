import React from "react";
import { useState } from "react";
import axios from "axios";
import "./CreateBlog.css";
import { useNavigate } from "react-router-dom";


const CreateBlog = () => {

const [isTitlePresent,setIsTitlePresent]=useState(true)
const [isDescriptionPresent,setIsDescriptionPresent]=useState(true)
const navigate = useNavigate()

  const [inputBook, setInputBook] = useState({
    title: "",
    img: "",
    description: "",
    date: "",
    likes: "",
    dislikes: "",
  });

  const inputHandler = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const AddBlog = async (e) => {
    e.preventDefault();

if(inputBook.title===""){
  return setIsTitlePresent(false)
}else{
  setIsTitlePresent(true)
}

if(inputBook.description===""){
  return setIsDescriptionPresent(false)
}else{
  setIsDescriptionPresent(true)
}


    await axios
      .post("https://blogify-pw10.onrender.com/blog/create", {
        title: inputBook.title,
        img: inputBook.img,
        description: inputBook.description,
        date: inputBook.date,
        likes: inputBook.likes,
        dislikes: inputBook.dislikes,
      })
      .then((res) => {
        setInputBook({
          title: "",
          img: "",
          description: "",
          date: "",
          likes: "",
          dislikes: "",
        });

        alert("successFully Addded");
        {
          navigate('/')
        }
      });
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 ">
            <div class="card  text-white ">
              <form onSubmit={AddBlog} class="box">
                <h4>Add Your Blog</h4>
                <p class="text-white"> Please Fill the Book Details!</p>
             

                <input
                  value={inputBook.img}
                  onChange={inputHandler}
                  type="text"
                  name="img"
                  placeholder="img"
                  className="inputs"
                />
                   <input
                  value={inputBook.title}
                  onChange={inputHandler}
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="inputs"
                />

              {
                isTitlePresent? "" : <span  className="text-danger bg-light shadow"   >Please Add Title!</span> 
              }
                <input
                  value={inputBook.description}
                  onChange={inputHandler}
                  type="text"
                  name="description"
                  placeholder="description"
                  className="inputs"
                /> {
                  isDescriptionPresent? "" : <span  className="text-danger bg-light shadow">Please Add Description!</span> 
                }
                <input
                  value={inputBook.date}
                  onChange={inputHandler}
                  type="date"                
                  placeholder=""
                  className="inputs"
                />
                <input
                  value={inputBook.likes}
                  onChange={inputHandler}
                  type="number"
                  name="likes"
                  placeholder="like"
                  className="likes"
                />
                <input
                  value={inputBook.dislikes}
                  onChange={inputHandler}
                  type="number"
                  name="dislikes"
                  placeholder="dislike"
                  className="dislikes"
                />

                <input type="submit" name="" value="AddNow" href="#" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
