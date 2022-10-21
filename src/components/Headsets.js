import React from 'react';

import Headset1 from '../assets/img/headset-1.png'
import Headset2 from '../assets/img/headset-2.png'
import Headset3 from '../assets/img/headset-3.png'
import Headset4 from '../assets/img/headset-4.png'
const Headsets = () => {
  return (
    <section className='py-12 lg:py-24 '>
      <div className='container mx-auto'>
      <h2 className='text-3xl font-bold mb-6' data-aos='fade-right' data-aos-offset='100'>Mixed Reality Headsets</h2>
      <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
        <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1000'>
          <img src={Headset1} alt='/'/>
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
            </p>
          </div>
        </div> 
        <div className='relative' data-aos='zoom-in' data-aos-offset='400' data-aos-delay='1300'>
          <img src={Headset2} alt='/'/>
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className='relative'data-aos='zoom-in' data-aos-offset='500' data-aos-delay='1500'>
          <img src={Headset4} alt='/'/>
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
            </p>
          </div>
        </div> 
        <div className='relative' data-aos='zoom-in' data-aos-offset='600' data-aos-delay='1700'>
          <img src={Headset3} alt='/'/>
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
            </p>
          </div>
        </div> 
      </div>
      </div>
    </section>
  )
};

export default Headsets;
