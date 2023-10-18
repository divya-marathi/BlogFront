import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./BlogDetails.css";
import { Allsearch } from "../Redux/Action";

const BlogDetails = () => {
  const SingledData = useSelector((s) => s);
  const navigate = useNavigate();
  const [isUpdateClic, setisUpdateClic] = useState(false);
  const dispatch = useDispatch();

  const [book, setBook] = useState("");

  const [inputBook, setInputBook] = useState({
    title: "",
    description: "",
    img: "",
    likes: " ",
    disLikes: " ",
  });

  const inputHandler = (e) => {
    e.preventDefault();
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (SingledData == null) {
    } else {
      setBook(SingledData[0]);
    }
  }, []);

  const updateHandler = async () => {
    setisUpdateClic(false);
    alert("Blog is updated!");

    await axios
      .post("https://blogify-pw10.onrender.com/update", {
        id: book.id,
        title: inputBook.title,
        description: inputBook.description,
        img: inputBook.img,
      })
      .then((res) => {
        setBook({
          id: book.id,
          title: inputBook.title,
          description: inputBook.description,
          img: inputBook.img,
        });
        setisUpdateClic(false);
      })
      .catch(() => {});
  };
  const updateStart = async () => {
    setisUpdateClic(true);
  };
  const deleteHandler = async () => {
    alert("deleted");
    navigate("/");
    await axios
      .post("http://localhost:7000/blog/delete", { id: book.id })
      .then(() => {})
      .catch(() => {
        console.log("something went worng...");
      });
  };
  return (
    <section
      data-aos="zoom-out-up"
      id="services"
      class="services section-bg mt-5"
    >
      {book == null ? null : (
        <div class="container-fluid">
          <div class="row row-sm text-center">
            <div class="col-md-6 _boxzoom">
              <div class="_product-images">
                <img
                  className="_product-images img-fluid"
                  id="sec"
                  src={book.img}
                />
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="col-md-6 p-5"
            >
              <div class="_product-detail-content">
                <p class="_p-name">
                  {isUpdateClic ? (
                    <input
                      value={inputBook.title}
                      onChange={inputHandler}
                      type="text"
                      id="sec"
                      name="title"
                      placeholder="Title"
                    />
                  ) : (
                    book.title
                  )}
                </p>
                <div class="_p-price-box">
                  <div class="_p-features">
                    <span>
                      {" "}
                      description :
                      {isUpdateClic ? (
                        <input
                          value={inputBook.description}
                          onChange={inputHandler}
                          type="text"
                          id="sec"
                          name="description"
                          placeholder="description"
                        />
                      ) : (
                        book.description
                      )}
                    </span>

                    <span>
                      {" "}
                      img:
                      {isUpdateClic ? (
                        <input
                          value={inputBook.img}
                          onChange={inputHandler}
                          type="text"
                          id="sec"
                          name="img"
                        />
                      ) : (
                        <img src={book.img}/>
                      )}
                    </span>
                  </div>
                  <p>
                    {" "}
                    <span class="m-2" style={{ float: "right" }}>
                      <i class="fa-solid fa-thumbs-up"></i>
                    </span>
                    <span
                      className="m-2"
                      style={{ color: " #00d9ff", float: "right" }}
                    >
                      <i class="fa-regular fa-thumbs-down"></i>
                    </span>
                  </p>
                  <div action="" method="post" accept-charset="utf-8">
                    <ul class="spe_ul"></ul>
                    <div class="_p-qty-and-cart">
                      <div class="_p-add-cart">
                        <button
                          onClick={deleteHandler}
                          class="btn-theme btn buy-btn "
                          tabindex="0"
                        >
                          Delete
                        </button>

                        {isUpdateClic ? (
                          <button
                            onClick={updateHandler}
                            class="btn-theme btn btn-success "
                            tabindex="0"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={updateStart}
                            class="btn-theme btn btn-success"
                            tabindex="0"
                          >
                            Update
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default BlogDetails;
