import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Home = () => {
  // Define animation variants for the text elements
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Define container animation variants to stagger children
  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.2 }, // Stagger with a 0.2-second delay
    },
  };

  // Define animation variants for the icons
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Create an array of icon components
  const icons = [
    <AiFillGithub key='github' />,
    <AiFillLinkedin key='linkedin' />,
    <AiFillFacebook key='facebook' />,
  ];

  return (
    <motion.div
      className='text-center p-5'
      initial='hidden'
      animate='visible'
      variants={containerVariants} // Apply container animation variants
    >
      <motion.h2
        className='text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'
        variants={textVariants} // Apply text animation variants to the h2 element
      >
        Veejay Adolf
      </motion.h2>
      <motion.h3
        className='text-xl py-2 dark:text-white md:text-3xl'
        variants={textVariants} // Apply text animation variants to the h3 element
      >
        Front-end Developer and UI/UX designer.
      </motion.h3>
      <motion.p
        className='text-sm py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'
        variants={textVariants} // Apply text animation variants to the p element
      >
        Developer providing services for building (and occasionally designing) exceptional digital
        experiences.
      </motion.p>
      <div className='text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial='hidden'
            animate='visible'
            variants={iconVariants} // Apply icon animation variants
          >
            <a
              href={
                index === 0
                  ? 'https://github.com/VeejayAdolf-Lemita'
                  : index === 1
                  ? 'https://www.linkedin.com/in/veejay-adolf-lemita-b572b217b/'
                  : 'https://web.facebook.com/veejay.lemita.75/'
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              {icon}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
