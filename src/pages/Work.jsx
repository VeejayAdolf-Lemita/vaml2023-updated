import { useEffect } from 'react';
import Zumumu from '../assets/zumumu.png';
import Pudding from '../assets/pudding.png';
import Lukslofts from '../assets/lukslofts.png';
import Digibutler from '../assets/digibutler.png';
import ShareCafe from '../assets/share-events.png';
import FeedbackUI from '../assets/Feedback UI.png';
import { motion, useAnimation } from 'framer-motion';

const Work = () => {
  const cardControls = useAnimation();

  useEffect(() => {
    cardControls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.1 }, // Staggered delay of 0.1 seconds
    }));
  }, [cardControls]);

  return (
    <div className='pb-32'>
      <h2 className='text-center text-3xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
        WORK
      </h2>
      <p className='text-sm py-5 text-center leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-l'>
        Collection of projects, from websites to web apps and everything tech. Includes experiments
        and self-discoveries.
      </p>

      <div className='flex flex-wrap flex-grow-0 w-full gap-3'>
        {/* Wrap each card in a motion.div */}
        {[
          {
            title: 'ZUMUMU',
            image: Zumumu,
            description:
              'Website for promoting products about order management system for hotel and restaurant businesses.',
            link: 'https://zumumu.com/?language=en',
          },
          {
            title: 'LUKSLOFTS',
            image: Lukslofts,
            description: 'A marketing website for a luxurious hotel in the Philippines.',
            link: 'https://lukslofts.com/',
          },
          {
            title: 'PUDDING',
            image: Pudding,
            description:
              'Pudding provides dependable solutions to safeguard industries and their assets.',
            link: 'https://pudding.ws/',
          },
          {
            title: 'DIGIBUTLER',
            image: Digibutler,
            description: 'A digital guest engagement system for a local hotel in the Philippines.',
            link: 'https://www.digibutler.net/',
          },
          {
            title: 'Share Cafe Events',
            image: ShareCafe,
            description:
              'A website application to showcase Event Halls and for users to reserve their events.',
            link: '#',
          },
          {
            title: 'FEEDBACK UI',
            image: FeedbackUI,
            description: 'Application for feedback (Practicing REACT).',
            link: 'https://github.com/VeejayAdolf-Lemita/feeback-app',
          },
        ].map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            animate={cardControls}
            custom={index} // Pass the index as a custom prop to set delays
            className='max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700'
          >
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              {/* Wrap the image in a motion.div for fade-in effect */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <img
                  className='p-2 rounded-lg w-full'
                  src={project.image}
                  alt=''
                  style={{ maxHeight: '180px' }}
                />
              </motion.div>
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {project.title}
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className='text-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white'>
                    Visit Website
                  </button>
                </a>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
