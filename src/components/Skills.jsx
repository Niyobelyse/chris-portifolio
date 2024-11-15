import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f]  text-gray-300'>
      {/* Skills Section */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='mt-36'>
          <p className='text-4xl font-bold inline border-b-4  border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I have used</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'>
          {[
            { img: HTML, name: 'HTML' },
            { img: CSS, name: 'CSS' },
            { img: JavaScript, name: 'JavaScript' },
            { img: ReactImg, name: 'React' },
            { img: GitHub, name: 'GitHub' },
            { img: Tailwind, name: 'Tailwind' },
          ].map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
              <img className='w-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Background Section */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Education Background</p>
          <p className='py-4'>My academic journey</p>
        </div>
        <div className='py-4'>
          <ul className='list-disc pl-5'>
            <li className='py-2'>
              <span className='font-bold'>Bachelor's Degree in Software Engineering</span> - AUCA (2017-2021)
            </li>
            <li className='py-2'>
              <span className='font-bold'>High School Diploma</span> - Gs st Joseph kabgayi (2018-2021)
            </li>
          </ul>
        </div>
      </div>

      {/* Experiences Section */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Experiences</p>
          <p className='py-4'>Professional and practical experiences</p>
        </div>
        <div className='py-4'>
          <ul className='list-disc pl-5'>
            <li className='py-2'>
              <span className='font-bold'>Software Engineer Student</span> - AUCA (2022-Present)
              <p>I worked on a mobile app project that grew from a simple class task to a comprehensive team effort involving UI/UX, database management, and backend development.</p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
