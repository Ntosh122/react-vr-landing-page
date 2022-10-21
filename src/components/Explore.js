import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
       <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-semibold mb-8' data-aos='fade-down' data-aos-delay='600' data-aos-offset='400'>Explore products in new ways</h3>
          <p className='max-w-xs mb-12' data-aos='fade-down' data-aos-delay='800' data-aos-offset='400'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.</p>
            <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'>
              <input type='text' placeholder='Your email' className='bg-gradient-to-t from-[#341d38] to-[#271223] h-12 px-4 outline-none rounded-md'
              />
              <button className='btn'>Start</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
