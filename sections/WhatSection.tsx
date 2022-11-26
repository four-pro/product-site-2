/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface WhatSectionProps {}

const WhatSection: React.FC<WhatSectionProps> = (props) => {
  return (
    <section
      className='section course'
      id='whatWeOffer'
      aria-label='course'
      style={{
        backgroundColor: '#EEF2FF',
      }}
    >
      <div className='container'>
        <h2
          className='h2'
          style={{ paddingBottom: '10px', textAlign: 'center' }}
        >
          What we offer
        </h2>
        <p
          className='section-subtitle'
          style={{ textTransform: 'none', paddingBottom: '10px' }}
        >
          We strive to empower our students with various training such as :-
        </p>

        <h3
          className='h3'
          style={{ paddingBottom: '20px', textAlign: 'center' }}
        >
          Training{' '}
        </h3>

        <ul className='grid-list'>
          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>Clinical SAS training</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  SAS technology is being used in pharmaceutical, biotech, and
                  clinical research organisations to analyse clinical trial
                  data.
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>Semicon training</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  With the help of professionals in the field who have more than
                  20 years of experience in End to End VLSI product development
                  in the semiconductor industry and have trained VLSI newcomers
                  throughout their careers, you will work on live product
                  development.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>Clinical Research</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  Around the world, there is a significant transformation in the
                  drug and medical device development business.
                </p>
              </div>
            </div>
          </li>

          <li></li>
        </ul>

        <div style={{ display: 'grid', placeItems: 'center' }}>
          <div className='course-card'>
            <div className='card-content'>
              <h3 className='h3'>
                <div className='card-title'>Medical Coding</div>
              </h3>

              <p style={{ fontSize: '14px' }}>
                The conversion of medical records into a shortcode
                <br />
                for use in the healthcare sector is known as medical <br />
                coding.
              </p>
            </div>
          </div>
        </div>

        <h3
          className='h3'
          style={{
            paddingBottom: '20px',
            textAlign: 'center',
            paddingTop: '40px',
          }}
        >
          Project{' '}
        </h3>

        <div style={{ display: 'grid', placeItems: 'center' }}>
          <div className='course-card'>
            <div className='card-content'>
              <h3 className='h3'>
                <div className='card-title'>Clinical SAS project</div>
              </h3>

              <p style={{ fontSize: '14px' }}></p>
            </div>
          </div>
        </div>

        {/* <ul className='grid-list' style={{ placeItems: 'center' }}>
          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>Clinical SAS project</div>
                </h3>

                <p style={{ fontSize: '14px' }}></p>
              </div>
            </div>
          </li>
        </ul> */}

        {/* <ul className='about-list' style={{ paddingTop: '30px' }}>
          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Additional support to the students to gain better clinical
              knowledge and to boost their confidence levels to recap prior to
              attending the test.
            </p>
          </li>
        </ul> */}

        {/* <a href='#' className='btn has-before'>
          <span className='span'>Browse more courses</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a> */}
      </div>
    </section>
  );
};
export default WhatSection;
