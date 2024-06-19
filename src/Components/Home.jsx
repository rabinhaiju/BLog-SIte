import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const Route = () => {
    navigate('/project');
  };
  const blog = () => {
    navigate('/blog');
  };

  return (
    <>
      <div className='bg-antique-white border-b-2 border-black'>
        <div className='w-full lg:w-[1200px] mx-auto py-10 lg:py-[100px]'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='text-center lg:text-left'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold my-3'>Become a better <br /> frontend developer.</h1>
              <p className='py-3 text-lg sm:text-xl font-semibold'>Take your frontend skills to the next level by <br /> recreating real websites from real companies.</p>
              <p className='py-3 text-lg sm:text-xl font-semibold'>The perfect type of practice for developers of all <br /> skill levels. Are you up for the challenge?</p>
              <div className='py-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <button onClick={Route} className='py-2 px-3 bg-white border-2 border-black font-semibold'>View projects</button>
                <button onClick={blog} className='py-2 px-3 bg-antique-white border-2 border-black font-semibold'>Learn More</button>
              </div>
            </div>
            <div className='object-cover mt-8 lg:mt-0'>
              <img className='w-full lg:w-[600px] h-auto' src="https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=1200&q=100" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-[1200px] mx-auto px-4'>
        <div className='text-center'>
          <h3 className='text-2xl sm:text-3xl font-bold my-6 lg:my-9'>Frontend Practice provides you with the <br /> inspiration and resources to create <br /> beautiful websites.</h3>
          <h2 className='text-lg sm:text-xl font-semibold'>Here are some ways you can benefit <br /> from using our platform:</h2>
        </div>

        <div className='flex flex-wrap gap-4 justify-center my-10'>
          <div className='flex items-center gap-4 p-4 border-2 border-black w-full md:w-[45%] lg:w-[30%]'>
            <img className='h-[100px] w-[100px]' src="https://images.prismic.io/frontendpractice/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.png?auto=compress,format" alt="" />
            <p>Enhance your skills by building real <br /> websites selected for their <br /> educational value.</p>
          </div>

          <div className='flex items-center gap-4 p-4 border-2 border-black w-full md:w-[45%] lg:w-[30%]'>
            <img className='h-[100px] w-[100px]' src="https://images.prismic.io/frontendpractice/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.png?auto=compress,format" alt="" />
            <p>Enhance your skills by building real <br /> websites selected for their <br /> educational value.</p>
          </div>

          <div className='flex items-center gap-4 p-4 border-2 border-black w-full md:w-[45%] lg:w-[30%]'>
            <img className='h-[100px] w-[100px]' src="https://images.prismic.io/frontendpractice/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.png?auto=compress,format" alt="" />
            <p>Enhance your skills by building real <br /> websites selected for their <br /> educational value.</p>
          </div>

          <div className='flex items-center gap-4 p-4 border-2 border-black w-full md:w-[45%] lg:w-[30%]'>
            <img className='h-[100px] w-[100px]' src="https://images.prismic.io/frontendpractice/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.png?auto=compress,format" alt="" />
            <p>Enhance your skills by building real <br /> websites selected for their <br /> educational value.</p>
          </div>
        </div>

        <div className='my-5'>
          <h3 className='text-2xl sm:text-3xl font-bold my-6 lg:my-9 text-center'>Ready to become a better <br /> frontend developer?</h3>
          <div className='text-center'>
            <button onClick={Route} className='py-2 px-3 border-2 border-black hover:bg-black hover:text-white font-semibold'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='bg-black text-white'>
        <div className='w-full lg:w-[1200px] mx-auto flex flex-col text-center py-10 gap-7'>
          <p>Frontend Practice - © 2024</p>
          <div className='text-center'>
            <ul className='flex flex-wrap justify-center gap-4'>
              <li className='hover:border-b-2 border-white'><Link to="/">Home</Link></li>
              <li className='hover:border-b-2 border-white'><Link to="/project">Project</Link></li>
              <li className='hover:border-b-2 border-white'><Link to="/blog">Blog</Link></li>
              <li className='hover:border-b-2 border-white'><Link to="/contact">Contact</Link></li>
              <li className='hover:border-b-2 border-white'><Link to="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
