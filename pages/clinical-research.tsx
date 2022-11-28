import React from 'react';

import Head from 'next/head';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

interface ClinicalResearchProps {}

const ClinicalResearch: React.FC<ClinicalResearchProps> = (props) => {
  return (
    <>
      <Head>
        <title>Untitled web page| Clinical Research</title>
      </Head>

      <div id='top'>
        <main>
          <Navbar />

          <article>
            <section
              className='section category'
              aria-label='features'
              id='features'
              style={{
                backgroundColor: '#ffffff',
                paddingTop: '160px',
              }}
            >
              <div
                className='container'
                style={{
                  backgroundColor: '#ffffff',
                }}
              >
                <h2 className='h2 section-title'>Clinical Research Package</h2>

                <p className='section-text' style={{ textAlign: 'left' }}>
                  Globally, the industry that develops drugs and medical devices
                  is going through a lot of upheaval. This shift has accelerated
                  the creation of distinctive, cutting-edge, and safer
                  therapeutic approaches as well as tailored pharmaceuticals.
                  The commercial models are developing to higher degrees of
                  niche-busters and toward a coexistence of more recent and
                  previously utilised blockbuster treatments.
                </p>

                <p className='section-text' style={{ textAlign: 'left' }}>
                  Drug and device companies are concentrating their research and
                  development efforts in these regions, particularly the
                  research for clinical development of products, i.e. Phase I to
                  Phase IV clinical trials, due to the strengthening of
                  economies in the BRIC countries, i.e. Brazil, Russia, India,
                  and China. Additionally, local pharmaceutical and biotech
                  firms in these areas are accelerating their R&D efforts to
                  create both generic drugs and potential novel compounds.
                </p>

                <p className='section-text' style={{ textAlign: 'left' }}>
                  A number of clinical trial management companies and business
                  models have emerged as a result of the industry's expansion,
                  including full-service Clinical Research Organizations (CROs),
                  early-phase CROs, Site Management Organizations (SMOs), and
                  businesses that provide fewer but more specialised services
                  like medical writing, pharmacovigilance, clinical data
                  management, regulatory affairs, business consulting, and
                  knowledge process outsourcing (KPOs), among others.
                  Eventually, this expansion increased the need for skilled
                  personnel in the clinical research sector.
                </p>

                <p className='section-text' style={{ textAlign: 'left' }}>
                  The Advanced Diploma in Clinical Research Course will provide
                  you the information and abilities needed to succeed in a
                  career in clinical trials and drug development. The curriculum
                  has been created in a way that will complement your
                  foundational education and give you a platform to start a
                  career in clinical research in the pharmaceutical and biotech
                  industries.
                </p>

                {/* <ul className='about-list'>
          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Additional support to the students to gain better clinical
              knowledge and to boost their confidence levels to recap prior to
              attending the test.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              MOCK exams - The one on one MOCK OSCE sessions will help the
              student become confident and oriented, Examiner-led practice
              stations for mock OSCE.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              We also provide special courses for Nursing &Nursing Officer Exams
              like,{' '}
              <b>
                AIIMS, DSSSB, DGHS, KERALA PSC, ESI , SAFDARJUNG, RAILWAYS,
                JIPMER, PGI, BHU, NIMHANS
              </b>{' '}
              etc.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              <b>Health Skills Training</b> to deliver essential clinical skills
              training to healthcare professionals, including: nurses, nursing
              students, allied health professionals, doctors, medical students,
              clinical support workers, community staff and many more.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Partnered with top level healthcare trainers from the UK for
              providing necessary training for our students, which is lead by a
              Senior Consultant in UK with more than 20yrs of work experience.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              We also provide mentorship guidance & additional training when
              they reach UK in the form of OSCE training and retraining when
              needed. This greatly helps the students to be oriented and
              overcome the hurdles faced during the OSCE stations.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Students get guidance from their airport arrival to accommodation
              with food.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Placement at nursing facilities to get to know the culture and
              work ethics during the initial days of stay in the UK.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Assistance will be provided for registration and Job Placements
              for the right Candidates.
            </p>
          </li>
        </ul> */}
              </div>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};
export default ClinicalResearch;
