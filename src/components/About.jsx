import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

          <div className='max-w-[1000px]  grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right'>
            <img src="/image13.jpg" alt="image" className=' w-full' />
            </div>
            <div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right mt-36 pl-4'>
            <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          
          </div>
            <p className='py-24'>I'm passionate about technology and women/girls's empowerment. With a strong foundation in emerging technology, HTML, Python, CSS, and JavaScript, I'm eager to contribute my skills to develop essential impact and collaborate with my team.</p> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
