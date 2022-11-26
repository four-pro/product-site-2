/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = (props) => {
  return (
    <section
      className='section hero has-bg-image'
      id='home'
      aria-label='home'
      style={{
        backgroundImage: "url('./assets/images/hero-bg.svg')",
        backgroundColor: '#ffffff',
      }}
    >
      <div className='container'>
        <div className='hero-content'>
          <h1 className='h1 section-title'>
            Preparing <span className='span'>You</span> For Tomorrow
          </h1>

          <p className='hero-text'>
            With our extensive coaching programmes for foreign education, we
            assist you in pushing limits and achieving your goals. We provide
            unequalled counselling and assistance.
            {/* Realize your professional
            potential in technology-enabled healthcare services with the help of
            our training, advice, and placement assistance. */}
          </p>

          {/* <a href='#' className='btn has-before'>
            <span className='span'>Find courses</span>
          </a> */}
        </div>
        <div
        //   className='hero-banner'
        //   style={{
        //     position: 'relative',
        //     alignItems: 'center',
        //   }}
        >
          <div
            className='img-holder two'
            style={{
              borderRadius: '20px',
              placeItems: 'center',
              padding: '30px',
            }}
          >
            <img
              src='/coaching.jpg'
              //   width='240'
              //   height='370'
              alt='hero banner'
              className='img-cover'
              // style={{ backgroundColor: 'white' }}
            />
          </div>
          {/* <img
            src='./assets/images/hero-shape-2.png'
            width='552'
            height='301'
            // style={{ marginBottom: '450px' }}
            alt=''
            className='shape hero-shape-2'
          /> */}
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
