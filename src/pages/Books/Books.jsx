import React from 'react';
import Book from '../Book/Book';


const Books = ({bookData}) => {
    // console.log(bookData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {
                bookData.map((book)=><Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;