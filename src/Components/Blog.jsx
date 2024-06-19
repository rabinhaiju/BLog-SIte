import React from 'react';

const Blog = () => {
  return (
    <div className='w-full max-w-[800px] mx-auto px-4 sm:px-0'>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center my-5 font-bold mt-10'>Frontend <br />
         Blog
      </h2>
      <p className='text-center text-lg sm:text-xl'>Covering a wide range of topics, including project tutorials, responsive design,<br className='hidden sm:block' /> accessibility, testing, helpful tips, and more.</p>
      <div className='mt-10 sm:mt-20 border-b-2 border-black border-t-2'>
        <div className='flex flex-col sm:flex-row justify-between border-b-2 border-black py-2'>
          <p className='text-lg sm:text-2xl font-bold'>Where to host your frontend projects.</p>
          <div className='flex gap-2 mt-2 sm:mt-0'>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>Hosting</button>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>Deployment</button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between border-b-2 border-black py-2'>
          <p className='text-lg sm:text-2xl font-bold'>How to improve your CSS skills.</p>
          <div className='flex gap-2 mt-2 sm:mt-0'>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>CSS</button>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>Tips</button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between border-b-2 border-black py-2'>
          <p className='text-lg sm:text-2xl font-bold'>Understanding JavaScript closures.</p>
          <div className='flex gap-2 mt-2 sm:mt-0'>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>JavaScript</button>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>Closures</button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between py-2'>
          <p className='text-lg sm:text-2xl font-bold'>A guide to modern React patterns.</p>
          <div className='flex gap-2 mt-2 sm:mt-0'>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>React</button>
            <button className='bg-black px-2 py-1 rounded-md text-white text-sm sm:text-base'>Patterns</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
