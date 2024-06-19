import React, { useState } from 'react';
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Details } from './Data';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Project = () => {
  const [image, setImage] = useState(Details);
  const [input, setInput] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const navigate = useNavigate();

  const OntoProject = (id) => {
    navigate(`/project/${id}`);
  };

  const Search = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (level) => {
    setInput(level);
    setSelectedLevel(level);
  };

  const ChangeImage = image.filter((item) =>
    item.level.toString().toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <div className='border-b-2 border-black'>
        <div className='w-full lg:w-[1200px] mx-auto px-4'>
          <div className='flex flex-col items-center mt-20'>
            <h3 className='text-3xl sm:text-4xl lg:text-6xl font-bold my-3'>Project Library</h3>
            <p className='w-full sm:w-[220px] text-xl sm:text-2xl border-b-2 border-black font-bold mt-11 my-4 text-center sm:text-left'>How to get started:</p>
            <p className='flex items-center gap-2 text-lg sm:text-xl font-semibold py-2'><FaArrowRight className='text-sm' /> <span>Choose one of our projects below.</span> </p>
            <p className='flex items-center gap-2 text-lg sm:text-xl font-semibold py-2'><FaArrowRight className='text-sm' /> <span>Choose one of our projects below.</span> </p>
            <p className='flex items-center gap-2 text-lg sm:text-xl font-semibold py-2'><FaArrowRight className='text-sm' /> <span>Choose one of our projects below.</span> </p>
            <p className='flex items-center gap-2 text-xl sm:text-2xl font-bold py-2'><FaCheck /> <span>Become a better frontend developer.</span></p>
          </div>

          <div className='flex flex-wrap justify-center gap-3 mt-4'>
            <button onClick={() => handleClick('')} className='py-2 px-3 border-2 font-bold border-black hover:bg-black hover:text-white'>View ALL</button>
            <button onClick={() => handleClick('1')} className='py-2 px-4 border-2 font-bold border-black hover:bg-green-300'>Level 1</button>
            <button onClick={() => handleClick('2')} className='py-2 px-4 border-2 font-bold border-black hover:bg-yellow-400'>Level 2</button>
            <button onClick={() => handleClick('3')} className='py-2 px-4 border-2 font-bold border-black hover:bg-orange-400'>Level 3</button>
          </div>

          <div className='my-3 text-center'>
            <input value={input} onChange={Search} className='border-2 border-black w-full sm:w-[420px] h-[45px] px-3' placeholder='Search by name' type="text" />
          </div>

          {selectedLevel && (
            <div className='inline-block text-center my-4 py-2 sm:py-5 px-4 sm:px-[100px] bg-yellow-200'>
              <p className='text-lg sm:text-2xl font-bold'>Showing projects for {selectedLevel === '' ? 'All Levels' : `Level ${selectedLevel}`}</p>
            </div>
          )}
        </div>

        <div className='w-full lg:w-[1600px] mx-auto flex flex-wrap justify-center gap-4 mt-10 sm:mt-20 mb-10 sm:my-20 px-4'>
          {ChangeImage.map((item, id) => (
            <div className='relative' key={id}>
              <img className='w-full sm:w-[300px] h-[300px] sm:h-[500px] object-cover border-2 border-black' src={item.image} alt="" />
              <button onClick={() => OntoProject(item.id)} className='bg-yellow-300 py-1 sm:py-2 px-2 sm:px-4 border-2 font-bold border-black hover:bg-orange-400 absolute top-0 left-[70%] sm:left-[213px]'>{item.level}</button>
              <button onClick={() => OntoProject(item.id)} className='px-3 py-2 text-white font-bold bg-orange-800'>Details</button>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full lg:w-[1200px] mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl sm:text-3xl font-bold my-3'>Project Library</h3>
          <p className='text-lg sm:text-xl font-semibold text-center'>Projects with updates designs and no archived versions available. The <br />projects and reference images are still viewable, should you wish to <br /> learn from them.</p>
        </div>
      </div>

      <div className='w-full lg:w-[1600px] mx-auto flex flex-wrap justify-center gap-4 mt-10 sm:mt-20 mb-10 sm:my-20 px-4'>
        {ChangeImage.slice(0, 7).map((item, id) => (
          <div className='relative' key={id}>
            <img className='w-full sm:w-[300px] h-[300px] sm:h-[500px] object-cover border-2 border-black' src={item.image} alt="" />
            <button className='bg-yellow-300 py-1 sm:py-2 px-2 sm:px-4 border-2 font-bold border-black hover:bg-orange-400 absolute top-0 left-[70%] sm:left-[213px]'>{item.level}</button>
          </div>
        ))}
      </div>

      <div className='bg-black text-white'>
        <div className='w-full lg:w-[1200px] mx-auto flex flex-col text-center py-10 gap-7'>
          <p>Frontend Practice - © 2024</p>
          <div className='text-center'>
            <ul className='flex flex-wrap gap-4 justify-center'>
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
};

export default Project;
