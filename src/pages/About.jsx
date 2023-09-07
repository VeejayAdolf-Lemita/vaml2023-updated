import Me from '../assets/round.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiMui,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';

const About = () => {
  const aboutControls = useAnimation();
  const [aboutRef, aboutInView] = useInView();

  const librariesControls = useAnimation();
  const [librariesRef, librariesInView] = useInView();

  const inProgressControls = useAnimation();
  const [inProgressRef, inProgressInView] = useInView();

  const getInTouchControls = useAnimation();
  const [getInTouchRef, getInTouchInView] = useInView();

  // Define animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  useEffect(() => {
    if (aboutInView) aboutControls.start('visible');
    if (librariesInView) librariesControls.start('visible');
    if (inProgressInView) inProgressControls.start('visible');
    if (getInTouchInView) getInTouchControls.start('visible');
  }, [
    aboutControls,
    aboutInView,
    librariesControls,
    librariesInView,
    inProgressControls,
    inProgressInView,
    getInTouchControls,
    getInTouchInView,
  ]);
  return (
    <div className='pb-24'>
      <motion.div
        ref={aboutRef}
        initial='hidden'
        animate={aboutControls}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className='flex justify-center flex-wrap-reverse gap-4 mb-8'
      >
        <div className='max-w-sm'>
          <h2 className='text-center text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl md:text-left'>
            About Me
          </h2>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Hello! I am <span className='text-teal-500'> VEEJAY ADOLF M. LEMITA </span>I have a
            passion for designing, learning and building things for the web. I like to solve design
            problems, create interactive interfaces and develop web experiences and web
            applications.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            On a journey of non-stop learning new exciting things and keeping up with what`&apos;`s
            latest in tech.
          </p>
        </div>
        <img src={Me} alt='' className='max-w-sm' width={'90%'} />
      </motion.div>
      <motion.div
        ref={librariesRef}
        initial='hidden'
        animate={librariesControls}
        variants={scaleIn}
        transition={{ duration: 0.6 }}
        className='md:flex md:justify-center md:gap-4 md:flex-wrap'
      >
        <div className='bg-slate-100 rounded-xl mb-5 p-4 dark:bg-slate-800 md:max-w-sm md:w-96'>
          <h4 className='text-center text-xl py-2 text-teal-600 mb-4 font-medium dark:text-teal-400 md:text-2xl'>
            LANGUAGES
          </h4>
          <div className='text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <div className='flex flex-col items-center'>
              <SiHtml5 />
              <p className='text-sm text-center mt-2'>HTML</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiCss3 />
              <p className='text-sm text-center mt-2'>CSS</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiJavascript />
              <p className='text-sm mt-2'>Javascript</p>
            </div>
          </div>
        </div>
        <div className='bg-slate-100 rounded-xl mb-5 p-4 dark:bg-slate-800 md:max-w-sm md:w-96'>
          <h4 className='text-center text-2xl py-2 text-teal-600 mb-4 font-medium dark:text-teal-400 md:text-2xl'>
            LIBRARIES
          </h4>
          <div className='text-4xl flex justify-center gap-14 p-3 text-gray-600 dark:text-gray-400'>
            <div className='flex flex-col items-center'>
              <SiTailwindcss />
              <p className='text-sm mt-2'>Tailwindcss</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiJquery />
              <p className='text-sm mt-2'>jQuery</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiBootstrap />
              <p className='text-sm mt-2'>Bootstrap</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={inProgressRef}
        initial='hidden'
        animate={inProgressControls}
        variants={scaleIn}
        transition={{ duration: 0.6 }}
        className='md:flex md:justify-center'
      >
        <div className=' p-5 bg-slate-100 rounded-xl mb-5 md:p-11 dark:bg-slate-800'>
          <h4 className='text-center text-2xl py-2 text-teal-600 mb-4 font-medium dark:text-teal-400 md:text-2xl'>
            IN PROGRESS
          </h4>
          <div className='text-4xl flex flex-wrap justify-center gap-14 py-3 md:px-16 text-gray-600  dark:text-gray-400'>
            <div className='flex flex-col items-center'>
              <SiMongodb />
              <p className='text-sm text-center mt-2'>mongoDB</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiExpress />
              <p className='text-sm text-center mt-2'>Express</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiReact />
              <p className='text-sm mt-2'>React</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiNodedotjs />
              <p className='text-sm mt-2'>Node.js</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiRedux />
              <p className='text-sm mt-2'>Redux</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiMui />
              <p className='text-sm mt-2'>MaterialUI</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={getInTouchRef}
        initial='hidden'
        animate={getInTouchControls}
        variants={scaleIn}
        transition={{ duration: 0.6 }}
        className='md:max-w-full md:flex md:justify-center'
      >
        <div className='bg-slate-100 rounded-xl mb-5 p-4 dark:bg-slate-800'>
          <div className='md:px-36 flex justify-center flex-wrap-reverse gap-4 '>
            <div className='max-w-sm text-center md:min-w-max'>
              <p className='text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
                <span className='text-teal-500'>WHAT`&apos;`S NEXT?</span>
              </p>
              <h2 className='text-center text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
                Get in Touch
              </h2>
              <p className='text-center mb-5 text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
                Wanna work together for something great or just wanna say hello?
              </p>
              <div className='text-center'>
                <a
                  href='https://mail.google.com/mail/u/?authuser=lemvee11@gmail.com'
                  className='text-center'
                >
                  <button className='h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white'>
                    Say Hi!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
