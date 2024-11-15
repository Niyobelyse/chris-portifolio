import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 max-w-[1000px] w-full'>
        {/* Contact Information */}
        <div className='text-gray-300 mb-8 sm:mb-0'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='py-4'>Feel free to reach out to me via the following channels:</p>
          <div className='mt-4'>
            <p className='text-lg'>📧 <span className='font-bold'>Email:</span> hirwac69@gmail.com</p>
            <p className='text-lg'>📞 <span className='font-bold'>Telephone:</span> +250 783 655 163</p>
            <p className='text-lg'>📍 <span className='font-bold'>Location:</span> Kigali, Rwanda</p>
          </div>
        </div>

        {/* Contact Form */}
        <form method='' action='' className='flex flex-col bg-[#0a192f] p-6 rounded-lg shadow-lg'>
          <div className='pb-4'>
            <p className='text-gray-300'>Submit the form below to get in touch!</p>
          </div>
          <input className='bg-[#ccd6f6] p-2 mb-4 rounded' type='text' placeholder='Name' name='name' />
          <input className='bg-[#ccd6f6] p-2 mb-4 rounded' type='email' placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2 mb-4 rounded' name='message' rows='5' placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 rounded-lg'>
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
