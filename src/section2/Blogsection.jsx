import React from 'react';
import "./Blogsection.css"
const BlogSection = () => {
  return (
    <div className='w-max mx-auto blog-container  relative pb-40'>
      <div className=" grid lg:grid-cols-2 grid-cols-1  gap-x-4 gap-y-4  mx-auto justify-between items-start">
        <div className=''>
          <img className='w-[300px] lg:w-[600px] h-[185px] lg:h-[365px] rounded-lg' src="https://kofe.al/storage/images/users_posts/1wtFgyIKxPvorJtbX9LwMvG2gCZMHASwFSXKBwt1.jpg" alt="Kassir Qızın Təbəssümü" />
          <h1 className='text-[33px] font-semibold'>Kassir Qızın Təbəssümü</h1>
          <p className='text-[15px] font-medium'>Daha çox →</p>
        </div>
        <div className='justify-end items-start flex flex-col gap-y-4'>
        <div className='flex justify-center items-center'>
            <img className='w-[150px] lg:w-[300px] h-[85px] lg:h-[175px] rounded-lg' src="https://kofe.al/storage/images/users_posts/ki8myVKIHvfJIFM0jyrwCBcMRFTuNMqy9oKdTXgO.jpg" alt="Kassir Qızın Təbəssümü" />
           <div className='flex flex-col ml-5'>
            <h1 className='text-[20px] font-bold'>Təyyarənin Apardığı Yer</h1>
            <p className='text-[15px] font-medium'>Daha çox →</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
          <img className='w-[150px] lg:w-[300px] h-[85px] lg:h-[175px] rounded-lg' src="https://kofe.al/storage/images/users_posts/ax69iwr4r2mgvbCjmD3X5AIY2khndu6KYQafHbld.jpg" alt="Kassir Qızın Təbəssümü" />
          <div className='flex flex-col ml-5'>
            <h1 className='text-[20px] font-bold'>Təyyarənin Apardığı Yer</h1>
            <p className='text-[15px] font-medium'>Daha çox →</p>
            </div>
            </div>
            <div className='flex justify-center items-center'>
          <img className='w-[150px] lg:w-[300px] h-[85px] lg:h-[175px] rounded-lg' src="https://kofe.al/storage/images/users_posts/FlFpXwCFxyIuHvqwAdDVifiUDr2trRn0I7dQdsHP.jpg" alt="Kassir Qızın Təbəssümü" />
          <div className='flex flex-col ml-5'>
            <h1 className='text-[20px] font-bold'>Təyyarənin Apardığı Yer</h1>
            <p className='text-[15px] font-medium'>Daha çox →</p>
            </div>
            </div>
        </div>
      </div>
    </div>

  );
};

export default BlogSection;
