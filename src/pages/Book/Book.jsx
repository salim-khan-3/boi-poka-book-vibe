import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {
    console.log(book);
    const {bookId,image,bookName,category,publisher,rating,tags} = book
    return (
        <Link to={`/bookdetails/${bookId}`}>
        <div className='shadow-lg rounded-xl p-6 overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
            <div className='text-center bg-[#f3f3f3] py-8 rounded-[16px]'>
                <img className='w-[134px] h-[166px] inline-block' src={image} alt="" />
            </div>
            <div className='pt-5'>
                <div>
                    <div className='flex items-center gap-4'>
                        
                        {
                            tags.map((yong,index)=><span key={index} className='bg-[#23be0a0d] py-2 px-4 text-[#23be0a] rounded-[30px]'>{yong}</span>)
                        }
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-2xl mt-6 mb-4'>
                       {bookName}
                    </h1>
                </div>
                <div>
                    <p className='mb-5'>By :{publisher} </p>
                </div>
                <div className='border-b border-gray-300 border-dotted mb-5'></div>
                <div className='flex items-center justify-between'>
                    <p>{category}</p>
                    <div className='flex gap-4 items-center'>
                        <p>{rating}</p>
                        <div>
                            <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;
