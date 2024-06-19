import React from 'react';

const Newsletter = () => {
  const subscribe = () => {
    alert('Subscribed successfully');
  };

  return (
    <div className='bg-gray-100'>
      <div className='w-full lg:w-[1200px] mx-auto py-10 lg:py-16'>
        <img
          src="https://substackcdn.com/image/fetch/w_1360,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5d0aff68-8a27-41d5-b43f-1ce746fb1149_1280x427.png"
          alt="Newsletter Banner"
          className='w-full rounded-lg'
        />

        <div className='mt-10 flex flex-col items-center'>
          <h3 className='text-3xl font-bold text-center'>Frontend Practice Newsletter</h3>
          <p className='text-center py-4 leading-7 max-w-xl'>
            Get the latest Frontend Practice updates and recommendations for websites, articles, and videos worth checking out. Stay informed and inspired with us.
          </p>

          <div className='flex flex-col items-center mt-6 sm:flex-row sm:items-start sm:justify-center sm:space-x-4'>
            <input
              className='border border-black w-full sm:w-auto py-2 px-3 rounded-lg mb-4 sm:mb-0'
              type='email'
              placeholder='Your Email Address'
            />
            <button
              onClick={subscribe}
              className='bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
