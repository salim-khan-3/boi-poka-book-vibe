import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';

const Home = () => {
    const bookData = useLoaderData();
    // console.log(bookData);
    return (
        <div>
            <Banner></Banner>
            <Books bookData={bookData}></Books>
        </div>
    );
};

export default Home;