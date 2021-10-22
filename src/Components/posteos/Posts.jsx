import React, { useEffect, useState, useContext } from "react";
import { getPOSTS } from "../Service/service";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { PostContext } from "../Context/PostDataContext";
import UserContext from "../Context/UserContext";
import { types } from "../Context/Reducer";

const Posts = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);



  const { setPostData, emptyPost } = useContext(PostContext);
  useEffect(() => {
    setPostData(emptyPost);
    getPOSTS(setData);
  }, []);
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((entrada) => (
      <div
        key={entrada.id}
        className="mt-3 shadow-box border col-8 offset-2 p-2"
      >
        <Link
          to={`/post?id=${entrada.id}`}
          className="offset-1 col-10 h4 text-decoration-none text-light "
        >
          {entrada.title}
        </Link>
      </div>
    ));
  const pageCount = Math.ceil(data.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <div className="container">
      {currentPageData}
      <div className="col-md-4 offset-md-4 justify-content-md-between">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            "paginacion d-flex border shadow-lg mt-4 mb-2 justify-content-around"
          }
          pageClassName="mx-2 col-1 text-center fs-5 align-self-center"
          activeLinkClassName={"text-primary text-decoration-none"}
          pageClassName="text-light"
          previousLinkClassName={
            "paddingnull bi bi-chevron-left font-size: 2rem; color: cornflowerblue"
          }
          nextLinkClassName={
            " paddingnull bi bi-chevron-right font-size: 2rem; color: cornflowerblue"
          }
          breakClassName="text-light"
        />
      </div>
    </div>
  );
};

export default Posts;
