import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Logo from './assets/logo.png';

import CV from './assets/ResumeVeejayAdolfLemita.pdf';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Router>
        <div className={darkMode ? 'dark' : ''}>
          <main className=' bg-white px-8 dark:bg-gray-900 md:px-20 lg:px-40'>
            <section className='min-h-screen'>
              <header className='py-10 mb-12 flex justify-between dark:text-white'>
                <Link to='/' className='cursor-pointer'>
                  <img src={Logo} width='60px' />
                </Link>
                <ul className='flex items-center'>
                  <li>
                    <motion.div
                      layout // Add the layout prop to enable layout animations
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      onClick={toggleDarkMode}
                    >
                      {darkMode ? (
                        <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                      ) : (
                        <BsFillSunFill className='cursor-pointer text-2xl' />
                      )}
                    </motion.div>
                  </li>
                  <li>
                    <a
                      className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
                      href={CV}
                      download
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </header>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
              </Routes>
              <Nav />
            </section>
          </main>
        </div>
      </Router>
    </>
  );
}
