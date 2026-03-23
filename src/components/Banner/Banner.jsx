import React from 'react';
import bannerImg from "../../assets/pngwing 1.png"

const Banner = () => {
    return (
        <div className='flex items-center justify-between py-20 px-28 bg-[#1313130d] rounded-[24px] mt-12'>
            <div>
                <h1 className='text-[56px] font-bold mb-10'>Books to freshen up your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-[#fff]">View The List</button>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;