import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setItems] = useState([]);
  const [Category, setCategory] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(`http://localhost:3001/api/category`);

      const itemsCategory = await res.json();
      setCategory(itemsCategory);
      console.log(itemsCategory);
    };
    const getProducts = async () => {
      const res = await fetch(
        `http://localhost:3001/api/product?category=&limit=10&offset=0`
      );

      const items = await res.json();
      const total = items.count;
      setLoading(false);
      setPageCount(total / 10);
      setItems(items.products);
      setFilter(items.products);
    };

    getCategory();

    getProducts();
  }, []);
  console.log(items)

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3001/api/product?&limit=10&&offset=${currentPage}`
    );
    const items = await res.json();
    return items;
  };

  const handlePageClick = async (namber) => {
    let currentPage = namber.selected * 10;

    const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer.products);
  };

  console.log(data);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2 p-1"
            onClick={() => setFilter(data)}
          >
            All
          </button>

          {Category.map((item) => (
            <button
              key={item.id}
              className="btn btn-outline-dark me-2 "
              onClick={() => filterProduct({ item })}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="row m-2">
          {filter.map((item) => (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4  " key={item.id}>
                <img
                  className="card-img-top"
                  src={item.thumbnail}
                  alt={item.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0 ">
                    {item.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold ">${item.price} </p>

                  <NavLink
                    to={`/products/${item.id}`}
                    className="btn btn-warning mb-0"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ReactPaginate
          pageCount={pageCount}
          pageRange={2}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          activeClassName={"active"}
        />
      </div>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
