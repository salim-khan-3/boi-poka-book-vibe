import React from "react";
// import { FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { addToDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookData = useLoaderData();
  const findItems = bookData.find((currId) => currId.bookId === parseInt(id));

  const handleMarkAsRead = (id) => {
    addToDB(id);
  };
  return (
    <div className="flex items-center gap-12 shadow-lg rounded-xl p-6 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-[#f3f3f3] p-[74px] rounded-[16px]">
        <img
          className="w-[425px] h-[564px] inline-block"
          src={findItems.image}
          alt=""
        />
      </div>
      <div className="pt-5 w-1/2">
        <div>
          <div className="flex items-center gap-4"></div>
        </div>
        <div>
          <h1 className="font-bold text-2xl mt-6 mb-4">{findItems.bookName}</h1>
        </div>
        <div>
          <p className="mb-5">By : {findItems.publisher} </p>
        </div>
        {/* <div className=""></div> */}
        <div className="border-b border-t border-gray-300 border-solid py-3">
          <p>{findItems.category}</p>
        </div>

        <div>
          <p className="mt-6">
            <strong>Review:</strong>
            {findItems.review}
          </p>
        </div>
        <div className="flex items-center gap-8 my-8">
          <p>Tag</p>
          <div>
            {findItems.tags.map((tagData) => (
              <span className="bg-[#23be0a0d] py-2 px-4 text-[#23be0a] rounded-[30px]">
                {tagData}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <p>Number of Pages:</p>
            <strong>{findItems.totalPages}</strong>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p>Publisher:</p>
            <strong>{findItems.publisher}</strong>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p>Year of Publishing:</p>
            <strong>{findItems.yearOfPublishing}</strong>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p>Rating:</p>
            <strong>{findItems.rating}</strong>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-neutral btn-outline font-semibold mr-4"
          >
            Read
          </button>
          <button className="btn btn-accent text-[#fff] font-semibold">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
